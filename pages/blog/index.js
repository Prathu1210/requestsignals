import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Theme.module.css";
import { useCardEffects } from "../../hooks/useCardEffects";

export default function BlogIndex() {
  useCardEffects(styles.card);

  const blogPosts = [
    {
      title: "How to Convert Social Media Project Leads into Paying Clients",
      description: "Learn proven strategies to turn leads from major social media platforms into paying clients with authentic outreach.",
      link: "/blog/how-to-convert-linkedin-project-leads",
      icon: "fas fa-users",
      tags: ["Conversion", "Strategy", "Outreach"],
      color: "#6f7bf7"
    },
    {
      title: "Best Ways to Approach Project Leads From Social Media",
      description: "Discover the most effective methods to contact leads across different platforms without sounding salesy or desperate.",
      link: "/blog/best-approach-to-contact-linkedin-leads",
      icon: "fas fa-handshake",
      tags: ["Approach", "First Contact", "Messaging"],
      color: "#9c6ff7"
    },
    {
      title: "How to Close Project Deals You Found on Social Media",
      description: "Master the art of closing deals after initial contact. From proposal to signed contract.",
      link: "/blog/how-to-close-project-deals-from-linkedin",
      icon: "fas fa-file-contract",
      tags: ["Closing", "Deals", "Contracts"],
      color: "#f76fd8"
    },
    {
      title: "Follow-Up Strategies That Actually Work",
      description: "Professional follow-up techniques that increase response rates without being annoying, on any platform.",
      link: "/blog/follow-up-strategies-for-linkedin-leads",
      icon: "fas fa-sync-alt",
      tags: ["Follow-up", "Persistence", "Timing"],
      color: "#6f7bf7"
    },
    {
      title: "Building Trust Before Closing a Deal",
      description: "Establish credibility and trust with potential clients before discussing money or contracts.",
      link: "/blog/building-trust-before-closing-linkedin-clients",
      icon: "fas fa-shield-alt",
      tags: ["Trust", "Credibility", "Relationship"],
      color: "#9c6ff7"
    }
  ];

  return (
    <>
      <Head>
        <title>Social Media Project Leads – Conversion & Closing Guides | RequestSignals</title>
        <meta
          name="description"
          content="Practical guides on converting project leads from major social media platforms into paying clients. Learn outreach, follow-ups, and deal closing methods."
        />
        <meta name="keywords" content="LinkedIn leads, Reddit leads, X leads, Facebook leads, Instagram leads, social media leads, freelance leads, project leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION - Matches About.js styling */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Social Media <span className={styles.gradientText}>Success Guides</span>
            </h1>
            <p className={styles.subtitle}>
              Practical, experience-based methods to convert leads from major social media platforms into paying clients. No theory, just proven strategies that work.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-graduation-cap"></i> Proven Strategies 
              <i className="fas fa-chart-line"></i> Conversion Guides 
              <i className="fas fa-handshake"></i> Deal Closing
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              {/* Blurred background elements */}
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg3}`}></div>
              
              {/* Foreground cards */}
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-lightbulb"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Actionable Advice</h4>
                      <p>Step-by-step guides you can implement immediately.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>Practical</span>
                        <span className={styles.tag}>Actionable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-chart-line"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Proven Results</h4>
                      <p>Strategies tested and refined with real clients.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>Tested</span>
                        <span className={styles.tag}>Results</span>
                      </div>
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
        <div className={styles.minimalLine}></div>
      </div>

      {/* BLOG INTRO SECTION */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
              From <span className={styles.gradientText}>Leads to Clients</span>
            </h2>
            
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
                <p className={styles.subtitle} style={{ textAlign: 'left' }}>
                  Finding project requirements is only the first step. The real challenge is converting those opportunities into real conversations, proposals, and finally closed deals.
                </p>
                
                <p className={styles.subtitle} style={{ textAlign: 'left' }}>
                  This blog focuses on <strong>practical, experience-based methods</strong> that agencies and freelancers can use to approach leads, build trust, and close projects without sounding salesy.
                </p>
              </div>
              
              <div className={styles.card} style={{ 
                background: 'rgba(111, 123, 247, 0.05)', 
                padding: '20px', 
                borderRadius: '12px',
                border: '1px solid rgba(111, 123, 247, 0.1)',
                marginBottom: '0'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  marginBottom: '15px'
                }}>
                  <div style={{ 
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: '#1f2937' }}>What You'll Learn</h4>
                    <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
                      Real strategies from real experience
                    </p>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px',
                  fontSize: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}>Effective outreach messaging</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}>Professional follow-up techniques</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}>Building client trust quickly</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}>Deal closing without pressure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID - 5 Cards */}
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
            Featured <span className={styles.gradientText}>Guides</span>
          </h2>
          
          <div className={styles.howGrid}>
            {blogPosts.map((post, index) => (
              <a 
                href={post.link} 
                key={index}
                className={styles.card}
                style={{ 
                  textDecoration: 'none',
                  display: 'block',
                  cursor: 'pointer'
                }}
              >
                <div 
                  className={styles.cardIcon}
                  style={{ color: post.color }}
                >
                  <i className={post.icon}></i>
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <span className={styles.step}>
                    Guide {index + 1}
                  </span>
                </div>
                <h3 style={{ 
                  marginBottom: '12px',
                  fontSize: '18px',
                  lineHeight: '1.4',
                  minHeight: '50px'
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  marginBottom: '15px',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  color: '#4b5563',
                  minHeight: '60px'
                }}>
                  {post.description}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '15px'
                }}>
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={styles.tag}
                      style={{ 
                        fontSize: '11px',
                        padding: '3px 8px',
                        background: post.color + '10',
                        borderColor: post.color + '30',
                        color: post.color
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 'auto'
                }}>
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <i className="fas fa-clock"></i> 5 min read
                  </span>
                  <span style={{ 
                    fontSize: '12px', 
                    color: post.color,
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    Read Guide <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY READ OUR BLOG SECTION */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water5}`}></div>
          <div className={`${styles.waterDrop} ${styles.water6}`}></div>
          <div className={`${styles.waterDrop} ${styles.water7}`}></div>
          <div className={`${styles.waterDrop} ${styles.water8}`}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Why Read Our <span className={styles.gradientText}>Blog</span>
            </h2>
            
            <div style={{ textAlign: 'left' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px',
                marginBottom: '30px'
              }}>
                <div style={{ textAlign: 'center' }}>
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
                    <i className="fas fa-user-check"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Real Experience</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Written by professionals who actually close deals
                  </p>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '22px',
                    margin: '0 auto 15px auto'
                  }}>
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Actionable Steps</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Clear, step-by-step instructions you can use today
                  </p>
                </div>
                
                <div style={{ textAlign: 'center' }}>
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
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Proven Results</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Strategies tested and refined with real clients
                  </p>
                </div>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(111, 123, 247, 0.08), rgba(156, 111, 247, 0.05))',
                padding: '25px', 
                borderRadius: '12px',
                border: '1px solid rgba(111, 123, 247, 0.15)',
                marginTop: '20px'
              }}>
                <h4 style={{ 
                  color: '#1f2937', 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-lightbulb" style={{ color: '#6f7bf7' }}></i>
                  Start Implementing Today
                </h4>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '15px', 
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  Each guide is designed to give you <strong>immediately actionable advice</strong>. Pick one topic, implement the strategies, and start seeing better results with your outreach this week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE LEADS CTA - Matches About.js CTA */}
      <section className={styles.features} style={{ paddingBottom: '80px' }}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water13}`}></div>
          <div className={`${styles.waterDrop} ${styles.water14}`}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.card} style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            textAlign: 'center',
            padding: '40px'
          }}>
            <div className={styles.cardIcon} style={{ marginBottom: '20px' }}>
              <i className="fas fa-search" style={{ fontSize: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '15px', color: '#1f2937' }}>
              Ready to Find Real Clients?
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
              Apply what you've learned from our guides with real, verified project leads from across social media.
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
                <i className="fas fa-bolt"></i>
                Browse Available Leads
              </a>
              <a 
                href="/contact" 
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
                <i className="fas fa-question-circle"></i>
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}