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
        <title>Building Trust Before Closing a Deal with LinkedIn Leads | RequestSignals</title>
        <meta
          name="description"
          content="Master the art of building trust with LinkedIn leads before closing deals. Learn transparency techniques, credibility building, and relationship strategies that increase close rates by 60%."
        />
        <meta name="keywords" content="building trust with clients, trust building strategies, LinkedIn trust building, client trust, credibility building, professional trust, relationship building, sales trust, deal closing trust, trust before closing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Building Trust Before Closing a Deal with LinkedIn Leads" />
        <meta property="og:description" content="Learn how to build trust with LinkedIn leads before closing deals. Trust-building strategies that increase close rates by 60% for agencies and freelancers." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/building-trust-before-closing-linkedin-clients" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Building Trust Before Closing a Deal with LinkedIn Leads" />
        <meta name="twitter:description" content="Learn how to build trust with LinkedIn leads before closing a project deal with proven relationship-building techniques." />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Building Trust Before Closing a Deal with LinkedIn Leads",
            "description": "Master the art of building trust with LinkedIn leads before closing deals. Learn transparency techniques, credibility building, and relationship strategies.",
            "image": "https://requestsignals.com/images/building-trust-linkedin.jpg",
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
            "datePublished": "2024-02-01",
            "dateModified": "2024-02-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://requestsignals.com/blog/building-trust-before-closing-linkedin-clients"
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
              color: '#f59e0b',
              background: 'rgba(245, 158, 11, 0.1)',
              padding: '6px 12px',
              borderRadius: '20px'
            }}>
              <i className="fas fa-handshake"></i> Relationship Guide
            </div>
            <h1 style={{ fontSize: '42px', lineHeight: '1.2' }}>
              Building <span className={styles.gradientText}>Trust</span> Before Closing a Deal
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              Master the psychology of trust-building with LinkedIn leads. Learn the proven framework that increases deal closing rates by 60% through authentic relationship building.
            </p>
            
            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-chart-line" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>60% Higher Close Rates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>8 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-brain" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>Psychology & Strategy</span>
              </div>
            </div>
            
            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Trust Building</span>
              <span className={styles.tag}>Client Relationships</span>
              <span className={styles.tag}>Credibility</span>
              <span className={styles.tag}>Psychology of Trust</span>
              <span className={styles.tag}>Deal Preparation</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}><i className="fas fa-shield-alt"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Trust Factor</h4>
                      <p>#1 factor in successful deal closing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}><i className="fas fa-lightbulb"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Key Insight</h4>
                      <p>Trust grows when clients feel safe & understood</p>
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
        <div className={styles.minimalLine} style={{ background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}></div>
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
                <strong>Trust is the most important factor in closing deals, yet it's often the most neglected.</strong> According to research by Edelman, 81% of buyers say trust is a deal-breaker or deciding factor. Without trust, even the best proposal, the lowest price, or the most impressive portfolio can fail.
              </p>
              
              <div className={styles.card} style={{ 
                background: 'rgba(245, 158, 11, 0.05)',
                padding: '25px', 
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.1)',
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
                    background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '20px',
                    flexShrink: 0
                  }}>
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The Trust Economics</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      Companies with high trust levels experience <strong>2.5x higher revenue growth</strong> and <strong>90% higher employee retention</strong>. For freelancers and agencies, high trust translates to <strong>60% higher close rates, 40% larger deal sizes, and 75% higher client retention.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The 4 Pillars of Trust */}
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
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
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
                The 4 Pillars of Professional Trust
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Trust in business relationships isn't monolithic; it's built on four distinct pillars. Understanding and addressing each pillar systematically is what separates successful closers from the rest.
              </p>
              
              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                {[
                  { 
                    icon: 'fas fa-eye',
                    title: 'Competence Trust',
                    description: 'Belief in your skills and abilities',
                    build: 'Showcase relevant work, share insights, demonstrate expertise',
                    break: 'Making mistakes, lacking knowledge, poor quality'
                  },
                  { 
                    icon: 'fas fa-heart',
                    title: 'Care Trust',
                    description: 'Belief you have their best interests at heart',
                    build: 'Ask about their goals, show empathy, prioritize their needs',
                    break: 'Being pushy, ignoring concerns, prioritizing your needs'
                  },
                  { 
                    icon: 'fas fa-balance-scale',
                    title: 'Integrity Trust',
                    description: 'Belief in your honesty and principles',
                    build: 'Be transparent, admit limitations, keep promises',
                    break: 'Lying, hiding information, changing terms'
                  },
                  { 
                    icon: 'fas fa-shield-alt',
                    title: 'Reliability Trust',
                    description: 'Belief you\'ll deliver consistently',
                    build: 'Meet deadlines, communicate proactively, be consistent',
                    break: 'Missed deadlines, poor communication, inconsistency'
                  }
                ].map((pillar, index) => (
                  <div key={index} className={styles.card} style={{ height: '100%' }}>
                    <div className={styles.cardIcon}>
                      <i className={pillar.icon}></i>
                    </div>
                    <h3>{pillar.title}</h3>
                    <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px' }}>{pillar.description}</p>
                    <div style={{ 
                      background: 'rgba(245, 158, 11, 0.05)',
                      padding: '12px',
                      borderRadius: '8px',
                      marginBottom: '10px'
                    }}>
                      <strong style={{ color: '#92400e', fontSize: '12px', display: 'block', marginBottom: '5px' }}>Builds Trust:</strong>
                      <p style={{ color: '#4b5563', fontSize: '12px', margin: '0' }}>{pillar.build}</p>
                    </div>
                    <div style={{ 
                      background: 'rgba(239, 68, 68, 0.05)',
                      padding: '12px',
                      borderRadius: '8px'
                    }}>
                      <strong style={{ color: '#7f1d1d', fontSize: '12px', display: 'block', marginBottom: '5px' }}>Breaks Trust:</strong>
                      <p style={{ color: '#4b5563', fontSize: '12px', margin: '0' }}>{pillar.break}</p>
                    </div>
                  </div>
                ))}
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
                  background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
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
                The Art of Strategic Transparency
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Clients appreciate honesty more than perfection.</strong> Over-promising damages long-term credibility, while strategic transparency builds immediate trust. The key is knowing what to share, when to share it, and how to frame it.
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
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '22px',
                    margin: '0 auto 15px auto'
                  }}>
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Over-Promising</h4>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>"We can do anything"</li>
                    <li>"100% guaranteed results"</li>
                    <li>"No challenges expected"</li>
                    <li>"We're the best at everything"</li>
                  </ul>
                </div>
                
                <div className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ 
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '22px',
                    margin: '0 auto 15px auto'
                  }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h4 style={{ marginBottom: '10px', color: '#1f2937' }}>Strategic Transparency</h4>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>"Here's what we can do well"</li>
                    <li>"Based on experience, expect X results"</li>
                    <li>"Potential challenges and solutions"</li>
                    <li>"Our strengths and specializations"</li>
                  </ul>
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
                  The Transparency Framework
                </h4>
                <div style={{ 
                  display: 'grid',
                  gap: '15px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <div>
                      <strong style={{ color: '#1f2937', fontSize: '14px' }}>Be Clear About Capabilities:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>"For projects like yours, we typically see [realistic outcome] within [realistic timeframe]. Here are three similar projects we've delivered."</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <div>
                      <strong style={{ color: '#1f2937', fontSize: '14px' }}>Acknowledge Limitations:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>"While we excel at [your strength], for [specific aspect] you might want to consider [alternative/specialist]. We can help coordinate that."</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <div>
                      <strong style={{ color: '#1f2937', fontSize: '14px' }}>Discuss Potential Challenges:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>"Based on our experience with similar projects, the main challenges are usually [X and Y]. Here's how we plan to address those from the start."</p>
                    </div>
                  </div>
                </div>
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
                  background: 'linear-gradient(135deg, #d97706, #f59e0b)',
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
                The Psychology of Relevant Experience Sharing
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Talking about similar problems you've solved reassures the client without sounding boastful. The psychology is simple: <strong>people trust those who have successfully navigated similar challenges before.</strong> But there's an art to sharing experience that builds trust rather than appearing arrogant.
              </p>
              
              <div className={styles.card} style={{ 
                background: 'rgba(245, 158, 11, 0.05)',
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
                  <i className="fas fa-graduation-cap" style={{ color: '#f59e0b' }}></i>
                  The 3-Level Experience Sharing Framework
                </h4>
                
                <div style={{ 
                  display: 'grid',
                  gap: '25px'
                }}>
                  {[
                    { 
                      level: "Level 1: Basic Sharing", 
                      approach: "Mentioning experience generally", 
                      example: '"We have 10 years of experience in this industry"', 
                      effectiveness: "Low - Generic and untrustworthy"
                    },
                    { 
                      level: "Level 2: Contextual Sharing", 
                      approach: "Connecting experience to their specific situation", 
                      example: '"For companies facing [their specific challenge], we\'ve found that [specific approach] works well"', 
                      effectiveness: "Medium - Relevant but not compelling"
                    },
                    { 
                      level: "Level 3: Story-Based Sharing", 
                      approach: "Sharing specific stories with lessons learned", 
                      example: '"When [similar company] faced [similar challenge], we helped them achieve [result] by [specific action]. The key learning was [insight] which might apply to your situation."', 
                      effectiveness: "High - Memorable and trustworthy"
                    }
                  ].map((item, index) => (
                    <div key={index} style={{ 
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      padding: '20px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        height: '4px',
                        background: index === 0 ? '#6b7280' : index === 1 ? '#f59e0b' : '#10b981'
                      }}></div>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '15px'
                      }}>
                        <span style={{ 
                          background: index === 0 ? '#6b7280' : index === 1 ? '#f59e0b' : '#10b981',
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
                          {index + 1}
                        </span>
                        <div>
                          <strong style={{ color: '#1f2937', fontSize: '16px' }}>{item.level}</strong>
                          <div style={{ 
                            display: 'inline-block',
                            marginLeft: '10px',
                            padding: '2px 8px',
                            background: index === 0 ? '#ef4444' : index === 1 ? '#f59e0b' : '#10b981',
                            color: 'white',
                            borderRadius: '4px',
                            fontSize: '12px'
                          }}>
                            {item.effectiveness}
                          </div>
                        </div>
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <strong style={{ color: '#1f2937', fontSize: '14px', display: 'block', marginBottom: '5px' }}>Approach:</strong>
                        <p style={{ color: '#4b5563', margin: '0', fontSize: '14px' }}>{item.approach}</p>
                      </div>
                      <div>
                        <strong style={{ color: '#1f2937', fontSize: '14px', display: 'block', marginBottom: '5px' }}>Example:</strong>
                        <div style={{ 
                          background: '#f9fafb',
                          padding: '12px',
                          borderRadius: '6px',
                          borderLeft: '3px solid #e5e7eb'
                        }}>
                          <p style={{ color: '#4b5563', margin: '0', fontSize: '14px', fontStyle: 'italic' }}>{item.example}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-user-check"></i>
                  The Trust Formula: How to Share Experience Effectively
                </h4>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px',
                  fontSize: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Focus on their problem:</strong> "When we helped [client] with [their exact challenge]..."</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Share specific results:</strong> "...they achieved [specific, measurable outcome]."</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Reveal the process:</strong> "The key was [specific approach or insight]."</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <i className="fas fa-check-circle" style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}></i>
                    <span style={{ color: '#4b5563' }}><strong>Connect to them:</strong> "This might be relevant because [connection to their situation]."</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The 5-Phase Trust Building Process */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-road" style={{ color: '#f59e0b' }}></i>
                The 5-Phase Trust Building Process
              </h2>
              
              <div className={styles.card} style={{ 
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(251, 191, 36, 0.05))',
                padding: '30px', 
                borderRadius: '16px',
                border: '1px solid rgba(245, 158, 11, 0.15)'
              }}>
                <h3 style={{ 
                  textAlign: 'center',
                  marginBottom: '25px',
                  color: '#1f2937'
                }}>
                  <i className="fas fa-sitemap" style={{ color: '#f59e0b', marginRight: '10px' }}></i>
                  Complete Trust Building Timeline (First Contact to Close)
                </h3>
                
                <div style={{ 
                  display: 'grid',
                  gap: '20px'
                }}>
                  {[
                    { 
                      phase: "Initial Contact (Day 1)", 
                      trustGoal: "Establish competence & relevance", 
                      actions: "Share specific insight related to their post, ask thoughtful question, demonstrate understanding", 
                      trustBuilt: "5-10% - They see you as knowledgeable"
                    },
                    { 
                      phase: "First Conversation (Day 1-3)", 
                      trustGoal: "Build care & integrity", 
                      actions: "Listen more than talk, ask about their goals and challenges, be transparent about capabilities", 
                      trustBuilt: "20-30% - They feel understood and safe"
                    },
                    { 
                      phase: "Follow-Up (Day 3-7)", 
                      trustGoal: "Demonstrate reliability", 
                      actions: "Follow up with value-added content, meet promised deadlines, be consistent in communication", 
                      trustBuilt: "40-50% - They see you as dependable"
                    },
                    { 
                      phase: "Proposal Phase (Day 7-14)", 
                      trustGoal: "Solidify all trust pillars", 
                      actions: "Present clear, honest proposal, discuss potential challenges, share relevant case studies", 
                      trustBuilt: "60-70% - They're confident in your abilities"
                    },
                    { 
                      phase: "Pre-Close (Day 14-21)", 
                      trustGoal: "Final trust validation", 
                      actions: "Answer all questions thoroughly, provide references if requested, be patient with decision process", 
                      trustBuilt: "80-90% - They're ready to commit"
                    }
                  ].map((item, index) => (
                    <div key={index} style={{ 
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                        color: 'white',
                        padding: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                          <span style={{ 
                            background: 'white',
                            color: '#f59e0b',
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
                          <strong style={{ fontSize: '16px' }}>{item.phase}</strong>
                        </div>
                        <span style={{ 
                          background: 'rgba(255, 255, 255, 0.2)',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '12px'
                        }}>
                          Trust: {item.trustBuilt}
                        </span>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <div style={{ marginBottom: '15px' }}>
                          <strong style={{ color: '#1f2937', display: 'block', marginBottom: '5px' }}>Trust Goal:</strong>
                          <span style={{ color: '#4b5563', fontSize: '14px' }}>{item.trustGoal}</span>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                          <strong style={{ color: '#1f2937', display: 'block', marginBottom: '5px' }}>Key Actions:</strong>
                          <p style={{ color: '#4b5563', fontSize: '14px', margin: '0' }}>{item.actions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(251, 191, 36, 0.05))',
              padding: '30px', 
              borderRadius: '16px',
              border: '1px solid rgba(245, 158, 11, 0.15)',
              marginTop: '40px'
            }}>
              <h3 style={{ 
                textAlign: 'center',
                marginBottom: '20px',
                color: '#1f2937',
                fontSize: '24px'
              }}>
                <i className="fas fa-award" style={{ color: '#f59e0b', marginRight: '10px' }}></i>
                The Ultimate Trust Principle
              </h3>
              <p className={styles.subtitle} style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                <strong>Trust grows when clients feel safe, understood, and respected.</strong> It's not built through grand gestures or perfect pitches, but through consistent, small actions that demonstrate competence, care, integrity, and reliability.
                <br/><br/>
                Remember: <strong>People don't buy from companies; they buy from people they trust.</strong> Your LinkedIn leads are evaluating not just your skills and prices, but whether they feel safe working with you. Focus on building that safety through transparency, relevant experience sharing, and consistent, respectful communication.
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
            Master the Complete <span className={styles.gradientText}>Conversion Journey</span>
          </h2>
          
          <div className={styles.howGrid}>
            <a href="/blog/how-to-close-project-deals-from-linkedin" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-file-contract"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Next Step
                </span>
              </div>
              <h3>How to Close Project Deals from LinkedIn</h3>
              <p>Master the art of closing deals after building trust. From proposal to signed contract.</p>
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
              <p>Professional follow-up techniques that build trust through consistent communication.</p>
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
              <p>The complete conversion process from initial contact to trust building to closing.</p>
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
              <i className="fas fa-handshake" style={{ fontSize: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '15px', color: '#1f2937' }}>
              Ready to Build Trust with Real Leads?
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
              Apply these trust-building strategies with real LinkedIn project leads who are actively looking for services.
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
                Find Trust-Building Opportunities
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
                  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)'
                }}
              >
                <i className="fas fa-book-open"></i>
                More Relationship Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}