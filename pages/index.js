import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Theme.module.css';
import Link from 'next/link';


<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RequestSignals",
    "url": "https://requestsignals.com",
    "logo": "https://requestsignals.com/logo.png",
    "description": "LinkedIn Project Leads Platform connecting agencies with quality clients",
    "sameAs": [
      "https://linkedin.com/company/requestsignals",
      "https://twitter.com/requestsignals"
    ]
  }
`}
</script>


export default function Home() {
  useEffect(() => {
    // Interactive card effects
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
    
    // LinkedIn post hover effects
    const linkedinPosts = document.querySelectorAll(`.${styles.linkedinPost}`);
    
    linkedinPosts.forEach(post => {
      post.addEventListener('mouseenter', function() {
        const currentAnimation = this.style.animation;
        this.style.animation = 'none';
        this.dataset.originalAnimation = currentAnimation;
      });
      
      post.addEventListener('mouseleave', function() {
        this.style.animation = this.dataset.originalAnimation;
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

  return (
    <>
      <Head>
        <title>RequestSignals – Real LinkedIn Service Requests</title>
        <meta name="description" content="Find real LinkedIn service requests directly from LinkedIn." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <Header />
      
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Real <span className={styles.gradientText}>LinkedIn Service Requests</span>
            </h1>
            <p className={styles.subtitle}>
              Discover people who are actively searching for freelancers and agencies.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-check-circle"></i> 100% Free 
              <i className="fas fa-bolt"></i> Direct Outreach 
              <i className="fas fa-chart-line"></i> Real Demand
            </p>
            <Link href="/leads" className={styles.btnPrimary}>
              View Leads
            </Link>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              {/* Blurred LinkedIn posts in background */}
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg3}`}></div>
              
              {/* Foreground clear LinkedIn posts */}
              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-search"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Looking for freelance web developer</h4>
                      <p>Need help redesigning company website. React & Node.js experience required.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#webdevelopment</span>
                        <span className={styles.tag}>#freelancer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-bullhorn"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Need social media agency</h4>
                      <p>Looking for creative content strategies for LinkedIn and Twitter accounts.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#agency</span>
                        <span className={styles.tag}>#socialmedia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${styles.linkedinPost} ${styles.post3}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-palette"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Seeking UI/UX designer</h4>
                      <p>Mobile app redesign project. Must have Figma expertise and portfolio.</p>
                      <div className={styles.postTags}>
                        <span className={styles.tag}>#uiux</span>
                        <span className={styles.tag}>#designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDUCED SPACE MINIMAL DIVIDER */}
      <div className={styles.minimalDivider}>
        <div className={styles.minimalLine}></div>
      </div>

      {/* HOW IT WORKS SECTION */}
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
        
        <div className={`${styles.container} ${styles.howGrid}`}>
          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-search"></i></div>
            <h3>Demand Detection</h3>
            <p>
              We detect public LinkedIn posts where users openly ask
              for services or recommendations.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-filter"></i></div>
            <h3>Noise Filtering</h3>
            <p>
              Job posts and hiring noise are removed.
              Only genuine service requests remain.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-paper-plane"></i></div>
            <h3>Direct Outreach</h3>
            <p>
              Each lead links to the original post,
              allowing direct LinkedIn contact.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Reduced space */}
      <section className={styles.features}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water9}`}></div>
          <div className={`${styles.waterDrop} ${styles.water10}`}></div>
          <div className={`${styles.waterDrop} ${styles.water11}`}></div>
          <div className={`${styles.waterDrop} ${styles.water12}`}></div>
          <div className={`${styles.waterDrop} ${styles.water13}`}></div>
          <div className={`${styles.waterDrop} ${styles.water14}`}></div>
        </div>
        
        <div className={`${styles.container} ${styles.featuresGrid}`}>
          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-sync-alt"></i></div>
            <h3>Real-Time Updates</h3>
            <p>
              Leads are refreshed daily from public LinkedIn activity.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-user-friends"></i></div>
            <h3>No Middlemen</h3>
            <p>
              No platforms or bidding systems.
              You talk directly to requesters.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}><i className="fas fa-rocket"></i></div>
            <h3>Built for Speed</h3>
            <p>
              Save hours of manual searching
              and focus only on high-intent leads.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}