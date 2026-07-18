import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

export default function About() {
  useEffect(() => {
    // Add interactive effects for cards
    const cards = document.querySelectorAll(`.${styles.card}`);
    
    cards.forEach(card => {
      // Add mouse move parallax effect
      card.addEventListener('mousemove', function(e) {
        const cardRect = this.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        const rotateY = (x - centerX) / 30;
        const rotateX = (centerY - y) / 30;
        
        this.style.transform = `translateY(-5px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      // Reset transform on mouse leave
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });

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
        <title>About RequestSignals – Real Service Requests from Social Media</title>
        <meta name="description" content="Learn about RequestSignals - how we track real-time service requests across major social media platforms to connect freelancers with real clients." />
        <meta name="keywords" content="LinkedIn leads, Reddit leads, X leads, Facebook leads, Instagram leads, social media leads, freelance leads, project leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Our <span className={styles.gradientText}>Mission</span>
            </h1>
            <p className={styles.subtitle}>
              Connecting talented freelancers and agencies with real clients who are actively looking for their services.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-bullseye"></i> Real Demand 
              <i className="fas fa-filter"></i> Curated Quality 
              <i className="fas fa-bolt"></i> Direct Connections
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
                    <span className={styles.highlightIcon}><i className="fas fa-handshake"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Real Connections</h4>
                      <p>Direct access to people who need your services right now.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-shield-alt"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Quality First</h4>
                      <p>Every lead is AI-verified for relevance and authenticity.</p>
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

      {/* ABOUT CONTENT SECTION */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              About <span className={styles.gradientText}>RequestSignals</span>
            </h2>
            
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '16px', 
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  RequestSignals is a platform that tracks <strong>real-time service and project requests</strong> shared by professionals across several major public social platforms. We're not just another lead generation tool – we're a bridge between genuine need and available talent.
                </p>

                <p style={{
                  color: '#4b5563',
                  fontSize: '16px',
                  lineHeight: '1.7',
                  marginBottom: '20px'
                }}>
                  Our system continuously scans major social media platforms to find people who are <strong>actively looking for services</strong> – whether it's a web developer for a startup, a designer for a rebrand, or a marketing consultant for a new campaign.
                </p>
              </div>
              
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-filter" style={{ color: '#6f7bf7' }}></i>
                  Our Curation Process
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '15px', 
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  We focus only on genuine requests where individuals or businesses are actively looking for services, expertise, or external support. <strong>Job postings, promotions, and unrelated content are filtered out.</strong> Every signal displayed on RequestSignals is scored by an AI model trained to catch genuine hiring intent, ensuring relevance, accuracy, and quality.
                </p>
              </div>
              
              <p style={{ 
                color: '#4b5563', 
                fontSize: '16px', 
                lineHeight: '1.7',
                marginBottom: '30px'
              }}>
                The goal is simple: help agencies, freelancers, consultants, and service providers <strong>discover real demand faster</strong> and make informed outreach decisions. No more wasting time on cold outreach or platforms filled with noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES SECTION */}
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
            Our <span className={styles.gradientText}>Core Values</span>
          </h2>
          
          <div className={styles.howGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-eye"></i></div>
              <h3>Transparency</h3>
              <p>
                Every lead includes the original source link. No hidden fees, no middlemen – just direct connections.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-check-circle"></i></div>
              <h3>Quality Over Quantity</h3>
              <p>
                We'd rather show you 10 high-quality leads than 100 mediocre ones. Every request is AI-verified before it's published.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-user-friends"></i></div>
              <h3>Community Focused</h3>
              <p>
                Built for freelancers, by freelancers. We understand what you need because we've been there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
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
              How We <span className={styles.gradientText}>Work</span>
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
                    <i className="fas fa-search"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Discover</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Scan major social media platforms for public service requests
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
                    <i className="fas fa-filter"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Filter</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Remove job posts, keep genuine requests
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
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h4 style={{ marginBottom: '8px', color: '#1f2937' }}>Deliver</h4>
                  <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                    Share curated leads with our community
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
                  <i className="fas fa-info-circle" style={{ color: '#6f7bf7' }}></i>
                  Our Commitment to You
                </h4>
                <p style={{ 
                  color: '#4b5563', 
                  fontSize: '15px', 
                  lineHeight: '1.6',
                  marginBottom: '0'
                }}>
                  RequestSignals will always remain <strong>free and accessible</strong> to freelancers and small agencies. We believe in leveling the playing field and giving everyone access to quality opportunities without gatekeeping or excessive fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
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
              Start browsing through genuine service requests today. Connect directly with people who need your skills right now.
            </p>
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
              Browse Available Leads
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}