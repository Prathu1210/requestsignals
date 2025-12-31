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
        <title>Best Ways to Approach LinkedIn Project Leads | RequestSignals</title>
        <meta
          name="description"
          content="Learn the most effective professional approaches to contact LinkedIn project leads. Get 47% higher response rates with non-salesy outreach techniques that build trust immediately."
        />
        <meta name="keywords" content="LinkedIn project leads, approach LinkedIn leads, professional outreach, LinkedIn messaging, cold outreach LinkedIn, B2B lead generation, LinkedIn networking, sales outreach, client acquisition LinkedIn, business development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Best Ways to Approach LinkedIn Project Leads" />
        <meta property="og:description" content="Discover professional LinkedIn outreach techniques that get 47% higher response rates and convert more project leads into clients." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/best-approach-to-contact-linkedin-leads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Ways to Approach LinkedIn Project Leads" />
        <meta name="twitter:description" content="Professional LinkedIn outreach strategies that convert project leads without sounding salesy or desperate." />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Ways to Approach LinkedIn Project Leads",
            "description": "Learn the most effective professional approaches to contact LinkedIn project leads. Get 47% higher response rates with non-salesy outreach techniques.",
            "image": "https://requestsignals.com/images/linkedin-approach-strategies.jpg",
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
              "@id": "https://requestsignals.com/blog/best-approach-to-contact-linkedin-leads"
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
              <i className="fas fa-first-order-alt"></i> First Impression Guide
            </div>
            <h1 style={{ fontSize: '42px', lineHeight: '1.2' }}>
              Best Ways to Approach <span className={styles.gradientText}>LinkedIn Project Leads</span>
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              Master the art of professional LinkedIn outreach that gets 47% higher response rates. Learn messaging frameworks that convert project leads without sounding salesy or desperate.
            </p>
            
            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-chart-line" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>47% Higher Response Rate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>8 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-users" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>All Experience Levels</span>
              </div>
            </div>
            
            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>LinkedIn Outreach</span>
              <span className={styles.tag}>Lead Generation</span>
              <span className={styles.tag}>Professional Messaging</span>
              <span className={styles.tag}>First Contact</span>
              <span className={styles.tag}>B2B Sales</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}><i className="fas fa-percentage"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Response Rate</h4>
                      <p>47% higher response with personalized approaches</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}><i className="fas fa-lightbulb"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Key Insight</h4>
                      <p>First impression determines 94% of response outcomes</p>
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
            {/* Introduction */}
            <div style={{ marginBottom: '40px' }}>
              <p className={styles.subtitle} style={{ 
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '20px'
              }}>
                <strong>The first message you send to a LinkedIn project lead determines 94% of whether they'll respond or ignore you.</strong> Research shows that personalized outreach achieves 47% higher response rates compared to generic templates, yet most professionals still use mass-messaging approaches that damage their credibility before conversations even begin.
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
                    <i className="fas fa-chart-bar"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The LinkedIn Outreach Reality</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      <strong>78% of decision-makers</strong> say they've accepted meeting requests based on cold outreach that was highly personalized. However, <strong>only 23% of sales emails</strong> are actually opened because most are generic and self-serving. Your approach isn't just about making contact; it's about making the right kind of contact that builds immediate credibility.
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
                The Personalization Framework: Beyond Just Using Their Name
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                True personalization goes beyond inserting someone's name into a template. <strong>It demonstrates that you've invested time to understand their specific situation, challenges, and opportunities.</strong> This investment of attention is what separates effective outreach from spam.
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
                  <i className="fas fa-layer-group" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  The 4-Layer Personalization Framework
                </h3>
                
                <div style={{ 
                  display: 'grid',
                  gap: '20px'
                }}>
                  {[
                    { layer: "Basic", elements: "Name, Company, Title", impact: "12% response rate", example: '"Hi [Name], I saw you\'re at [Company]"'},
                    { layer: "Contextual", elements: "Recent post, Shared connection, Company news", impact: "28% response rate", example: '"I saw your post about [topic] and wanted to share..."' },
                    { layer: "Insightful", elements: "Industry challenge, Business goal, Specific pain point", impact: "42% response rate", example: '"Many [their industry] companies struggle with [challenge]"' },
                    { layer: "Value-First", elements: "Specific solution, Relevant case study, Actionable insight", impact: "47%+ response rate", example: '"We helped [similar company] achieve [result] with [approach]"' }
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
                        background: index === 3 ? 'linear-gradient(135deg, #10b981, #34d399)' : 
                                 index === 2 ? 'linear-gradient(135deg, #34d399, #10b981)' :
                                 index === 1 ? 'linear-gradient(135deg, #6ee7b7, #10b981)' :
                                               'linear-gradient(135deg, #d1fae5, #6ee7b7)',
                        color: index === 3 ? 'white' : '#065f46',
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
                        {item.layer}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                          <strong style={{ color: '#1f2937' }}>{item.elements}</strong>
                          <span style={{ fontSize: '12px', color: '#6b7280', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px' }}>{item.impact}</span>
                        </div>
                        <p style={{ color: '#4b5563', margin: '0', fontSize: '14px' }}><strong>Example:</strong> {item.example}</p>
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
                  <h3>Generic Approaches</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>"Hi [Name], I help companies like yours..."</li>
                    <li>Template with only name changed</li>
                    <li>Immediate pitch about services</li>
                    <li>No reference to their specific work</li>
                    <li>Mass connection requests</li>
                  </ul>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>Personalized Approaches</h3>
                  <ul style={{ textAlign: 'left', fontSize: '14px', color: '#4b5563', paddingLeft: '20px' }}>
                    <li>Reference their recent post/article</li>
                    <li>Mention shared connection context</li>
                    <li>Show understanding of their industry</li>
                    <li>Offer specific insight first</li>
                    <li>Ask thoughtful, relevant questions</li>
                  </ul>
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
                Message Structure That Converts: The 3-Part Framework
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                High-converting LinkedIn messages follow a psychological structure that builds curiosity, establishes credibility, and creates logical next steps. <strong>Every word should serve a specific purpose in moving the conversation forward.</strong>
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
                  <i className="fas fa-code" style={{ color: '#10b981' }}></i>
                  The High-Response Message Template
                </h4>
                
                <div style={{ 
                  background: '#f9fafb',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  marginBottom: '20px'
                }}>
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ 
                        background: '#10b981',
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
                      <strong style={{ color: '#1f2937' }}>Personalized Hook (15-20 words)</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0 0 0 34px', fontSize: '14px', fontStyle: 'italic' }}>
                      "Hi [Name], I saw your post about [specific topic] and your approach to [specific aspect] was particularly insightful..."
                    </p>
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ 
                        background: '#34d399',
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
                      <strong style={{ color: '#1f2937' }}>Value Bridge (25-35 words)</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0 0 0 34px', fontSize: '14px', fontStyle: 'italic' }}>
                      "Many [their industry] companies are dealing with [specific challenge], and I've found that [specific insight] often helps them [achievable outcome]..."
                    </p>
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ 
                        background: '#6ee7b7',
                        color: '#065f46',
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
                      <strong style={{ color: '#1f2937' }}>Low-Pressure Ask (10-15 words)</strong>
                    </div>
                    <p style={{ color: '#4b5563', margin: '0 0 0 34px', fontSize: '14px', fontStyle: 'italic' }}>
                      "Would you be open to a brief 15-minute chat to explore if this approach might be relevant for [their specific situation]?"
                    </p>
                  </div>
                </div>
                
                <div className={styles.howGrid} style={{ marginBottom: '0' }}>
                  <div className={styles.card} style={{ padding: '15px' }}>
                    <h5 style={{ margin: '0 0 10px 0', color: '#1f2937', fontSize: '14px' }}><i className="fas fa-brain" style={{ color: '#10b981', marginRight: '8px' }}></i> Psychology</h5>
                    <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>Builds reciprocity, establishes expertise, creates curiosity gap</p>
                  </div>
                  <div className={styles.card} style={{ padding: '15px' }}>
                    <h5 style={{ margin: '0 0 10px 0', color: '#1f2937', fontSize: '14px' }}><i className="fas fa-clock" style={{ color: '#10b981', marginRight: '8px' }}></i> Length</h5>
                    <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>50-70 words total (readable in 15 seconds)</p>
                  </div>
                  <div className={styles.card} style={{ padding: '15px' }}>
                    <h5 style={{ margin: '0 0 10px 0', color: '#1f2937', fontSize: '14px' }}><i className="fas fa-bullseye" style={{ color: '#10b981', marginRight: '8px' }}></i> Goal</h5>
                    <p style={{ margin: '0', fontSize: '12px', color: '#4b5563' }}>Schedule brief conversation, not immediate sale</p>
                  </div>
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
                  <i className="fas fa-exclamation-triangle"></i>
                  Critical Mistake to Avoid
                </h4>
                <p style={{ color: '#4b5563', marginBottom: '0', fontSize: '15px' }}>
                  <strong>Never attach proposals, portfolios, or lengthy documents in your first message.</strong> This creates immediate pressure and suggests you're more interested in selling than understanding. Instead, focus on establishing mutual interest first, then share resources as the conversation progresses.
                </p>
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
                  background: 'linear-gradient(135deg, #10b981, #8b5cf6)',
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
                Timing & Channel Strategy: When and How to Make First Contact
              </h2>
              
              <p className={styles.subtitle} style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Your approach timing and channel selection can increase response rates by 32%.</strong> Research shows that messages sent at optimal times with appropriate channel selection receive significantly higher engagement.
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
                  <i className="fas fa-calendar-alt" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  Optimal Timing Matrix for LinkedIn Outreach
                </h3>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px'
                }}>
                  {[
                    { day: "Tuesday", time: "10am - 11:30am", response: "34% higher", reason: "Post-weekend planning mode" },
                    { day: "Wednesday", time: "2pm - 3:30pm", response: "28% higher", reason: "Mid-week focus time" },
                    { day: "Thursday", time: "8:30am - 10am", response: "31% higher", reason: "Pre-weekend productivity" },
                    { day: "Friday", time: "1pm - 2pm", response: "22% higher", reason: "Weekend planning phase" },
                    { day: "Monday", time: "After 1pm", response: "Average", reason: "Catching up on emails" },
                    { day: "Weekends", time: "Any time", response: "Avoid", reason: "Personal time disruption" }
                  ].map((item, index) => (
                    <div key={index} className={styles.card} style={{ 
                      padding: '15px',
                      textAlign: 'center',
                      height: '100%',
                      background: index <= 3 ? 'rgba(16, 185, 129, 0.05)' : 'rgba(239, 68, 68, 0.05)'
                    }}>
                      <div style={{ 
                        background: index <= 3 ? 'linear-gradient(135deg, #10b981, #34d399)' : 'linear-gradient(135deg, #ef4444, #f87171)',
                        color: 'white',
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: '600',
                        margin: '0 auto 10px auto'
                      }}>
                        {item.day.substring(0, 3)}
                      </div>
                      <h5 style={{ margin: '0 0 8px 0', color: '#1f2937', fontSize: '14px' }}>{item.time}</h5>
                      <div style={{ 
                        background: index <= 3 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        color: index <= 3 ? '#065f46' : '#991b1b',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        marginBottom: '8px',
                        display: 'inline-block'
                      }}>
                        {item.response}
                      </div>
                      <p style={{ margin: '0', color: '#6b7280', fontSize: '11px' }}>{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.howGrid} style={{ marginBottom: '30px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3>Connection Request + Message</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>
                    <strong>Best for:</strong> Initial outreach with personalized note<br/>
                    <strong>Success rate:</strong> 38% acceptance<br/>
                    <strong>Tip:</strong> Include personalized note explaining why you're connecting
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-comment-alt"></i>
                  </div>
                  <h3>InMail (Premium)</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>
                    <strong>Best for:</strong> High-value prospects not connected<br/>
                    <strong>Success rate:</strong> 42% response<br/>
                    <strong>Tip:</strong> Lead with value, keep under 200 words
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-comment"></i>
                  </div>
                  <h3>Comment + Follow-up</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563' }}>
                    <strong>Best for:</strong> Building rapport first<br/>
                    <strong>Success rate:</strong> 51% response<br/>
                    <strong>Tip:</strong> Add thoughtful comment, then message 1-2 days later
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Approach Sequence */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ 
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-sitemap" style={{ color: '#10b981' }}></i>
                The Complete LinkedIn Approach System
              </h2>
              
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
                  <i className="fas fa-road" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  7-Step Professional Approach Framework
                </h3>
                
                <div style={{ 
                  display: 'grid',
                  gap: '20px'
                }}>
                  {[
                    { 
                      step: "Research & Preparation", 
                      time: "5-10 minutes", 
                      actions: "Review profile, recent posts, company updates, mutual connections, industry context", 
                      outcome: "Identify 3+ personalization points"
                    },
                    { 
                      step: "Value Identification", 
                      time: "3-5 minutes", 
                      actions: "Determine specific value you can offer, relevant case studies, actionable insights", 
                      outcome: "Clear value proposition"
                    },
                    { 
                      step: "Message Crafting", 
                      time: "5-7 minutes", 
                      actions: "Write using 3-part framework, ensure mobile readability, check tone", 
                      outcome: "50-70 word personalized message"
                    },
                    { 
                      step: "Timing Selection", 
                      time: "1 minute", 
                      actions: "Schedule for optimal day/time, consider timezone, avoid holidays", 
                      outcome: "Optimized send time"
                    },
                    { 
                      step: "Connection Request", 
                      time: "1 minute", 
                      actions: "Send with personalized note, ensure professional photo/headline", 
                      outcome: "Connection initiated"
                    },
                    { 
                      step: "Follow-Up Planning", 
                      time: "2 minutes", 
                      actions: "Schedule follow-up in 3-5 days, prepare value-added content", 
                      outcome: "Follow-up system ready"
                    },
                    { 
                      step: "Tracking & Learning", 
                      time: "2 minutes", 
                      actions: "Record approach, note response patterns, refine templates", 
                      outcome: "Continuous improvement"
                    }
                  ].map((item, index) => (
                    <div key={index} style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '15px',
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb'
                    }}>
                      <div style={{ 
                        background: 'linear-gradient(135deg, #10b981, #34d399)',
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
                        {index + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <strong style={{ color: '#1f2937' }}>{item.step}</strong>
                          <span style={{ fontSize: '12px', color: '#6b7280', background: '#f3f4f6', padding: '2px 8px', borderRadius: '4px' }}>{item.time}</span>
                        </div>
                        <p style={{ color: '#4b5563', margin: '0 0 5px 0', fontSize: '14px' }}><strong>Actions:</strong> {item.actions}</p>
                        <p style={{ color: '#065f46', margin: '0', fontSize: '13px', fontWeight: '500' }}><strong>Outcome:</strong> {item.outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ 
                  marginTop: '25px',
                  padding: '20px',
                  background: 'rgba(16, 185, 129, 0.05)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>
                    <i className="fas fa-calculator" style={{ color: '#10b981', marginRight: '10px' }}></i>
                    Time Investment vs. Return
                  </h4>
                  <p style={{ margin: '0', color: '#4b5563', fontSize: '15px' }}>
                    <strong>25-35 minutes per lead</strong> (vs. 2-3 minutes for generic outreach) yields <strong>47% higher response rates</strong> and <strong>3x conversion rates</strong>. Quality approach beats quantity every time.
                  </p>
                </div>
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
                The Professional Approach Advantage
              </h3>
              <p className={styles.subtitle} style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                Mastering the <strong>best ways to approach LinkedIn project leads</strong> transforms outreach from a numbers game into a relationship-building process. When you invest time in personalized, value-first approaches, you're not just trying to get a response; you're establishing professional credibility from the first interaction.
                <br/><br/>
                Remember: <strong>People don't buy from LinkedIn profiles; they buy from people they know, like, and trust.</strong> Your approach strategy should be designed to accelerate that process, not shortcut it. Every message should move you closer to being someone they know, like, and trust enough to work with.
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
            Complete Your <span className={styles.gradientText}>LinkedIn Success System</span>
          </h2>
          
          <div className={styles.howGrid}>
            <a href="/blog/follow-up-strategies-for-linkedin-leads" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-sync-alt"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Next Step
                </span>
              </div>
              <h3>Follow-Up Strategies That Actually Work</h3>
              <p>Master professional follow-up techniques that convert 35% more conversations into clients.</p>
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

            <a href="/blog/how-to-close-project-deals-from-linkedin" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-file-contract"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Advanced
                </span>
              </div>
              <h3>How to Close Project Deals from LinkedIn</h3>
              <p>From initial contact to signed contract: Master the complete deal-closing process.</p>
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

            <a href="/blog/building-trust-before-closing-linkedin-clients" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Foundation
                </span>
              </div>
              <h3>Building Trust Before Closing a Deal</h3>
              <p>Establish credibility and trust with potential clients before discussing contracts.</p>
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
              Ready to Apply These Approaches with Real Leads?
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
              Put these professional LinkedIn approach strategies to work with real project leads actively looking for services like yours.
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
                Find Project Leads to Approach
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
                More Outreach Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}