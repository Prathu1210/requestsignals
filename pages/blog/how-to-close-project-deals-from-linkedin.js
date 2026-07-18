import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Theme.module.css";
import { useCardEffects } from "../../hooks/useCardEffects";

export default function Post() {
  useCardEffects(styles.card);

  return (
    <>
      <Head>
        <title>How to Close Project Deals You Found on Social Media | RequestSignals</title>
        <meta
          name="description"
          content="Step-by-step guide to closing project deals sourced from major social media platforms. Learn how to write winning proposals, talk pricing with confidence, handle objections, protect yourself with contracts, and get to a signature."
        />
        <meta name="keywords" content="LinkedIn leads, Reddit leads, X leads, Facebook leads, Instagram leads, social media leads, freelance leads, project leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="How to Close Project Deals You Found on Social Media" />
        <meta property="og:description" content="Master the process of turning a reply on a major social media platform into a signed contract. Proposals, pricing conversations, objection handling, contracts, and the follow-up that closes deals." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/how-to-close-project-deals-from-linkedin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Close Project Deals You Found on Social Media" />
        <meta name="twitter:description" content="Learn how freelancers and agencies close project deals sourced from major social media platforms with proven closing techniques." />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Close Project Deals You Found on Social Media",
            "description": "Step-by-step guide to closing project deals sourced from major social media platforms. Learn proposal writing, pricing conversations, objection handling, contracts, and how to get to a signature.",
            "image": "https://requestsignals.com/images/social-deal-closing.jpg",
            "author": {
              "@type": "Organization",
              "name": "RequestSignals",
              "url": "https://requestsignals.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RequestSignals",
              "logo": {
                "@type": "ImageObject",
                "url": "https://requestsignals.com/logo.png"
              }
            },
            "datePublished": "2026-07-18",
            "dateModified": "2026-07-18",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://requestsignals.com/blog/how-to-close-project-deals-from-linkedin"
            }
          })}
        </script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <Header />

      {/* BLOG HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <div style={{
              display: 'inline-block',
              marginBottom: '15px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#f76fd8',
              background: 'rgba(247, 111, 216, 0.1)',
              padding: '6px 12px',
              borderRadius: '20px'
            }}>
              <i className="fas fa-file-contract"></i> Deal Closing Guide
            </div>
            <h1 style={{ fontSize: '42px', lineHeight: '1.2' }}>
              How to Close <span className={styles.gradientText}>Project Deals</span> You Found on Social Media
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              Whether the conversation started as a comment on a professional networking platform, a reply on a community-driven platform, a quick exchange on a fast-moving, short-form platform, a post in a group-based social platform, or a DM on a visual, portfolio-first platform, closing works almost the same way once someone actually replies. Here's the proven process for turning that reply into a signed contract.
            </p>

            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-briefcase" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>For Freelancers & Agencies</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>14 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-chart-line" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>Advanced Level</span>
              </div>
            </div>

            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Deal Closing</span>
              <span className={styles.tag}>Multi-Platform Outreach</span>
              <span className={styles.tag}>Proposals & Pricing</span>
              <span className={styles.tag}>Contracts</span>
              <span className={styles.tag}>Objection Handling</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>

              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)' }}><i className="fas fa-handshake"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Success Rate</h4>
                      <p>Proven methods that work across every platform</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)' }}><i className="fas fa-chart-pie"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Key Insight</h4>
                      <p>Once they reply, the platform stops mattering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL DIVIDER */}
      <div className={styles.minimalDivider}>
        <div className={styles.minimalLine} style={{ background: 'linear-gradient(90deg, #f76fd8, #ff6b9d)' }}></div>
      </div>

      {/* BLOG CONTENT SECTION */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Introduction */}
            <div style={{ marginBottom: '40px' }}>
              <p className={styles.subtitle} style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '20px'
              }}>
                <strong>Closing a project deal you found on social media is less about persuasion and more about perfect alignment.</strong> It doesn't matter if the original post was a status update on a professional networking platform, a thread on a community-driven platform, a post on a fast-moving, short-form platform, a request in a group-based social platform, or a DM on a visual, portfolio-first platform — clients say yes when they feel deeply understood, confident in your process, and clear about the value they'll receive.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(111, 123, 247, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(111, 123, 247, 0.1)',
                marginBottom: '30px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The Multi-Platform Deal Closing Reality</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      Most freelancers and agencies lose deals not because of price or competition, but because they fail to <strong>clarify expectations</strong> and <strong>build confidence</strong> during the closing process. That's true no matter which major social media platform the lead came from — and almost every deal, regardless of origin, eventually moves to email, a call, or a proposal tool to actually get signed. The final 20% of the sales process determines 80% of your success.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(16, 185, 129, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(16, 185, 129, 0.15)'
              }}>
                <h4 style={{
                  color: '#065f46',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-list-check"></i>
                  What This Guide Covers
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>Whether the originating platform actually changes how you should close</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>How to move a social media conversation toward a real proposal</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>What a winning proposal needs to include</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>How to talk about pricing without scaring the client off</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>How to handle the objections that kill most deals</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>What your contract needs before you start work</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>How to follow up without pressure until you get a signature</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 1 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  1
                </span>
                Does It Matter Which Platform the Lead Came From?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Not much, once the prospect actually replies.</strong> The mechanics of closing — clarifying scope, presenting a proposal, discussing price, handling objections, and getting a signature — are nearly identical across major social media platforms. What differs is the <strong>speed</strong> people expect, how <strong>cautious</strong> they are about sharing contact details, and how quickly you should try to move the conversation off-platform.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(111, 123, 247, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '10px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-globe" style={{ color: '#6f7bf7' }}></i>
                  Platform-Specific Quirks to Know Before You Close
                </h4>
                <div style={{ display: 'grid', gap: '15px' }}>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <i className="fas fa-user-tie" style={{ color: '#6f7bf7', fontSize: '20px', marginTop: '3px' }}></i>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Professional Networking Platforms:</strong>
                      <p style={{ color: '#4b5563', margin: '4px 0 0 0', fontSize: '14px' }}>People here are professionally minded and often comfortable jumping straight to a scheduled call — real names and job titles are already public, so trust is established faster. Suggest a 15-minute call early.</p>
                    </div>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <i className="fas fa-comments" style={{ color: '#ff6b35', fontSize: '20px', marginTop: '3px' }}></i>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Community-Driven Platforms:</strong>
                      <p style={{ color: '#4b5563', margin: '4px 0 0 0', fontSize: '14px' }}>Users here are often anonymous by design and privacy-cautious about handing over an email address right away. Keep the first few replies inside the platform's own chat or DMs, prove you understand their problem, and only ask to move to email once they've engaged twice.</p>
                    </div>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <i className="fas fa-bolt" style={{ color: '#1d9bf0', fontSize: '20px', marginTop: '3px' }}></i>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Fast-Moving, Short-Form Platforms:</strong>
                      <p style={{ color: '#4b5563', margin: '4px 0 0 0', fontSize: '14px' }}>Conversations move fast and attention spans are short. If someone replies to your DM with interest, send a proposal or booking link within hours, not days — the window where they're actively thinking about the problem closes quickly.</p>
                    </div>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <i className="fas fa-users" style={{ color: '#1877f2', fontSize: '20px', marginTop: '3px' }}></i>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Group-Based Social Platforms:</strong>
                      <p style={{ color: '#4b5563', margin: '4px 0 0 0', fontSize: '14px' }}>Leads from these groups often expect a more personal, conversational tone since the platform skews toward community and local business. Mutual group membership or a shared connection is a trust shortcut worth mentioning early.</p>
                    </div>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <i className="fas fa-image" style={{ color: '#e1306c', fontSize: '20px', marginTop: '3px' }}></i>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Visual, Portfolio-First Platforms:</strong>
                      <p style={{ color: '#4b5563', margin: '4px 0 0 0', fontSize: '14px' }}>DMs here often start informally, sometimes with voice notes or quick replies. Your portfolio or visual work often does the persuading, so lean on a link in bio or a case study carousel before pushing to a formal call.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  2
                </span>
                How Do You Move the Conversation Off-Platform?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Almost every deal — no matter where it started — eventually needs to move to email, a call, or a proposal tool to actually close.</strong> Comment threads, DMs, and reply chains are great for starting a conversation, but they're a poor place to negotiate scope, send a contract, or collect a signature. The trick is bridging the gap without sounding like you're brushing the client off.
              </p>

              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Loses Deals</h3>
                  <p>
                    "Can you email me?" sent with no context, right after someone shares a real problem in a community-driven platform thread or a professional networking platform comment.
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Wins Deals</h3>
                  <p>
                    "I've helped a few teams with exactly this. Happy to send over a short proposal — what's the best email, or would a quick 15-minute call be easier?"
                  </p>
                </div>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(110, 231, 183, 0.1)',
                borderLeft: '4px solid #10b981',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  color: '#065f46',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-lightbulb"></i>
                  The Bridge-to-Email Checklist
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '12px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Earn it first:</strong> Show you understood their exact problem before asking for contact details</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Give them a choice:</strong> Offer email or a call rather than demanding one channel</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Explain the "why":</strong> "So I can send a proper proposal with pricing" reads as legitimate, not pushy</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Match their pace:</strong> Move fast on fast-moving, short-form platforms, take it slower on community-driven platforms, default to a call on professional networking platforms</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Use a booking link:</strong> A Calendly-style link removes the back-and-forth of finding a time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  3
                </span>
                What Should Your Proposal Actually Include?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                A winning proposal answers three questions before the client has to ask them: <strong>what exactly will I get, when will I get it, and what will it cost.</strong> The number one reason deals stall after the proposal stage is unclear scope — clients often don't know exactly what they need, and providers rush to quote a number before fully understanding requirements.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '22px',
                    margin: '0 auto 15px auto'
                  }}>
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Price-Only Proposal</h4>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                    Just a number and a deadline. Invites price shopping. No context for the value. Low conversion rates.
                  </p>
                </div>

                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '22px',
                    margin: '0 auto 15px auto'
                  }}>
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Structured Proposal</h4>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                    Scope, process, timeline, and price together. Builds confidence. Justifies the investment. Higher conversion.
                  </p>
                </div>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(111, 123, 247, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-list-ol" style={{ color: '#6f7bf7' }}></i>
                  6 Sections Every Proposal Needs
                </h4>
                <ol style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '15px',
                  counterReset: 'step-counter'
                }}>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      1
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>The Problem, In Their Words:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Restate what they told you, so they know you actually read their post or reply</p>
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      2
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Scope of Work:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Exactly what's included, and just as important, what's not included</p>
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      3
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Process & Timeline:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Milestones, check-in points, and a realistic delivery date</p>
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #ff6b9d, #ff8b6b)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      4
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Pricing & Payment Terms:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>The number, the currency, deposit requirements, and payment schedule</p>
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #10b981, #34d399)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      5
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Proof It Works:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>One or two relevant results, testimonials, or case studies — nothing generic</p>
                    </div>
                  </li>
                  <li style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    counterIncrement: 'step-counter'
                  }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #6b7280, #9ca3af)',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: '600',
                      flexShrink: 0
                    }}>
                      6
                    </span>
                    <div>
                      <strong style={{ color: '#1f2937' }}>Clear Next Step:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>A single call to action — "reply to accept" or "sign here" — not five options</p>
                    </div>
                  </li>
                </ol>
              </div>

              <p className={styles.subtitle} style={{ fontSize: '15px', lineHeight: '1.7', color: '#4b5563' }}>
                Tools like PandaDoc, Proposify, Bonsai, or even a well-formatted Google Doc all work fine. What matters far more than the tool is that the proposal is <strong>specific to this client</strong> — a generic PDF you send to everyone is the fastest way to lose a deal you'd otherwise win.
              </p>
            </div>

            {/* Section 4 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  4
                </span>
                How Do You Talk About Pricing Without Losing the Deal?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Lead with the process before the price, and present options instead of a single number.</strong> Clients are more comfortable spending money when they understand how the work will be delivered and what they're actually paying for. A clear process builds confidence more than any discount ever could.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(111, 123, 247, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-layer-group" style={{ color: '#6f7bf7' }}></i>
                  Three Ways to Frame Your Number
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '12px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Tiered options:</strong> Offer a good/better/best structure so the conversation becomes "which tier" rather than "yes or no"</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Value anchoring:</strong> Tie the number to the outcome ("this typically saves teams 10+ hours a week") not just the hours worked</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Phased pricing:</strong> Break a large project into phases with separate pricing to lower the initial commitment</span>
                  </li>
                </ul>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(254, 226, 226, 0.2)',
                borderLeft: '4px solid #ef4444',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  color: '#7f1d1d',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-exclamation-triangle"></i>
                  Pricing Mistakes That Kill Deals
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>Quoting a price in the first DM before understanding the actual scope</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>Apologizing for your rate or offering to "work something out" unprompted</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>Going silent after sending the number instead of following up with context</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  5
                </span>
                How Do You Handle the Most Common Objections?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Objections aren't rejections — they're requests for more information. <strong>Respond with empathy first, then evidence.</strong> The same handful of objections show up whether the lead came from a post on a professional networking platform, a thread on a community-driven platform, a reply on a fast-moving, short-form platform, a group-based social platform, or a DM on a visual, portfolio-first platform.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(111, 123, 247, 0.05)',
                padding: '25px',
                borderRadius: '12px'
              }}>
                <div style={{ display: 'grid', gap: '18px' }}>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#7f1d1d' }}><i className="fas fa-quote-left" style={{ marginRight: '6px' }}></i><strong>"That's more than we budgeted for."</strong></p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}><i className="fas fa-reply" style={{ marginRight: '6px' }}></i>Ask what the budget was built around, then offer a phased or reduced-scope option that fits — rather than discounting the same scope.</p>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#7f1d1d' }}><i className="fas fa-quote-left" style={{ marginRight: '6px' }}></i><strong>"I need to think about it / talk to my team."</strong></p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}><i className="fas fa-reply" style={{ marginRight: '6px' }}></i>Ask what specifically they need to think through, and offer to answer it directly so it doesn't stall in someone else's inbox.</p>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#7f1d1d' }}><i className="fas fa-quote-left" style={{ marginRight: '6px' }}></i><strong>"We're also talking to a couple of other people."</strong></p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}><i className="fas fa-reply" style={{ marginRight: '6px' }}></i>Don't badmouth competitors. Ask what matters most in the decision, then show exactly how you meet that criteria.</p>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#7f1d1d' }}><i className="fas fa-quote-left" style={{ marginRight: '6px' }}></i><strong>"Can you start smaller so we can test things out first?"</strong></p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}><i className="fas fa-reply" style={{ marginRight: '6px' }}></i>Offer a small, well-scoped paid pilot with a clear success metric — this is often a legitimate path to a bigger contract, not a stall tactic.</p>
                  </div>
                  <div style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#7f1d1d' }}><i className="fas fa-quote-left" style={{ marginRight: '6px' }}></i><strong>"How do I know you can actually deliver this?"</strong></p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}><i className="fas fa-reply" style={{ marginRight: '6px' }}></i>Point to a specific, relevant result rather than a generic portfolio link, and offer a reference call if they want it.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  6
                </span>
                What Should Your Contract Include Before You Start Work?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Never start work on a verbal "yes" alone — even a simple one-page agreement protects both sides.</strong> This matters more, not less, with leads sourced from social media, since there's often no prior business relationship or mutual professional network to fall back on if something goes wrong.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(110, 231, 183, 0.1)',
                borderLeft: '4px solid #10b981',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h4 style={{
                  color: '#065f46',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-shield-alt"></i>
                  Contract Essentials Checklist
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '12px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Scope of work:</strong> The same scope from your proposal, word for word — no surprises</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Payment terms:</strong> Deposit amount, milestone payments, due dates, and late payment terms</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Revision limits:</strong> How many rounds of revisions are included before extra charges apply</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Cancellation clause:</strong> What happens, and what's owed, if either side ends the project early</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>IP ownership:</strong> When ownership of the work transfers to the client (typically on final payment)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Confidentiality:</strong> A short NDA clause if the client shares sensitive business information</span>
                  </li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{ fontSize: '15px', lineHeight: '1.7', color: '#4b5563' }}>
                A simple e-signature tool — DocuSign, HelloSign, PandaDoc, or Bonsai — turns "I'll sign it later" into a completed contract in minutes. Always require a <strong>deposit before starting work</strong>, typically 30–50% upfront; it's the single strongest signal that a deal is actually closed rather than just verbally agreed.
              </p>
            </div>

            {/* Section 7 - Follow-up */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #ff6b9d, #ff8b6b)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '600'
                }}>
                  7
                </span>
                How Do You Follow Up Without Losing the Deal?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Pressure kills deals.</strong> Corporate clients often need time for internal discussions, budget approvals, and stakeholder alignment. Following up politely while allowing thinking space is a delicate balance that separates amateur closers from professionals — and it holds true no matter which major social media platform you first connected on.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(254, 226, 226, 0.2)',
                borderLeft: '4px solid #ef4444',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#7f1d1d',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-exclamation-triangle"></i>
                  What NOT to Do (The Pressure Mistakes)
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '10px'
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>"I need an answer by tomorrow or the price increases"</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>"Are you still interested? Please respond ASAP" (sent 2 hours after the proposal)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-times-circle" style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}>"I have another client interested, so I need to know today"</span>
                  </li>
                </ul>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(110, 231, 183, 0.1)',
                borderLeft: '4px solid #10b981',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  color: '#065f46',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-check-circle"></i>
                  Professional Follow-Up Sequence (What Works)
                </h4>
                <div style={{
                  display: 'grid',
                  gap: '20px'
                }}>
                  <div style={{
                    background: 'white',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{
                        background: '#6f7bf7',
                        color: 'white',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        1
                      </span>
                      <strong style={{ color: '#1f2937' }}>Follow-up #1 (2 days after the proposal):</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0', fontSize: '14px', fontStyle: 'italic' }}>
                      "Hi [Name], just following up on the proposal I sent. Happy to answer any questions or provide additional details that would help with your decision."
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{
                        background: '#9c6ff7',
                        color: 'white',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        2
                      </span>
                      <strong style={{ color: '#1f2937' }}>Follow-up #2 (5 days after):</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0', fontSize: '14px', fontStyle: 'italic' }}>
                      "Hi [Name], checking in to see if you had a chance to review the proposal. I've been thinking about your project and had an additional idea about [specific aspect] that might be helpful."
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{
                        background: '#f76fd8',
                        color: 'white',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        3
                      </span>
                      <strong style={{ color: '#1f2937' }}>Follow-up #3 (10 days after):</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0', fontSize: '14px', fontStyle: 'italic' }}>
                      "Hi [Name], just wanted to touch base. If the timing isn't right now, I completely understand. Would love to stay connected for future opportunities."
                    </p>
                  </div>
                </div>
              </div>

              <p className={styles.subtitle} style={{ fontSize: '15px', lineHeight: '1.7', color: '#4b5563', marginTop: '20px' }}>
                Once you've moved to email, keep following up there rather than jumping back to the original platform — a scattered conversation across social platform comments, DMs, and email makes you look disorganized right when you need to look the most professional.
              </p>
            </div>

            {/* The Complete Deal Closing Framework */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-star" style={{ color: '#f59e0b' }}></i>
                The Complete Framework for Closing Deals from Any Platform
              </h2>

              <div className={styles.card} style={{
                background: 'linear-gradient(135deg, rgba(111, 123, 247, 0.08), rgba(156, 111, 247, 0.05))',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(111, 123, 247, 0.15)'
              }}>
                <h3 style={{
                  textAlign: 'center',
                  marginBottom: '25px',
                  color: '#1f2937'
                }}>
                  <i className="fas fa-road" style={{ color: '#6f7bf7', marginRight: '10px' }}></i>
                  8-Step Deal Closing Process
                </h3>

                <div style={{
                  display: 'grid',
                  gap: '15px'
                }}>
                  {[
                    { step: 1, title: "Qualification Check", desc: "Confirm they have budget, authority, need, and timeline (BANT)", icon: "fas fa-filter", color: "#6f7bf7" },
                    { step: 2, title: "Bridge Off-Platform", desc: "Move from the comment or DM to email, a call, or a proposal tool", icon: "fas fa-arrow-right-arrow-left", color: "#9c6ff7" },
                    { step: 3, title: "Deep Discovery", desc: "Ask probing questions to understand real needs and constraints", icon: "fas fa-search", color: "#f76fd8" },
                    { step: 4, title: "Value Alignment", desc: "Connect your solution directly to their business goals", icon: "fas fa-bullseye", color: "#ff6b9d" },
                    { step: 5, title: "Proposal Presentation", desc: "Present clear scope, timeline, process, and investment", icon: "fas fa-file-alt", color: "#10b981" },
                    { step: 6, title: "Objection Handling", desc: "Address concerns with empathy and evidence", icon: "fas fa-comments", color: "#f59e0b" },
                    { step: 7, title: "Contract & Deposit", desc: "Get a signed agreement and upfront payment before starting", icon: "fas fa-file-signature", color: "#0ea5e9" },
                    { step: 8, title: "Patient Follow-Up", desc: "Respectful persistence without pressure until you get to yes", icon: "fas fa-clock", color: "#6b7280" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '10px',
                      border: '1px solid rgba(226, 232, 240, 0.8)'
                    }}>
                      <div style={{
                        background: item.color,
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: '600',
                        flexShrink: 0
                      }}>
                        {item.step}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                          <i className={item.icon} style={{ color: item.color, fontSize: '14px' }}></i>
                          <strong style={{ color: '#1f2937' }}>{item.title}</strong>
                        </div>
                        <p style={{ color: '#4b5563', margin: '0', fontSize: '14px' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(111, 123, 247, 0.08), rgba(156, 111, 247, 0.05))',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid rgba(111, 123, 247, 0.15)',
              marginTop: '40px'
            }}>
              <h3 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#1f2937',
                fontSize: '24px'
              }}>
                <i className="fas fa-award" style={{ color: '#f59e0b', marginRight: '10px' }}></i>
                Key Takeaway
              </h3>
              <p className={styles.subtitle} style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                Closing <strong>project deals sourced from social media</strong> successfully requires shifting from a "sales" mindset to a "partnership" mindset. Your goal isn't to convince someone to buy, but to help them make the best decision for their business — no matter which major social media platform that conversation began on.
                <br/><br/>
                Remember: <strong>clarity beats persuasion, and the platform stops mattering the moment someone replies.</strong> A client who understands exactly what they're getting, how they're getting it, and why it's valuable will close themselves. Your job is to provide that clarity through a fast bridge off-platform, a specific proposal, a confident pricing conversation, a solid contract, and patient, professional follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className={styles.features}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water9}`}></div>
          <div className={`${styles.waterDrop} ${styles.water10}`}></div>
          <div className={`${styles.waterDrop} ${styles.water11}`}></div>
          <div className={`${styles.waterDrop} ${styles.water12}`}></div>
        </div>

        <div className={styles.container}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '40px',
            color: '#1f2937'
          }}>
            Master the <span className={styles.gradientText}>Full Process</span>
          </h2>

          <div className={styles.howGrid}>
            <a href="/blog/how-to-convert-linkedin-project-leads" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-users"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Foundation
                </span>
              </div>
              <h3>How to Convert Social Media Project Leads into Paying Clients</h3>
              <p>Learn proven strategies to turn leads from major social media platforms into paying clients with authentic outreach.</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px'
              }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                  <i className="fas fa-clock"></i> 8 min read
                </span>
                <span style={{ fontSize: '12px', color: '#6f7bf7', fontWeight: '600' }}>
                  Read Guide <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>

            <a href="/blog/best-approach-to-contact-linkedin-leads" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-handshake"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Step 2
                </span>
              </div>
              <h3>Best Ways to Approach Project Leads From Social Media</h3>
              <p>Discover the most effective methods to contact leads across every platform without sounding salesy.</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px'
              }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                  <i className="fas fa-clock"></i> 6 min read
                </span>
                <span style={{ fontSize: '12px', color: '#6f7bf7', fontWeight: '600' }}>
                  Read Guide <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>

            <a href="/blog/building-trust-before-closing-linkedin-clients" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-shield-heart"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Essential
                </span>
              </div>
              <h3>Building Trust Before Closing a Deal</h3>
              <p>Why trust-building matters even more with social media leads, and how to establish it before you ever mention price.</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px'
              }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                  <i className="fas fa-clock"></i> 7 min read
                </span>
                <span style={{ fontSize: '12px', color: '#6f7bf7', fontWeight: '600' }}>
                  Read Guide <i className="fas fa-arrow-right"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.features} style={{ paddingBottom: '80px' }}>
        <div className={styles.container}>
          <div className={styles.card} style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '40px'
          }}>
            <div className={styles.cardIcon} style={{ marginBottom: '20px' }}>
              <i className="fas fa-rocket" style={{ fontSize: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '15px', color: '#1f2937' }}>
              Ready to Close More Deals?
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '25px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Apply these deal-closing strategies with real project leads actively looking for services like yours across major social media platforms.
            </p>
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="/leads"
                className={styles.btnPrimary}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  padding: '14px 32px'
                }}
              >
                <i className="fas fa-search"></i>
                Find Project Leads
              </a>
              <a
                href="/blog"
                className={styles.btnPrimary}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  padding: '14px 32px',
                  background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)'
                }}
              >
                <i className="fas fa-book"></i>
                More Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
