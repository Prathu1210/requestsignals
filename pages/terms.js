import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

export default function Terms() {
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
        <title>Terms and Conditions – RequestSignals</title>
        <meta name="description" content="Terms and conditions for using RequestSignals. Understand your rights and responsibilities when using our platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION - NO HOVER EFFECT */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Terms & <span className={styles.gradientText}>Conditions</span>
            </h1>
            <p className={styles.subtitle}>
              Please read these terms carefully. By using RequestSignals, you agree to these terms and conditions.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-file-contract"></i> Legal Agreement 
              <i className="fas fa-exclamation-triangle"></i> Important Information 
              <i className="fas fa-balance-scale"></i> User Responsibilities
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              {/* Blurred background elements */}
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              
              {/* Foreground cards */}
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-info-circle"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Information Only</h4>
                      <p>We provide information based on publicly available data.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-user-check"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Your Responsibility</h4>
                      <p>You're responsible for how you use the information provided.</p>
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

      {/* TERMS CONTENT SECTION - NO HOVER EFFECT */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
        </div>
        
        <div className={styles.container}>
          {/* MAIN CONTENT CARD - NO HOVER EFFECT */}
          <div className={styles.card} style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            pointerEvents: 'none' // Disables all mouse interactions
          }}>
            <div style={{ pointerEvents: 'auto' }}> {/* Re-enable for text selection */}
              <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                Terms & <span className={styles.gradientText}>Conditions</span>
              </h2>
              
              <div style={{ textAlign: 'left' }}>
                {/* INTRODUCTION */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-book" style={{ color: '#6f7bf7' }}></i>
                    Introduction
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    Welcome to RequestSignals. These Terms and Conditions govern your use of our website and services. By accessing or using RequestSignals, you agree to be bound by these terms. If you disagree with any part of these terms, please do not use our website.
                  </p>
                </div>
                
                {/* SERVICE DESCRIPTION */}
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
                    <i className="fas fa-info-circle" style={{ color: '#6f7bf7' }}></i>
                    Service Description
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    <strong>RequestSignals provides information based on publicly available data.</strong> We aggregate and curate service requests from major public social media platforms. We do not guarantee the accuracy, completeness, or availability of any information displayed on our platform.
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
                      <i className="fas fa-exclamation-triangle" style={{ color: '#f59e0b' }}></i>
                      Important Disclaimer
                    </h4>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      Information on RequestSignals is provided "as is" without warranties of any kind. We make no representations about the suitability, reliability, or timeliness of the information for any purpose.
                    </p>
                  </div>
                </div>
                
                {/* USER RESPONSIBILITIES */}
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ 
                    color: '#1f2937', 
                    marginBottom: '15px',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-user-shield" style={{ color: '#6f7bf7' }}></i>
                    User Responsibilities
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    <strong>Users are responsible for how they use the information provided on this website.</strong> This includes but is not limited to:
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                    <div style={{ 
                      background: 'rgba(249, 250, 251, 0.8)', 
                      padding: '20px', 
                      borderRadius: '10px',
                      border: '1px solid rgba(226, 232, 240, 0.8)'
                    }}>
                      <h4 style={{ 
                        color: '#1f2937', 
                        marginBottom: '10px',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                        Your Rights
                      </h4>
                      <ul style={{ 
                        color: '#4b5563', 
                        fontSize: '14px',
                        lineHeight: '1.6',
                        paddingLeft: '20px',
                        margin: 0
                      }}>
                        <li>Access free information about service requests</li>
                        <li>Use information for legitimate business purposes</li>
                        <li>Contact leads through their public profiles</li>
                        <li>Provide feedback to improve our service</li>
                      </ul>
                    </div>
                    
                    <div style={{ 
                      background: 'rgba(254, 226, 226, 0.3)', 
                      padding: '20px', 
                      borderRadius: '10px',
                      border: '1px solid rgba(254, 226, 226, 0.5)'
                    }}>
                      <h4 style={{ 
                        color: '#1f2937', 
                        marginBottom: '10px',
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <i className="fas fa-ban" style={{ color: '#ef4444' }}></i>
                        Prohibited Activities
                      </h4>
                      <ul style={{ 
                        color: '#4b5563', 
                        fontSize: '14px',
                        lineHeight: '1.6',
                        paddingLeft: '20px',
                        margin: 0
                      }}>
                        <li>Spamming or harassing leads</li>
                        <li>Misrepresenting information from our platform</li>
                        <li>Automated scraping of our data</li>
                        <li>Commercial resale of our curated information</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* THIRD-PARTY RELATIONSHIPS */}
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
                    <i className="fas fa-external-link-alt" style={{ color: '#6f7bf7' }}></i>
                    Third-Party Relationships
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    <strong>RequestSignals is not affiliated with any third-party social media platforms referenced.</strong> We are an independent service that aggregates publicly available information.
                  </p>
                  
                  <div style={{ 
                    background: 'linear-gradient(135deg, rgba(111, 123, 247, 0.05), rgba(156, 111, 247, 0.03))',
                    padding: '20px', 
                    borderRadius: '10px',
                    border: '1px solid rgba(111, 123, 247, 0.1)',
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
                      <i className="fas fa-link" style={{ color: '#6f7bf7' }}></i>
                      External Links & Platforms
                    </h4>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      When you click on links to third-party social media platforms, you leave RequestSignals and are subject to those platforms' terms and privacy policies. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>
                  </div>
                </div>
                
                {/* ACCEPTANCE OF TERMS */}
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
                    Acceptance of Terms
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    fontSize: '16px', 
                    lineHeight: '1.7',
                    marginBottom: '15px'
                  }}>
                    By accessing and using RequestSignals, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
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
                      <i className="fas fa-sync-alt" style={{ color: '#6f7bf7' }}></i>
                      Changes to Terms
                    </h4>
                    <p style={{ 
                      color: '#4b5563', 
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '0'
                    }}>
                      We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms and Conditions on this page. You are advised to review these terms periodically for any changes.
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
                Need Clarification?
              </h3>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '0'
              }}>
                If you have questions about these terms or how they apply to your use of RequestSignals, please visit our <a href="/contact" style={{ color: '#6f7bf7', textDecoration: 'none', fontWeight: '500' }}>contact page</a> for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}