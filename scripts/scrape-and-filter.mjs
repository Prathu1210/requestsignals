#!/usr/bin/env node
// scripts/scrape-and-filter.mjs
//
// Lead-scraping pipeline:
//   Google Custom Search -> OpenRouter (NVIDIA Nemotron 3 Ultra, free) classification -> POST /api/add-lead
//
// The search itself isn't restricted to one platform in code — it relies on
// the Programmable Search Engine's own "Sites to search" configuration
// (currently: linkedin.com, facebook.com, instagram.com, reddit.com, x.com)
// to scope results across social platforms where people post asking for
// freelance/agency help.
//
// Run locally:   npm run scrape   (uses node --env-file=.env.local)
// Run in CI:     see .github/workflows/scrape.yml
//
// Dependency-light: uses built-in fetch only, no npm packages.

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const {
  GOOGLE_CSE_KEY,
  GOOGLE_CSE_ID,
  OPENROUTER_API_KEY,
  ADMIN_KEY,
  SITE_URL,
} = process.env

// Free model on OpenRouter (no cost, no per-token billing).
const CLASSIFIER_MODEL = 'nvidia/nemotron-3-ultra-550b-a55b:free'

// Keep these keys in sync with components/CategoryFilter.js. Each category maps
// to the noun phrase we search for across social platforms. "term" is what
// the person is looking to hire.
const CATEGORIES = [
  { key: 'web_development',   term: 'web developer' },
  { key: 'app_development',   term: 'mobile app developer' },
  { key: 'digital_marketing', term: 'digital marketer' },
  { key: 'design',            term: 'UI UX designer' },
  { key: 'software_dev',      term: 'software developer' },
  { key: 'ecommerce',         term: 'Shopify ecommerce developer' },
  { key: 'devops_cloud',      term: 'DevOps cloud engineer' },
  { key: 'data_analytics',    term: 'data analyst' },
  { key: 'cybersecurity',     term: 'cybersecurity expert' },
  { key: 'content_writing',   term: 'content writer' },
]

// Intent phrases signalling someone is seeking freelance/agency help. Combined
// with each category term. Each query searches across whatever platforms are
// configured in the CSE's own "Sites to search" list, not just one hardcoded
// site.
const SEEK_PHRASES = ['looking for', 'in need of a']

// Google CSE free tier is 100 queries/day. The workflow runs every 2 hours
// (12 runs/day), so each run only covers a rotating slice of categories
// instead of all 10 every time: 3 categories x 2 phrases x 12 runs/day = 72
// queries/day, safely under the cap while still touching every category
// several times a day. If you change the cron schedule, adjust this so
// CATEGORIES_PER_RUN x SEEK_PHRASES.length x (runs per day) stays under 100.
const CATEGORIES_PER_RUN = Number(process.env.CATEGORIES_PER_RUN || 3)

// Rotation window in hours — should match the cron schedule's interval. Used
// only to size the rotation step so coverage advances smoothly over time,
// not tied to a run counter (which cron delays/misses could throw off).
const ROTATION_SLOT_HOURS = Number(process.env.ROTATION_SLOT_HOURS || 2)

// Delay between classification calls. OpenRouter's free-tier binding
// constraint is a daily request cap rather than a tight per-minute one, but we
// still pace calls to be a good citizen.
const CLASSIFY_DELAY_MS = Number(process.env.CLASSIFY_DELAY_MS || 2000)

// Results to request per CSE query (max 10 on the free API).
const RESULTS_PER_QUERY = Number(process.env.RESULTS_PER_QUERY || 10)

// Minimum AI confidence to keep a lead.
const MIN_CONFIDENCE = 0.6

// Reject posts older than this. Google's Custom Search API has no hour-level
// freshness filter (its finest built-in option is per-day), and social posts
// often aren't indexed same-day anyway, so an exact "last 1-2 hours" window
// isn't achievable against this data source. Instead we parse the real post
// date out of the search snippet (Google shows it there) and filter on that.
// Measured against real search results: Google ranks these queries by
// relevance/authority, not recency, so a tight window (originally 14 days)
// rejected essentially 100% of results in testing. 90 days still filters
// genuinely stale content while letting real volume through.
const MAX_POST_AGE_DAYS = Number(process.env.MAX_POST_AGE_DAYS || 90)

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// Thrown when OpenRouter reports the shared daily free-model quota is fully
// spent, so the caller can stop the whole run early instead of burning the
// rest of its wall-clock time on guaranteed 429s.
class QuotaExceededError extends Error {}

function requireEnv() {
  const missing = []
  if (!GOOGLE_CSE_KEY) missing.push('GOOGLE_CSE_KEY')
  if (!GOOGLE_CSE_ID) missing.push('GOOGLE_CSE_ID')
  if (!OPENROUTER_API_KEY) missing.push('OPENROUTER_API_KEY')
  if (!ADMIN_KEY) missing.push('ADMIN_KEY')
  if (!SITE_URL) missing.push('SITE_URL')
  if (missing.length) {
    console.error(`Missing required env vars: ${missing.join(', ')}`)
    console.error('See .env.local.example for the full list.')
    process.exit(1)
  }
}

// Google Custom Search JSON API. Returns [{ title, link, snippet }].
async function googleSearch(query) {
  const url = new URL('https://www.googleapis.com/customsearch/v1')
  url.searchParams.set('key', GOOGLE_CSE_KEY)
  url.searchParams.set('cx', GOOGLE_CSE_ID)
  url.searchParams.set('q', query)
  url.searchParams.set('num', String(RESULTS_PER_QUERY))

  const res = await fetch(url)
  if (!res.ok) {
    const body = await res.text()
    console.error(`  ! CSE query failed (${res.status}): ${body.slice(0, 200)}`)
    return []
  }
  const data = await res.json()
  if (!Array.isArray(data.items)) return []
  return data.items.map((it) => ({
    title: it.title || '',
    link: it.link || '',
    snippet: it.snippet || '',
  }))
}

// Google's snippets usually lead with the page's actual date, e.g.
// "Oct 16, 2022 ... Be warned, a full-featured ecommerce platform is...".
// Extract it so we can (a) reject stale posts before spending AI quota on
// them, and (b) store the real post date instead of "now".
function extractPostDate(snippet) {
  const match = snippet.match(/([A-Z][a-z]{2} \d{1,2}, \d{4})/)
  if (!match) return null
  const date = new Date(match[1])
  return isNaN(date.getTime()) ? null : date
}

// Ask the classifier model (via OpenRouter) to judge a single search result.
// Returns the parsed JSON object or null if the call/parse failed.
async function classifyLead(result, categoryKey) {
  const prompt = `You are qualifying leads from social media posts (LinkedIn, Facebook, Instagram, Reddit, X/Twitter). A "lead" is a post where the author has a SPECIFIC project of their own right now and is directly trying to HIRE a freelancer or agency to do it.

REJECT (is_lead: false) even if hiring/freelancers/developers are mentioned, when the post is:
- Asking the community for ADVICE or opinions ("How do I find a good developer?", "Should I hire someone or build it myself?", "Any tips for finding freelancers?", "What should I look for when hiring a designer?")
- General discussion, opinion, or educational content about hiring, freelancing, or a profession
- Someone OFFERING their own services (a freelancer/agency promoting themselves)
- A job posting for a full-time employee, or a recruiter's post
- A subreddit/community page, or a post whose "looking for" refers to something other than paid freelance work (a job, a mentor, unpaid advice, a co-founder)

ACCEPT (is_lead: true) only when the author describes their OWN specific project or need and is inviting people to reach out, apply, comment, or message them to do the work.

Post title: ${result.title}
Post snippet: ${result.snippet}
Search category hint: ${categoryKey}

Respond with STRICT JSON only, no markdown, no commentary, exactly this shape:
{"is_lead": boolean, "category": string, "budget_mentioned": boolean, "urgent": boolean, "ai_confidence": number}

Where:
- is_lead: per the ACCEPT/REJECT rules above.
- category: one of web_development, app_development, digital_marketing, design, software_dev, ecommerce, devops_cloud, data_analytics, cybersecurity, content_writing. Pick the best fit.
- budget_mentioned: true if a budget, rate, or pay is mentioned.
- urgent: true if urgency is expressed (asap, urgent, immediately, tight deadline).
- ai_confidence: your confidence from 0 to 1 that is_lead is correct.`

  let res
  try {
    res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: CLASSIFIER_MODEL,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0,
        // Generous headroom: this is a reasoning model that spends tokens
        // thinking before writing the final JSON answer. Too low a limit
        // truncates it mid-thought and wastes the call entirely.
        max_tokens: 1000,
      }),
    })
  } catch (err) {
    console.error(`  ! OpenRouter request error: ${err.message}`)
    return null
  }

  if (!res.ok) {
    const body = await res.text()
    if (res.status === 429 && /per-day/i.test(body)) {
      throw new QuotaExceededError(body)
    }
    console.error(`  ! OpenRouter failed (${res.status}): ${body.slice(0, 200)}`)
    return null
  }

  const data = await res.json()
  const text = data?.choices?.[0]?.message?.content
  if (!text) {
    console.error('  ! OpenRouter returned no text')
    return null
  }

  try {
    // Strip any stray code fences in case the model wraps the JSON.
    const cleaned = text.trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim()
    return JSON.parse(cleaned)
  } catch {
    console.error(`  ! Could not parse classifier JSON: ${text.slice(0, 120)}`)
    return null
  }
}

// Cheap existence check against our own database — costs no AI quota, so we
// use it to skip already-saved posts before ever calling the classifier.
async function leadExists(link) {
  const url = new URL(`${SITE_URL.replace(/\/$/, '')}/api/check-lead`)
  url.searchParams.set('link', link)

  try {
    const res = await fetch(url, { headers: { 'x-admin-key': ADMIN_KEY } })
    if (!res.ok) return false
    const data = await res.json()
    return !!data.exists
  } catch (err) {
    console.error(`  ! check-lead request error: ${err.message}`)
    return false
  }
}

// POST a qualified lead. Returns 'added' | 'duplicate' | 'error'.
async function addLead(result, verdict, postDate) {
  const url = `${SITE_URL.replace(/\/$/, '')}/api/add-lead`
  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': ADMIN_KEY,
      },
      body: JSON.stringify({
        title: result.title,
        content: result.snippet,
        link: result.link,
        category: verdict.category,
        budget_mentioned: !!verdict.budget_mentioned,
        urgent: !!verdict.urgent,
        ai_confidence: verdict.ai_confidence,
        // Use the post's real date when we could parse one out of the
        // snippet, so the site shows honest "X days ago" instead of "Just
        // now" for content that's actually old.
        published_at: (postDate || new Date()).toISOString(),
      }),
    })
  } catch (err) {
    console.error(`  ! add-lead request error: ${err.message}`)
    return 'error'
  }

  if (res.status === 201) return 'added'
  if (res.status === 409) return 'duplicate'

  const body = await res.text()
  console.error(`  ! add-lead failed (${res.status}): ${body.slice(0, 200)}`)
  return 'error'
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  requireEnv()

  const stats = {
    queriesRun: 0,
    resultsFound: 0,
    classifyCalls: 0,
    leadsAdded: 0,
    duplicatesSkipped: 0,
    rejected: 0,
    tooOld: 0,
    errors: 0,
    quotaExhausted: false,
  }

  // De-dupe links within this run so we don't classify the same post twice
  // when it surfaces under multiple queries.
  const seenLinks = new Set()

  // Cover a rolling slice of categories each run (see CATEGORIES_PER_RUN)
  // instead of all 10 every time, to stay within the CSE daily quota at
  // higher run frequencies. The slice advances by wall-clock time rather
  // than a run counter, so coverage stays even even if a run is delayed or
  // skipped entirely.
  const slotIndex = Math.floor(Date.now() / (ROTATION_SLOT_HOURS * 3600000))
  const startIdx = (slotIndex * CATEGORIES_PER_RUN) % CATEGORIES.length
  const selectedCategories = Array.from(
    { length: Math.min(CATEGORIES_PER_RUN, CATEGORIES.length) },
    (_, i) => CATEGORIES[(startIdx + i) % CATEGORIES.length]
  )

  catLoop:
  for (const cat of selectedCategories) {
    for (const phrase of SEEK_PHRASES) {
      const query = `"${phrase}" ${cat.term}`
      console.log(`\n[query] ${query}`)
      const results = await googleSearch(query)
      stats.queriesRun++
      stats.resultsFound += results.length
      console.log(`  ${results.length} result(s)`)

      for (const result of results) {
        if (!result.link || seenLinks.has(result.link)) continue
        seenLinks.add(result.link)

        // Reject stale posts before any network calls at all — cheapest
        // possible check, and the main defense against old content since
        // Google's API can't filter freshness at this granularity itself.
        const postDate = extractPostDate(result.snippet)
        if (postDate && Date.now() - postDate.getTime() > MAX_POST_AGE_DAYS * 86400000) {
          stats.tooOld++
          console.log(`  - too old (${postDate.toDateString()}): ${result.title.slice(0, 70)}`)
          continue
        }

        // Skip posts we've already saved without spending any AI quota on
        // them — matters most when the scraper runs multiple times a day.
        if (await leadExists(result.link)) {
          stats.duplicatesSkipped++
          console.log(`  = duplicate (already saved): ${result.title.slice(0, 70)}`)
          continue
        }

        let verdict
        try {
          verdict = await classifyLead(result, cat.key)
        } catch (err) {
          if (err instanceof QuotaExceededError) {
            console.error('\n! Daily classifier quota exhausted — stopping run early.')
            stats.quotaExhausted = true
            break catLoop
          }
          throw err
        }
        stats.classifyCalls++
        await sleep(CLASSIFY_DELAY_MS)

        if (!verdict) {
          stats.errors++
          continue
        }

        const confidence = Number(verdict.ai_confidence)
        if (!verdict.is_lead || !(confidence >= MIN_CONFIDENCE)) {
          stats.rejected++
          console.log(
            `  - rejected (is_lead=${verdict.is_lead}, conf=${verdict.ai_confidence}): ${result.title.slice(0, 70)}`
          )
          continue
        }

        const outcome = await addLead(result, verdict, postDate)
        if (outcome === 'added') {
          stats.leadsAdded++
          console.log(`  + added [${verdict.category}] ${result.title.slice(0, 70)}`)
        } else if (outcome === 'duplicate') {
          stats.duplicatesSkipped++
          console.log(`  = duplicate: ${result.title.slice(0, 70)}`)
        } else {
          stats.errors++
        }
      }
    }
  }

  console.log('\n========== SUMMARY ==========')
  console.log(`Queries run:        ${stats.queriesRun}`)
  console.log(`Results found:      ${stats.resultsFound}`)
  console.log(`Unique classified:  ${stats.classifyCalls}`)
  console.log(`Leads added:        ${stats.leadsAdded}`)
  console.log(`Duplicates skipped: ${stats.duplicatesSkipped}`)
  console.log(`Rejected (not lead/low conf): ${stats.rejected}`)
  console.log(`Too old (>${MAX_POST_AGE_DAYS}d):     ${stats.tooOld}`)
  console.log(`Errors:             ${stats.errors}`)
  if (stats.quotaExhausted) {
    console.log('Stopped early:      daily classifier quota exhausted')
  }
  console.log('=============================')
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
