import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    // Add scroll animation for cards only (no hover effects)
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
    
    // Observe all cards for scroll animation only
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
        <title>Privacy Policy – RequestSignals</title>
        <meta name="description" content="Privacy policy of RequestSignals explaining our commitment to your privacy and data usage." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION - NO HOVER EFFECT */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Your <span className={styles.gradientText}>Privacy</span> Matters
            </h1>
            <p className={styles.subtitle}>
              We're committed to transparency about how we handle your information. Your trust is our priority.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-shield-alt"></i> No Personal Data 
              <i className="fas fa-chart-line"></i> Analytics Only 
              <i className="fas fa-lock"></i> No Data Sharing
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              {/* Blurred background elements */}
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              
              {/* Foreground cards - THEY HAVE THEIR OWN ANIMATIONS BUT NO HOVER */}
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-user-shield"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Privacy First</h4>
                      <p>We don't collect personally identifiable information from visitors.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-ban"></i></span>
                    <div className={styles.highlightText}>
                      <h4>No Data Selling</h4>
                      <p>We do not sell, trade, or share user data with third parties.</p>
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

      {/* PRIVACY CONTENT SECTION - NO HOVER EFFECT ON ANYTHING */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
        </div>
        
        <div className={styles.container}>
          {/* MAIN CONTENT CARD - NO HOVER EFFECT AT ALL */}
          <div className={styles.card} style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            pointerEvents: 'none' // Disables all mouse interactions
          }}>
            <div style={{ pointerEvents: 'auto' }}> {/* Re-enable for text selection */}
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                Privacy <span className={styles.gradientText}>Policy</span>
              </h2>
              
              <div style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-hand-peace" style={{ color: '#6f7bf7' }}></i>
                    Our Privacy Commitment
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    <strong>RequestSignals respects your privacy.</strong> We believe in being transparent about what information we collect and how we use it. Our fundamental principle is simple: we collect the minimum necessary to provide our service while protecting your privacy.
                  </p>
                </div>
                
                {/* DATA COLLECTION SECTION */}
                <div style={{ 
                  background: 'rgba(111, 123, 247, 0.05)', 
                  padding: '25px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(111, 123, 247, 0.1)',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-database" style={{ color: '#6f7bf7' }}></i>
                    What We Collect (And What We Don't)
                  </h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ 
                      background: 'rgba(46, 204, 113, 0.1)', 
                      padding: '15px', 
                      borderRadius: '8px',
                      border: '1px solid rgba(46, 204, 113, 0.2)'
                    }}>
                      <h4 style={{ 
                        color: '#27ae60', 
                        marginBottom: '10px',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fas fa-check-circle"></i>
                        What We Do Collect
                      </h4>
                      <ul style={{ 
                        color: '#4b5563', 
                        fontSize: '14px',
                        lineHeight: '1.6',
                        paddingLeft: '20px',
                        margin: 0
                      }}>
                        <li>Anonymous usage analytics via Google Analytics</li>
                        <li>Aggregate website traffic patterns</li>
                        <li>Page visit counts and duration</li>
                        <li>Browser type and device information</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: 'rgba(231, 76, 60, 0.1)', 
                      padding: '15px', 
                      borderRadius: '8px',
                      border: '1px solid rgba(231, 76, 60, 0.2)'
                    }}>
                      <h4 style={{ 
                        color: '#c0392b', 
                        marginBottom: '10px',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fas fa-times-circle"></i>
                        What We Don't Collect
                      </h4>
                      <ul style={{ 
                        color: '#4b5563', 
                        fontSize: '14px',
                        lineHeight: '1.6',
                        paddingLeft: '20px',
                        margin: 0
                      }}>
                        <li>Personally identifiable information</li>
                        <li>Email addresses (unless you contact us)</li>
                        <li>IP addresses (anonymized by GA4)</li>
                        <li>Location data beyond country level</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* ANALYTICS SECTION */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-chart-bar" style={{ color: '#6f7bf7' }}></i>
                    Analytics & Cookies
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    We use <strong>Google Analytics (GA4)</strong> to understand website traffic and usage patterns. Google Analytics may use cookies to collect anonymous usage data such as pages visited, time spent on the site, and general geographic information (country level only).
                  </p>
                  
                  <div style={{ 
                    background: 'linear-gradient(135deg, rgba(156, 111, 247, 0.05), rgba(111, 123, 247, 0.05))',
                    padding: '20px', 
                    borderRadius: '10px',
                    border: '1px solid rgba(111, 123, 247, 0.15)',
                    marginTop: '15px'
                  }}>
                    <h4 style={{ 
                      color: '#1f2937', 
                      marginBottom: '10px',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-cookie-bite"></i>
                      Cookie Usage
                    </h4>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      Cookies used are for analytics purposes only and help us improve the website experience. You can disable cookies in your browser settings, though this may affect some website functionality.
                    </p>
                  </div>
                </div>
                
                {/* DATA SHARING SECTION */}
                <div style={{ 
                  background: 'rgba(249, 250, 251, 0.8)', 
                  padding: '25px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-handshake" style={{ color: '#6f7bf7' }}></i>
                    Data Sharing Policy
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    <strong>We do not sell, trade, or share user data with third parties.</strong> The anonymous analytics data we collect is used solely for:
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #6f7bf7, #9c6ff7)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        margin: '0 auto 10px auto'
                      }}>
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                        Understanding usage patterns
                      </p>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #9c6ff7, #f76fd8)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        margin: '0 auto 10px auto'
                      }}>
                        <i className="fas fa-tools"></i>
                      </div>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                        Improving website features
                      </p>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #f76fd8, #ff6b9d)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        margin: '0 auto 10px auto'
                      }}>
                        <i className="fas fa-user-check"></i>
                      </div>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', margin: 0 }}>
                        Enhancing user experience
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* CONSENT SECTION */}
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(111, 123, 247, 0.08), rgba(156, 111, 247, 0.05))',
                  padding: '25px', 
                  borderRadius: '12px',
                  border: '1px solid rgba(111, 123, 247, 0.15)'
                }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '10px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-file-signature" style={{ color: '#6f7bf7' }}></i>
                    Your Consent
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    By using RequestSignals, you consent to the collection and use of anonymous analytics data as described in this privacy policy. If you have any concerns about our privacy practices, please don't hesitate to contact us.
                  </p>
                  
                  <div style={{ 
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '15px', 
                    borderRadius: '8px',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    marginTop: '15px'
                  }}>
                    <h4 style={{ 
                      color: '#1f2937', 
                      marginBottom: '8px',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fas fa-info-circle" style={{ color: '#6f7bf7' }}></i>
                      Policy Updates
                    </h4>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FOOTNOTE - NO HOVER EFFECT */}
      <section className={styles.features} style={{ paddingBottom: '80px' }}>
        <div className={styles.container}>
          <div className={styles.card} style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            textAlign: 'center',
            padding: '30px',
            pointerEvents: 'none' // Disables hover
          }}>
            <div style={{ pointerEvents: 'auto' }}> {/* Re-enable for links */}
              <div className={styles.cardIcon} style={{ marginBottom: '15px' }}>
                <i className="fas fa-question-circle" style={{ fontSize: '28px' }}></i>
              </div>
              <h3 style={{ marginBottom: '10px', color: '#1f2937', fontSize: '18px' }}>
                Questions About Privacy?
              </h3>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                If you have any questions about our privacy practices or this policy, please visit our <a href="/contact" style={{ color: '#6f7bf7', textDecoration: 'none', fontWeight: '500' }}>contact page</a> to get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}