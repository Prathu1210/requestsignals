import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Theme.module.css";

const FAQS = [
  {
    q: "What is RequestSignals?",
    a: "RequestSignals is a free tool that surfaces real-time posts from people publicly asking to hire a freelancer, consultant, or agency. We monitor LinkedIn, Reddit, X (Twitter), Facebook, and Instagram, then use AI to separate genuine hiring requests from job listings, advice threads, and self-promotion.",
  },
  {
    q: "Which platforms does RequestSignals monitor?",
    a: "LinkedIn, Reddit, X (Twitter), Facebook, and Instagram. We're not limited to one network — anywhere people publicly post that they're looking to hire help is fair game.",
  },
  {
    q: "How often is new data added?",
    a: "Every 2 hours, automatically, around the clock.",
  },
  {
    q: "How are leads verified?",
    a: "Every post is scored by an AI model trained to distinguish genuine hiring requests from job postings, advice-seeking discussions, service offers, and spam. Only high-confidence matches are published.",
  },
  {
    q: "Is RequestSignals free?",
    a: "Yes, completely free. No signup required to browse leads.",
  },
];

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);

    cards.forEach(card => {
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

      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });

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
        <title>RequestSignals — Real Service Requests from Social Media, AI-Filtered</title>
        <meta
          name="description"
          content="RequestSignals finds people actively looking to hire freelancers and agencies across LinkedIn, Reddit, X, Facebook, and Instagram — filtered by AI so you only see genuine requests, not job posts or noise. Free, updated every 2 hours."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Structured data for SEO/AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "RequestSignals",
            "url": "https://requestsignals.com",
            "description": "RequestSignals aggregates real-time service and hiring requests from LinkedIn, Reddit, X, Facebook, and Instagram, filtered by AI to remove job posts and noise.",
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}
        </script>
      </Head>

      <Header />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <h1>
              Find Clients Who Are <span className={styles.gradientText}>Already Looking For You</span>
            </h1>
            <p className={styles.subtitle}>
              We scan LinkedIn, Reddit, X, Facebook, and Instagram for people actively asking to hire a freelancer or agency — then use AI to filter out job posts, spam, and noise. What's left is real demand.
            </p>
            <p className={styles.meta}>
              <i className="fas fa-globe"></i> 5 Platforms
              <i className="fas fa-robot"></i> AI-Verified
              <i className="fas fa-bolt"></i> Updated Every 2 Hours
            </p>
            <a href="/leads" className={styles.btnPrimary} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', fontSize: 16, padding: '14px 32px', marginTop: 10 }}>
              <i className="fas fa-search"></i>
              Browse Live Leads
            </a>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg3}`}></div>

              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-globe"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Multi-Platform Coverage</h4>
                      <p>Real requests from across the social web, not just one network.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon}><i className="fas fa-robot"></i></span>
                    <div className={styles.highlightText}>
                      <h4>AI-Filtered</h4>
                      <p>Job posts, spam, and discussion threads are automatically rejected.</p>
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

      {/* WHAT IS REQUESTSIGNALS - direct answer for SEO/AEO */}
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
              What Is <span className={styles.gradientText}>RequestSignals</span>?
            </h2>

            <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px' }}>
              <strong>RequestSignals is a free tool that surfaces real-time posts from people publicly asking to hire a freelancer, consultant, or agency.</strong> We monitor public activity across LinkedIn, Reddit, X (Twitter), Facebook, and Instagram — not just one network — because genuine buying intent shows up everywhere people talk about their projects.
            </p>

            <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.7', marginBottom: '0' }}>
              Every post is scored by an AI model before it's published: job listings, recruiter posts, advice-seeking discussions ("how do I find a developer?"), and people offering their own services are all rejected. What makes it through is someone describing their own project and asking for help with it.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.features}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water9}`}></div>
          <div className={`${styles.waterDrop} ${styles.water10}`}></div>
          <div className={`${styles.waterDrop} ${styles.water11}`}></div>
          <div className={`${styles.waterDrop} ${styles.water12}`}></div>
        </div>

        <div className={styles.container}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', color: '#1f2937' }}>
            How It <span className={styles.gradientText}>Works</span>
          </h2>

          <div className={styles.howGrid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-search"></i></div>
              <h3>Scan</h3>
              <p>
                We continuously search public posts across five major platforms for people describing a project and asking for help with it.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-filter"></i></div>
              <h3>Filter</h3>
              <p>
                An AI model checks each post against strict criteria, rejecting job postings, recruiter spam, advice threads, and service offers.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}><i className="fas fa-paper-plane"></i></div>
              <h3>Deliver</h3>
              <p>
                Genuine requests are published with a direct link back to the original post, refreshed every 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL DIVIDER */}
      <div className={styles.minimalDivider}>
        <div className={styles.minimalLine}></div>
      </div>

      {/* FAQ - AEO-friendly direct Q&A */}
      <section className={styles.how}>
        <div className={styles.waterBg}>
          <div className={`${styles.waterDrop} ${styles.water5}`}></div>
          <div className={`${styles.waterDrop} ${styles.water6}`}></div>
          <div className={`${styles.waterDrop} ${styles.water7}`}></div>
          <div className={`${styles.waterDrop} ${styles.water8}`}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
              Frequently Asked <span className={styles.gradientText}>Questions</span>
            </h2>

            <div style={{ textAlign: 'left' }}>
              {FAQS.map((f, i) => (
                <div key={f.q} style={{ marginBottom: i === FAQS.length - 1 ? 0 : '25px' }}>
                  <h3 style={{ color: '#6f7bf7', marginBottom: '8px', fontSize: '17px' }}>
                    <i className="fas fa-question-circle" style={{ marginRight: '10px' }}></i>
                    {f.q}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: '1.6' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.features} style={{ paddingBottom: '80px' }}>
        <div className={styles.container}>
          <div className={styles.card} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '40px' }}>
            <div className={styles.cardIcon} style={{ marginBottom: '20px' }}>
              <i className="fas fa-rocket" style={{ fontSize: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '15px', color: '#1f2937' }}>
              Ready to Find Real Clients?
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.6', marginBottom: '25px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Start browsing genuine service requests from across LinkedIn, Reddit, X, Facebook, and Instagram today.
            </p>
            <a
              href="/leads"
              className={styles.btnPrimary}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', fontSize: '16px', padding: '14px 32px' }}
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
