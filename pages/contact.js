import { useEffect, useState } from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        this.style.transform = `translateY(-8px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      // Reset transform on mouse leave
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        setTimeout(() => {
          this.style.transform = '';
        }, 300);
      });
    });

    // Button click effect
    const buttons = document.querySelectorAll(`.${styles.btnPrimary}`);
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple 0.6s linear;
          width: ${size}px;
          height: ${size}px;
          top: ${y}px;
          left: ${x}px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Add scroll animation for cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.cardVisible);
        }
      });
    }, observerOptions);
    
    // Observe all cards
    const allCards = document.querySelectorAll(`.${styles.card}`);
    allCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      // Cleanup if needed
      document.head.removeChild(style);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual endpoint
      // const response = await fetch('/api/feedback', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact – RequestSignals</title>
        <meta
          name="description"
          content="Get in touch with the RequestSignals team. We're here to help you find real service requests across LinkedIn, Reddit, X, Facebook, and Instagram."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Get In <span className={styles.gradientText}>Touch</span>
            </h1>
            <p className={styles.subtitle}>
              Have questions about RequestSignals? Need help finding leads?
              We're here to assist you.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-clock"></i> Quick Response 
              <i className="fas fa-users"></i> Friendly Support 
              <i className="fas fa-handshake"></i> Direct Help
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              {/* Blurred background elements */}
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg3}`}></div>
              
              {/* Foreground contact cards */}
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-comment-dots"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Direct Support</h4>
                      <p>Get personalized help with finding and connecting with leads.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#support</span>
                        <span className={styles.tag}>#help</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-lightbulb"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Feature Requests</h4>
                      <p>Suggest improvements or new features for RequestSignals.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#feedback</span>
                        <span className={styles.tag}>#ideas</span>
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

      {/* CONTACT OPTIONS SECTION - Now with 2 cards */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water1}`}></div>
          <div className={`${styles.waterDrop} ${styles.water2}`}></div>
          <div className={`${styles.waterDrop} ${styles.water3}`}></div>
          <div className={`${styles.waterDrop} ${styles.water4}`}></div>
          <div className={`${styles.waterDrop} ${styles.water5}`}></div>
          <div className={`${styles.waterDrop} ${styles.water6}`}></div>
          <div className={`${styles.waterDrop} ${styles.water7}`}></div>
          <div className={`${styles.waterDrop} ${styles.water8}`}></div>
        </div>
        
        <div className={styles.container} style={{ maxWidth: '900px' }}>
          <div className={styles.howGrid} style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fab fa-linkedin"></i></div>
              <h3>LinkedIn</h3>
              <p>
                Connect with us on LinkedIn for the quickest response and updates about new features.
              </p>
              <button className={styles.btnPrimary} style={{marginTop: '15px'}}>
                Visit LinkedIn
              </button>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-comments"></i></div>
              <h3>Share Feedback</h3>
              
              {submitStatus === 'success' ? (
                <div style={{
                  background: 'rgba(46, 204, 113, 0.1)',
                  border: '1px solid rgba(46, 204, 113, 0.3)',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '15px'
                }}>
                  <p style={{ 
                    color: '#27ae60', 
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <i className="fas fa-check-circle"></i>
                    Thank you! Your feedback has been received.
                  </p>
                </div>
              ) : submitStatus === 'error' ? (
                <div style={{
                  background: 'rgba(231, 76, 60, 0.1)',
                  border: '1px solid rgba(231, 76, 60, 0.3)',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '15px'
                }}>
                  <p style={{ 
                    color: '#c0392b', 
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <i className="fas fa-exclamation-circle"></i>
                    Something went wrong. Please try again.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
                <div style={{ marginBottom: '15px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '6px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '14px',
                      color: '#1f2937',
                      transition: 'all 0.3s',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6f7bf7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(226, 232, 240, 0.8)'}
                  />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <textarea
                    name="message"
                    placeholder="Your feedback or message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '12px 15px',
                      borderRadius: '6px',
                      border: '1px solid rgba(226, 232, 240, 0.8)',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '14px',
                      color: '#1f2937',
                      resize: 'vertical',
                      transition: 'all 0.3s',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6f7bf7'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(226, 232, 240, 0.8)'}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={styles.btnPrimary}
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
                      Sending...
                    </>
                  ) : 'Send Feedback'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.features}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water9}`}></div>
          <div className={`${styles.waterDrop} ${styles.water10}`}></div>
          <div className={`${styles.waterDrop} ${styles.water11}`}></div>
          <div className={`${styles.waterDrop} ${styles.water12}`}></div>
          <div className={`${styles.waterDrop} ${styles.water13}`}></div>
          <div className={`${styles.waterDrop} ${styles.water14}`}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.card} style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{textAlign: 'center', marginBottom: '30px'}}>
              Frequently Asked <span className={styles.gradientText}>Questions</span>
            </h2>
            
            <div style={{textAlign: 'left'}}>
              <div style={{marginBottom: '25px'}}>
                <h3 style={{color: '#6f7bf7', marginBottom: '8px'}}>
                  <i className="fas fa-question-circle" style={{marginRight: '10px'}}></i>
                  Is RequestSignals really free?
                </h3>
                <p style={{color: '#4b5563', lineHeight: '1.6'}}>
                  Yes, RequestSignals is completely free. We believe in providing direct access to real service requests without any charges.
                </p>
              </div>
              
              <div style={{marginBottom: '25px'}}>
                <h3 style={{color: '#6f7bf7', marginBottom: '8px'}}>
                  <i className="fas fa-question-circle" style={{marginRight: '10px'}}></i>
                  How often are leads updated?
                </h3>
                <p style={{color: '#4b5563', lineHeight: '1.6'}}>
                  Leads are refreshed every 2 hours from public activity across LinkedIn, Reddit, X, Facebook, and Instagram to ensure you get the most current opportunities.
                </p>
              </div>
              
              <div style={{marginBottom: '25px'}}>
                <h3 style={{color: '#6f7bf7', marginBottom: '8px'}}>
                  <i className="fas fa-question-circle" style={{marginRight: '10px'}}></i>
                  Can I suggest new features?
                </h3>
                <p style={{color: '#4b5563', lineHeight: '1.6'}}>
                  Absolutely! We welcome all feedback and feature requests. Use the feedback form above to share your ideas.
                </p>
              </div>
              
              <div>
                <h3 style={{color: '#6f7bf7', marginBottom: '8px'}}>
                  <i className="fas fa-question-circle" style={{marginRight: '10px'}}></i>
                  Is there an API available?
                </h3>
                <p style={{color: '#4b5563', lineHeight: '1.6'}}>
                  Currently, we're focused on the web platform. API access is planned for future development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}