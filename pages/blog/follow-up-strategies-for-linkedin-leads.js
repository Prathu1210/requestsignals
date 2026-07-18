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
        <title>Follow-Up Strategies That Actually Work | RequestSignals</title>
        <meta
          name="description"
          content="How and when to follow up on a lead you found on social media. Platform-specific timing, message templates, and etiquette that keep you from getting ignored, blocked, or reported."
        />
        <meta name="keywords" content="LinkedIn leads, Reddit leads, X leads, Facebook leads, Instagram leads, social media leads, freelance leads, project leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Follow-Up Strategies That Actually Work" />
        <meta property="og:description" content="Follow-up timing and etiquette are different on every platform. Here's how to follow up across several social media platforms without getting ignored or blocked." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/follow-up-strategies-for-linkedin-leads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Follow-Up Strategies That Actually Work" />
        <meta name="twitter:description" content="Platform-specific follow-up timing and templates for leads from several social media platforms." />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Follow-Up Strategies That Actually Work",
            "description": "How and when to follow up on a lead you found on social media, with platform-specific timing, templates, and etiquette.",
            "image": "https://requestsignals.com/images/follow-up-strategies.jpg",
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
              "@id": "https://requestsignals.com/blog/follow-up-strategies-for-linkedin-leads"
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
              color: '#10b981',
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '6px 12px',
              borderRadius: '20px'
            }}>
              <i className="fas fa-sync-alt"></i> Essential Strategy
            </div>
            <h1 style={{ fontSize: '42px', lineHeight: '1.2' }}>
              Follow-Up Strategies That <span className={styles.gradientText}>Actually Work</span>
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              A lead going quiet doesn't mean no. It usually means your follow-up needs to match the platform. Here's how timing, tone, and cadence should change across major social media platforms.
            </p>

            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-layer-group" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>5 Platforms Covered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>9 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-users" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>All Experience Levels</span>
              </div>
            </div>

            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Follow-Up Timing</span>
              <span className={styles.tag}>Multi-Platform Outreach</span>
              <span className={styles.tag}>Message Templates</span>
              <span className={styles.tag}>Lead Nurturing</span>
              <span className={styles.tag}>Conversion</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>

              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}><i className="fas fa-chart-bar"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Silence Isn't a No</h4>
                      <p>Most leads are lost to no follow-up, not rejection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}><i className="fas fa-lightbulb"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Timing Isn't Universal</h4>
                      <p>A community-platform DM and a fast-moving-platform reply need very different cadences</p>
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
        <div className={styles.minimalLine} style={{ background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
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
            {/* Table of Contents */}
            <div className={styles.card} style={{
              background: 'rgba(16, 185, 129, 0.05)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.1)',
              marginBottom: '40px'
            }}>
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                color: '#1f2937'
              }}>
                <i className="fas fa-list-ol" style={{ color: '#10b981' }}></i>
                In This Guide
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gap: '10px'
              }}>
                {[
                  "How long should you wait before following up?",
                  "Does follow-up timing change by platform?",
                  "What should a good follow-up message say?",
                  "How many times should you follow up before giving up?",
                  "How do you follow up without sounding desperate or annoying?"
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: '#10b981', fontWeight: '600', minWidth: '24px' }}>{index + 1}.</span>
                    <span style={{ color: '#4b5563' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Introduction */}
            <div style={{ marginBottom: '40px' }}>
              <p className={styles.subtitle} style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '20px'
              }}>
                <strong>Most leads are not lost because of rejection, but because of silence.</strong> Sales research consistently shows that 80% of deals require 5+ touches, yet the majority of outreach stops after one message. A thoughtful, well-timed follow-up can revive a conversation that looked dead.
              </p>
              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                But "follow up a few days later" isn't a universal rule anymore. <strong>RequestSignals now surfaces leads from several social media platforms</strong> — and each type of platform has its own norms for how soon is too soon, how many follow-ups are acceptable, and what actually gets you blocked or reported. This guide breaks down follow-up timing and etiquette platform by platform, so your persistence reads as helpful instead of pushy.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(16, 185, 129, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(16, 185, 129, 0.1)',
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
                    background: 'linear-gradient(135deg, #10b981, #34d399)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The Follow-Up Reality Check</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      <strong>Roughly half of outreach senders</strong> never follow up at all. Another quarter send one follow-up and stop. The people closing the most deals are the small minority who send several well-spaced, value-adding follow-ups — but "well-spaced" means something different on community-driven platforms than it does on professional networking platforms.
                    </p>
                  </div>
                </div>
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
                  background: 'linear-gradient(135deg, #10b981, #34d399)',
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
                How Long Should You Wait Before Following Up?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>As a baseline, wait 2-4 days before your first follow-up and space later ones further apart.</strong> Following up too quickly reads as pushy; waiting too long lets the lead go cold and lose context. The exact window still depends on the platform and the pace people expect there — which is exactly what the next section covers.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                marginBottom: '30px'
              }}>
                <h3 style={{
                  textAlign: 'center',
                  marginBottom: '25px',
                  color: '#1f2937'
                }}>
                  <i className="fas fa-clock" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  General Follow-Up Timeline
                </h3>

                <div style={{
                  display: 'grid',
                  gap: '20px'
                }}>
                  {[
                    { time: "2-6 hours", type: "Initial Response", desc: "After they reply to your first message", purpose: "Quick acknowledgment and next question" },
                    { time: "2-4 days", type: "First Follow-Up", desc: "If no response to initial outreach", purpose: "Add new insight or ask a specific question" },
                    { time: "5-7 days", type: "Second Follow-Up", desc: "If still no response", purpose: "Share relevant example or portfolio piece" },
                    { time: "10-14 days", type: "Third Follow-Up", desc: "Final attempt before moving on", purpose: "Offer one concrete, useful suggestion" },
                    { time: "30+ days", type: "Re-engagement", desc: "For leads that went fully cold", purpose: "Check in with a fresh, relevant update" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '15px',
                      background: index % 2 === 0 ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                      borderRadius: '8px'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                        color: 'white',
                        width: '80px',
                        height: '40px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '600',
                        flexShrink: 0,
                        textAlign: 'center',
                        padding: '0 8px'
                      }}>
                        {item.time}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                          <strong style={{ color: '#1f2937' }}>{item.type}</strong>
                          <span style={{ fontSize: '12px', color: '#6b7280', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px' }}>{item.desc}</span>
                        </div>
                        <p style={{ color: '#4b5563', margin: '0', fontSize: '14px' }}><strong>Purpose:</strong> {item.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>Timing Mistakes</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>Following up multiple times in one day</li>
                    <li>Using the same cadence on every platform</li>
                    <li>No follow-up at all for weeks</li>
                    <li>Ignoring a platform's normal response speed</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>Optimal Timing</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>Weekday mornings and early afternoons</li>
                    <li>Short intervals on fast-moving platforms</li>
                    <li>Longer gaps on slower, professional platforms</li>
                    <li>Business hours in the lead's timezone when known</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Platform Differences */}
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
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
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
                Does Follow-Up Timing Change by Platform?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Yes — significantly.</strong> The same follow-up cadence that feels normal on professional networking platforms can feel like harassment on community-driven platforms, and the pace that feels appropriate on fast-moving, short-form platforms can feel glacially slow on visual, portfolio-first platforms. Here's how to adjust for each platform type where RequestSignals surfaces leads.
              </p>

              <div style={{ display: 'grid', gap: '20px', marginBottom: '10px' }}>
                <div className={styles.card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1f2937', marginBottom: '10px' }}>
                    <i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i> Professional Networking Platforms
                  </h4>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Professional networking platforms are the most follow-up-tolerant of the bunch. A message a few days later that references the original post — <em>"following up on what you mentioned about [project]"</em> — is normal, expected, and rarely seen as pushy. People check these platforms less frequently than fast-moving, short-form or visual, portfolio-first ones, so a 2-4 day gap before your first follow-up is appropriate, not impatient.
                  </p>
                </div>

                <div className={styles.card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1f2937', marginBottom: '10px' }}>
                    <i className="fab fa-reddit-alien" style={{ color: '#ff4500' }}></i> Community-Driven Platforms
                  </h4>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Community-driven platforms need the lightest touch of any platform type. If a conversation started in a thread's comments and moved to DMs, <strong>one follow-up is usually the ceiling.</strong> Members of these communities are unusually sensitive to feeling "sold to," and community culture punishes anything that smells like repeated solicitation. A second follow-up after silence can get you blocked or reported rather than answered — if there's no reply after your first DM follow-up, let it go.
                  </p>
                </div>

                <div className={styles.card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1f2937', marginBottom: '10px' }}>
                    <i className="fab fa-twitter" style={{ color: '#1da1f2' }}></i> Fast-Moving, Short-Form Platforms
                  </h4>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Conversation on fast-moving, short-form platforms moves fast, and your follow-up cadence should match. <strong>Follow up after 1-2 days, not weeks</strong> — by then the original post has scrolled out of relevance. A common and effective pattern is a public reply to keep the thread visible, followed by a DM once there's some engagement. Don't let a lead here sit as long as you would on a professional networking platform; the pace makes a two-week-old follow-up feel like it came from nowhere.
                  </p>
                </div>

                <div className={styles.card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1f2937', marginBottom: '10px' }}>
                    <i className="fab fa-instagram" style={{ color: '#e1306c' }}></i> Visual, Portfolio-First Platforms
                  </h4>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Visual, portfolio-first platforms revolve around imagery, so a plain "just checking in" DM tends to fall flat. <strong>A follow-up that includes an added portfolio piece, before/after example, or relevant sample</strong> performs noticeably better — it gives the recipient a reason to open it and a reason to reply. Treat every follow-up here as a small additional pitch, not a nudge.
                  </p>
                </div>

                <div className={styles.card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1f2937', marginBottom: '10px' }}>
                    <i className="fab fa-facebook" style={{ color: '#1877f2' }}></i> Group-Based Social Platforms
                  </h4>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Most leads on group-based social platforms come from groups, and groups have posting rules — some explicitly ban repeated commenting on the same thread or restrict self-promotion. <strong>Respect the group's rules and avoid multiple public comments on the same post.</strong> Once you've made contact, move the follow-up to a private message rather than commenting again publicly; it's both more professional and less likely to get you removed from the group.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 - Value-Added Framework */}
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
                  background: 'linear-gradient(135deg, #10b981, #34d399)',
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
                What Should a Good Follow-Up Message Say?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                The single most important principle of an effective follow-up, on any platform: <strong>it must add value.</strong> A small insight, resource, or example shows continued interest and positions you as helpful — not as someone just chasing a sale.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(16, 185, 129, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textAlign: 'center'
                }}>
                  <i className="fas fa-lightbulb" style={{ color: '#10b981' }}></i>
                  6 Types of Value You Can Add in a Follow-Up
                </h4>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px'
                }}>
                  {[
                    { icon: 'fas fa-newspaper', title: 'Industry Insight', desc: 'Share a relevant article or trend', example: '"Saw this and thought of what you posted about [project]"' },
                    { icon: 'fas fa-image', title: 'Portfolio Sample', desc: 'A relevant example or before/after (great on visual, portfolio-first platforms)', example: '"Here\'s a similar project I finished recently"' },
                    { icon: 'fas fa-user-friends', title: 'Case Study', desc: 'Brief success story', example: '"I recently helped someone with a very similar need"' },
                    { icon: 'fas fa-question-circle', title: 'Thoughtful Question', desc: 'Ask about a specific detail', example: '"Have you settled on a timeline for this yet?"' },
                    { icon: 'fas fa-tools', title: 'Tool/Resource', desc: 'Share a helpful tool or template', example: '"This template might help while you\'re scoping it out"' },
                    { icon: 'fas fa-comment', title: 'Direct Answer', desc: 'Answer something they asked without being paid to', example: '"Quick thought on the approach you mentioned..."' }
                  ].map((item, index) => (
                    <div key={index} className={styles.card} style={{
                      padding: '15px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        margin: '0 auto 10px auto'
                      }}>
                        <i className={item.icon}></i>
                      </div>
                      <h5 style={{ margin: '0 0 8px 0', color: '#1f2937', fontSize: '14px' }}>{item.title}</h5>
                      <p style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '12px' }}>{item.desc}</p>
                      <p style={{ margin: '0', color: '#4b5563', fontSize: '11px', fontStyle: 'italic' }}>{item.example}</p>
                    </div>
                  ))}
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
                  <i className="fas fa-magic"></i>
                  The Golden Rule of Value-Added Follow-Ups
                </h4>
                <p style={{ color: '#4b5563', marginBottom: '0', fontSize: '15px' }}>
                  <strong>Never send a follow-up that only says "just checking in" or "wanted to follow up."</strong> On every platform, that message reads as a nudge for the recipient to do work, not something that helps them. Always include something that shows you've been thinking about their situation or moves the conversation forward.
                </p>
              </div>
            </div>

            {/* Section 4 - Complete Follow-Up Sequence */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-list-ol" style={{ color: '#10b981' }}></i>
                How Many Times Should You Follow Up Before Giving Up?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Three to five follow-ups is a reasonable ceiling on most platforms — but on community-driven platforms, one is often the limit.</strong> Below is a general sequence built for professional networking, fast-moving, group-based, and visual platforms. Adjust the number of steps down sharply for community-driven platforms, where persistence past a single DM tends to backfire.
              </p>

              <div className={styles.card} style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(52, 211, 153, 0.05))',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(16, 185, 129, 0.15)'
              }}>
                <h3 style={{
                  textAlign: 'center',
                  marginBottom: '25px',
                  color: '#1f2937'
                }}>
                  <i className="fas fa-sitemap" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  Follow-Up Sequence Template
                </h3>

                <div style={{
                  display: 'grid',
                  gap: '25px'
                }}>
                  {[
                    {
                      step: "Initial Contact",
                      timing: "Day 0",
                      platformNote: "All platforms",
                      template: `Hi [Name], saw your post about [topic] and wanted to share [insight/thought]. I've worked on [related projects] and found that [specific insight]. Would [relevant question] apply to your situation?`,
                      goal: "Start the conversation, provide immediate value"
                    },
                    {
                      step: "First Follow-Up",
                      timing: "Day 2-4 (professional networking/group-based/visual platforms) · Day 1-2 (fast-moving platforms) · Skip unless it's a warm DM (community-driven platforms)",
                      platformNote: "Adjust timing per platform",
                      template: `Hi [Name], following up on my message. I came across [relevant example/insight] and thought it might help with [their challenge]. How are you thinking about [detail] at this point?`,
                      goal: "Add new value, show continued interest without pressure"
                    },
                    {
                      step: "Second Follow-Up",
                      timing: "Day 7 (professional networking/group-based platforms) · Day 3-4 (fast-moving platforms) · Not recommended (community-driven platforms)",
                      platformNote: "Community-driven platforms: stop here",
                      template: `Hi [Name], hope things are moving along. I put together [example/portfolio piece/case study] that's close to what you described — happy to share more details if useful.`,
                      goal: "Share proof, offer deeper value"
                    },
                    {
                      step: "Third Follow-Up",
                      timing: "Day 14 (professional networking/group-based platforms) · Day 6-7 (fast-moving/visual platforms)",
                      platformNote: "Final attempt",
                      template: `Hi [Name], checking in one last time. Even if now isn't the right time, I'd love to stay connected. Here's a [tool/resource] that might help with [their challenge] regardless.`,
                      goal: "Graceful exit, leave the door open"
                    },
                    {
                      step: "Re-engagement",
                      timing: "Month 1+ (professional networking/group-based/visual platforms only)",
                      platformNote: "Skip on fast-moving and community-driven platforms",
                      template: `Hi [Name], hope all is well. I came across [relevant update] and thought of our earlier conversation. How did things end up going with [their project]? Still happy to help if it's relevant.`,
                      goal: "Reconnect with a fresh, low-pressure reason"
                    }
                  ].map((item, index) => (
                    <div key={index} style={{
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
                        color: 'white',
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '10px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <span style={{
                            background: 'white',
                            color: '#10b981',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: '600'
                          }}>
                            {index + 1}
                          </span>
                          <strong style={{ fontSize: '16px' }}>{item.step}</strong>
                        </div>
                        <span style={{
                          background: 'rgba(255, 255, 255, 0.2)',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px'
                        }}>
                          {item.timing}
                        </span>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <div style={{ marginBottom: '15px' }}>
                          <strong style={{ color: '#1f2937', display: 'block', marginBottom: '5px' }}>Goal:</strong>
                          <span style={{ color: '#4b5563', fontSize: '14px' }}>{item.goal}</span>
                        </div>
                        <div>
                          <strong style={{ color: '#1f2937', display: 'block', marginBottom: '5px' }}>Template:</strong>
                          <div style={{
                            background: '#f9fafb',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            fontSize: '14px',
                            color: '#4b5563',
                            lineHeight: '1.5',
                            fontStyle: 'italic'
                          }}>
                            {item.template}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5 - Psychology / Etiquette */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-brain" style={{ color: '#8b5cf6' }}></i>
                How Do You Follow Up Without Sounding Desperate or Annoying?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Follow-ups feel desperate when they're about you, and feel helpful when they're about the recipient.</strong> The tactics below hold across every platform, but the consequences of getting it wrong vary — a slightly-too-eager message on a professional networking platform gets ignored, while the same behavior on a community-driven platform or in a group-based social platform can get you blocked or reported.
              </p>

              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-hand-paper"></i>
                  </div>
                  <h3>What People Hate</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>Pressure and urgency tactics</li>
                    <li>Generic "just checking in" messages</li>
                    <li>Multiple follow-ups in one day</li>
                    <li>Repeated public comments on the same post</li>
                    <li>Ignoring platform norms (e.g. over-DMing on community-driven platforms)</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-heart"></i>
                  </div>
                  <h3>What People Appreciate</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>Helpful insights, examples, or resources</li>
                    <li>Respect for their time and the platform's culture</li>
                    <li>Thoughtful, specific questions</li>
                    <li>A cadence that matches the platform's pace</li>
                    <li>An easy, graceful way to say "not now"</li>
                  </ul>
                </div>
              </div>

              <div className={styles.card} style={{
                background: 'rgba(139, 92, 246, 0.05)',
                borderLeft: '4px solid #8b5cf6',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h4 style={{
                  color: '#5b21b6',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-user-check"></i>
                  The Reminder vs. Pressure Principle
                </h4>
                <p style={{ color: '#4b5563', marginBottom: '0', fontSize: '15px' }}>
                  <strong>Effective follow-ups feel like helpful reminders, not pressure.</strong> They acknowledge that the person is busy, provide value regardless of whether they respond, and make it easy to engage when they're ready. On community-driven platforms especially, treat a non-response as a final answer — the community norms there make "no reply" a much stronger signal than it is on professional networking platforms.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(52, 211, 153, 0.05))',
              padding: '30px',
              borderRadius: '16px',
              border: '1px solid rgba(16, 185, 129, 0.15)',
              marginTop: '40px'
            }}>
              <h3 style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: '#1f2937',
                fontSize: '24px'
              }}>
                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '10px' }}></i>
                Key Takeaway
              </h3>
              <p className={styles.subtitle} style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                Mastering <strong>follow-up strategy across platforms</strong> means matching your cadence to where the lead actually is: patient and expected on professional networking platforms, fast and public-then-private on fast-moving, short-form platforms, light-touch and easily-limited on community-driven platforms, example-driven on visual, portfolio-first platforms, and rule-respecting inside group-based social platforms.
                <br/><br/>
                Your follow-up should always be a <strong>value delivery system,</strong> not a pressure application system — tuned to the platform it's sent on. Get that right, and follow-ups stop feeling like a numbers game and start doing what they're supposed to: turning silence into a client.
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
            Complete Your <span className={styles.gradientText}>Outreach Toolkit</span>
          </h2>

          <div className={styles.howGrid}>
            <a href="/blog/how-to-convert-linkedin-project-leads" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-comments"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Foundation
                </span>
              </div>
              <h3>How to Convert Social Media Project Leads into Paying Clients</h3>
              <p>The full process for turning a public post into a paying client, from first read to signed deal.</p>
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
                  Before You Follow Up
                </span>
              </div>
              <h3>Best Ways to Approach Project Leads From Social Media</h3>
              <p>How to make a strong first contact on each platform, so your follow-ups have something to build on.</p>
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

            <a href="/blog/how-to-close-project-deals-from-linkedin" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-file-contract"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Next Step
                </span>
              </div>
              <h3>How to Close Project Deals You Found on Social Media</h3>
              <p>Once a follow-up gets a reply, here's how to move from conversation to signed contract.</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px'
              }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                  <i className="fas fa-clock"></i> 9 min read
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
              <i className="fas fa-play-circle" style={{ fontSize: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '15px', color: '#1f2937' }}>
              Ready to Implement Better Follow-Ups?
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
              Put these follow-up strategies to work with real leads sourced from major social media platforms — refreshed every two hours on RequestSignals.
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
                Find Leads to Follow Up With
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
                  background: 'linear-gradient(135deg, #10b981, #34d399)'
                }}
              >
                <i className="fas fa-graduation-cap"></i>
                More Conversion Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
