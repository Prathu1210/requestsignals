import Head from "next/head";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Theme.module.css";

export default function Post() {
  useEffect(() => {
    // Add scroll animation for cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe all cards
    const allCards = document.querySelectorAll(`.${styles.card}`);
    allCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>How to Close Project Deals from LinkedIn Leads | RequestSignals</title>
        <meta
          name="description"
          content="Step-by-step guide to close project deals from LinkedIn. Learn negotiation tactics, scope clarification, pricing strategies, and deal closing techniques for agencies and freelancers."
        />
        <meta name="keywords" content="close LinkedIn deals, LinkedIn deal closing, project deals LinkedIn, LinkedIn negotiation, freelance deal closing, agency sales, LinkedIn sales closing, project proposal LinkedIn, deal closing strategies, LinkedIn contract signing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="How to Close Project Deals from LinkedIn Leads" />
        <meta property="og:description" content="Master the art of closing project deals from LinkedIn. Learn the step-by-step process that successful agencies and freelancers use to convert leads into signed contracts." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/how-to-close-project-deals-from-linkedin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Close Project Deals from LinkedIn Leads" />
        <meta name="twitter:description" content="Learn how agencies and freelancers successfully close project deals from LinkedIn leads with proven closing techniques." />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Close Project Deals from LinkedIn Leads",
            "description": "Step-by-step guide to close project deals from LinkedIn. Learn negotiation tactics, scope clarification, pricing strategies, and deal closing techniques.",
            "image": "https://requestsignals.com/images/linkedin-deal-closing.jpg",
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
            "datePublished": "2024-01-20",
            "dateModified": "2024-01-20",
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
              How to Close <span className={styles.gradientText}>Project Deals</span> from LinkedIn
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              Master the art of converting LinkedIn conversations into signed contracts. Learn the proven 7-step closing process that successful agencies use to win 40%+ of their LinkedIn opportunities.
            </p>
            
            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-briefcase" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>For Freelancers & Agencies</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>9 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-chart-line" style={{ color: '#f76fd8' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>Advanced Level</span>
              </div>
            </div>
            
            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Deal Closing</span>
              <span className={styles.tag}>LinkedIn Sales</span>
              <span className={styles.tag}>Project Negotiation</span>
              <span className={styles.tag}>Contract Signing</span>
              <span className={styles.tag}>Sales Process</span>
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
                      <p>Proven methods achieving 40%+ close rates</p>
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
                      <p>Closing is about alignment, not persuasion</p>
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
                <strong>Closing a LinkedIn project deal is less about persuasion and more about perfect alignment.</strong> Clients say yes when they feel deeply understood, confident in your process, and clear about the value they'll receive.
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
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The LinkedIn Deal Closing Reality</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      Most freelancers and agencies lose deals not because of price or competition, but because they fail to <strong>clarify expectations</strong> and <strong>build confidence</strong> during the closing process. The final 20% of the sales process determines 80% of your success.
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
                Clarify Scope Before Discussing Price
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                The number one reason LinkedIn project deals fail is <strong>unclear expectations and scope creep.</strong> Clients often don't know exactly what they need, and providers rush to give pricing without fully understanding requirements.
              </p>
              
              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Loses Deals</h3>
                  <p>
                    "Based on what you shared, I can do this for $5,000. Let me know if you're interested."
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Wins Deals</h3>
                  <p>
                    "Before discussing numbers, let me make sure I understand exactly what you need. Can you tell me more about [specific aspect]?"
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
                  The Scope Clarification Checklist
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
                    <span style={{ color: '#4b5563' }}><strong>Project Goals:</strong> What specific business outcomes are they trying to achieve?</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Success Metrics:</strong> How will they measure success? (KPIs, metrics, deliverables)</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Timeline Expectations:</strong> When do they need it? Is there flexibility?</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Decision Process:</strong> Who else needs to approve? What's their timeline?</span>
                  </li>
                </ul>
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
                Explain the Process, Not Just the Price
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Clients are more comfortable spending money when they understand <strong>how the work will be delivered,</strong> what milestones to expect, and how you'll handle challenges. A clear process builds confidence more than any discount ever could.
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
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Price-First Approach</h4>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                    Focuses only on cost. Creates price sensitivity. Leads to haggling. Low conversion rates.
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
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Process-First Approach</h4>
                  <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>
                    Focuses on value delivery. Builds confidence. Justifies investment. Higher conversion.
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
                  The 5-Step Project Process You Should Explain
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
                      <strong style={{ color: '#1f2937' }}>Discovery Phase:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Deep dive into requirements, goals, and constraints</p>
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
                      <strong style={{ color: '#1f2937' }}>Planning & Approval:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Detailed project plan, timeline, and deliverables</p>
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
                      <strong style={{ color: '#1f2937' }}>Execution Phase:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Regular updates, milestone reviews, and feedback loops</p>
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
                      <strong style={{ color: '#1f2937' }}>Review & Revisions:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Client review, feedback implementation, and refinements</p>
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
                      <strong style={{ color: '#1f2937' }}>Delivery & Support:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>Final delivery, training, and post-project support</p>
                    </div>
                  </li>
                </ol>
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
                The Art of Patient Follow-Up (Don't Rush the Decision)
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Pressure kills deals.</strong> Corporate clients often need time for internal discussions, budget approvals, and stakeholder alignment. Following up politely while allowing thinking space is a delicate balance that separates amateur closers from professionals.
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
                    <span style={{ color: '#4b5563' }}>"Are you still interested? Please respond ASAP" (sent 2 hours after proposal)</span>
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
                      <strong style={{ color: '#1f2937' }}>Follow-up #1 (2 days after proposal):</strong>
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
                The Complete LinkedIn Deal Closing Framework
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
                  7-Step LinkedIn Deal Closing Process
                </h3>
                
                <div style={{ 
                  display: 'grid',
                  gap: '15px'
                }}>
                  {[
                    { step: 1, title: "Qualification Check", desc: "Confirm they have budget, authority, need, and timeline (BANT)", icon: "fas fa-filter", color: "#6f7bf7" },
                    { step: 2, title: "Deep Discovery", desc: "Ask probing questions to understand real needs and constraints", icon: "fas fa-search", color: "#9c6ff7" },
                    { step: 3, title: "Value Alignment", desc: "Connect your solution directly to their business goals", icon: "fas fa-bullseye", color: "#f76fd8" },
                    { step: 4, title: "Process Demonstration", desc: "Show exactly how you'll deliver results", icon: "fas fa-project-diagram", color: "#ff6b9d" },
                    { step: 5, title: "Proposal Presentation", desc: "Present clear scope, timeline, and investment", icon: "fas fa-file-alt", color: "#10b981" },
                    { step: 6, title: "Objection Handling", desc: "Address concerns with empathy and solutions", icon: "fas fa-comments", color: "#f59e0b" },
                    { step: 7, title: "Patient Follow-Up", desc: "Respectful persistence without pressure", icon: "fas fa-clock", color: "#6b7280" }
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
                Final Word on LinkedIn Deal Closing
              </h3>
              <p className={styles.subtitle} style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                Closing <strong>LinkedIn project deals</strong> successfully requires shifting from a "sales" mindset to a "partnership" mindset. Your goal isn't to convince someone to buy, but to help them make the best decision for their business.
                <br/><br/>
                Remember: <strong>Clarity beats persuasion.</strong> A client who understands exactly what they're getting, how they're getting it, and why it's valuable will close themselves. Your job is to provide that clarity through thorough discovery, transparent process explanation, and patient, professional follow-up.
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
              <h3>How to Convert LinkedIn Project Leads into Clients</h3>
              <p>Learn proven strategies to turn LinkedIn project leads into paying clients with authentic outreach.</p>
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
              <h3>Best Ways to Approach LinkedIn Project Leads</h3>
              <p>Discover the most effective methods to contact LinkedIn leads without sounding salesy.</p>
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

            <a href="/blog/follow-up-strategies-for-linkedin-leads" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-sync-alt"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Essential
                </span>
              </div>
              <h3>Follow-Up Strategies That Actually Work</h3>
              <p>Professional follow-up techniques that increase response rates without being annoying.</p>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '15px'
              }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>
                  <i className="fas fa-clock"></i> 5 min read
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
              Apply these deal-closing strategies with real LinkedIn project leads who are actively looking for services like yours.
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