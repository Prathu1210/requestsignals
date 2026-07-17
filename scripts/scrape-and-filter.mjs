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
// with each category term. More phrases = more queries = more CSE quota used.
// Google CSE free tier is 100 queries/day; 10 categories x 2 phrases = 20/day.
// Each query searches across whatever platforms are configured in the CSE's
// own "Sites to search" list, not just one hardcoded site.
const SEEK_PHRASES = ['looking for', 'in need of a']

// Delay between classification calls. OpenRouter's free-tier binding
// constraint is a daily request cap rather than a tight per-minute one, but we
// still pace calls to be a good citizen.
const CLASSIFY_DELAY_MS = Number(process.env.CLASSIFY_DELAY_MS || 2000)

// Results to request per CSE query (max 10 on the free API).
const RESULTS_PER_QUERY = Number(process.env.RESULTS_PER_QUERY || 10)

// Minimum AI confidence to keep a lead.
const MIN_CONFIDENCE = 0.6

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

// Ask the classifier model (via OpenRouter) to judge a single search result.
// Returns the parsed JSON object or null if the call/parse failed.
async function classifyLead(result, categoryKey) {
  const prompt = `You are qualifying leads from social media posts (LinkedIn, Facebook, Instagram, Reddit, X/Twitter). A "lead" is a post from someone who is actively looking to HIRE freelance or agency help (not people offering services, not job seekers, not recruiters posting job openings for full-time roles).

Post title: ${result.title}
Post snippet: ${result.snippet}
Search category hint: ${categoryKey}

Respond with STRICT JSON only, no markdown, no commentary, exactly this shape:
{"is_lead": boolean, "category": string, "budget_mentioned": boolean, "urgent": boolean, "ai_confidence": number}

Where:
- is_lead: true only if this is someone seeking to hire freelance/agency help.
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
async function addLead(result, verdict) {
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
        published_at: new Date().toISOString(),
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
    errors: 0,
    quotaExhausted: false,
  }

  // De-dupe links within this run so we don't classify the same post twice
  // when it surfaces under multiple queries.
  const seenLinks = new Set()

  // The classifier's free-tier daily quota can run out before we reach every
  // category. Rotate the starting category by day so the cutoff point moves
  // each run instead of always starving the same categories at the end of
  // the list.
  const dayOffset = Math.floor(Date.now() / 86400000) % CATEGORIES.length
  const rotatedCategories = [...CATEGORIES.slice(dayOffset), ...CATEGORIES.slice(0, dayOffset)]

  catLoop:
  for (const cat of rotatedCategories) {
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

        const outcome = await addLead(result, verdict)
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
