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
        <title>Building Trust Before Closing a Deal | RequestSignals</title>
        <meta
          name="description"
          content="Learn how to build trust with a potential client before they hire you. Platform-specific trust signals for LinkedIn, Reddit, X, Instagram, and Facebook, plus universal techniques that increase close rates."
        />
        <meta name="keywords" content="building trust with clients, trust signals, LinkedIn recommendations, Reddit karma trust, X twitter credibility, Instagram portfolio trust, Facebook group reputation, client trust before hiring, credibility building, freelancer trust, agency trust building, social media leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Building Trust Before Closing a Deal" />
        <meta property="og:description" content="Platform-specific trust signals for LinkedIn, Reddit, X, Instagram, and Facebook, plus universal trust-building techniques that help freelancers and agencies close more deals." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/building-trust-before-closing-linkedin-clients" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Building Trust Before Closing a Deal" />
        <meta name="twitter:description" content="How to build trust with a lead before they hire you, with platform-specific signals for LinkedIn, Reddit, X, Instagram, and Facebook." />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Building Trust Before Closing a Deal",
            "description": "Learn how to build trust with a potential client before they hire you. Platform-specific trust signals for LinkedIn, Reddit, X, Instagram, and Facebook, plus universal trust-building techniques.",
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
            "datePublished": "2026-07-18",
            "dateModified": "2026-07-18",
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
              Master the trust signals that matter on LinkedIn, Reddit, X, Instagram, and Facebook, plus the universal techniques that turn a promising lead into a signed deal, no matter which platform it came from.
            </p>

            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-chart-line" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>60% Higher Close Rates</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>9 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-layer-group" style={{ color: '#f59e0b' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>5 Platforms, One Framework</span>
              </div>
            </div>

            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Trust Building</span>
              <span className={styles.tag}>Client Relationships</span>
              <span className={styles.tag}>Credibility</span>
              <span className={styles.tag}>Multi-Platform Outreach</span>
              <span className={styles.tag}>Deal Preparation</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg3}`}></div>

              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}><i className="fas fa-shield-alt"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Trust Factor</h4>
                      <p>#1 factor in closing deals, on every platform</p>
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
                      <p>Trust signals differ by platform: profile vs. karma vs. portfolio</p>
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

            {/* Table of contents */}
            <div style={{ marginBottom: '40px' }}>
              <div className={styles.card} style={{
                background: 'rgba(245, 158, 11, 0.05)',
                padding: '22px 25px',
                borderRadius: '12px',
                border: '1px solid rgba(245, 158, 11, 0.15)'
              }}>
                <h4 style={{ margin: '0 0 12px 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-list" style={{ color: '#f59e0b' }}></i>
                  What You'll Learn
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '1.9' }}>
                  <li>How to build trust before a client hires you, on any platform</li>
                  <li>The specific trust signals that matter on LinkedIn, Reddit, X, Instagram, and Facebook</li>
                  <li>Universal trust-builders that work no matter where the lead came from</li>
                  <li>How to talk about pricing and process without scaring off a lead</li>
                  <li>How to share past work without sounding boastful</li>
                  <li>The trust-building timeline from first contact to signed deal</li>
                </ul>
              </div>
            </div>

            {/* Introduction */}
            <div style={{ marginBottom: '40px' }}>
              <p className={styles.subtitle} style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151',
                marginBottom: '20px'
              }}>
                <strong>Trust decides more deals than price does, yet it's the part most freelancers and agencies neglect.</strong> According to Edelman's Trust Barometer, 81% of buyers say trust is a deal-breaker or deciding factor before they hire someone. Without trust, even the best proposal, the lowest price, or the most impressive portfolio can fail to close.
              </p>
              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                That was true when freelance outreach happened almost entirely on LinkedIn. It's just as true now that genuine hiring signals show up in Reddit threads, X posts, Instagram DMs, and Facebook groups too. <strong>The platform changes, but the psychology of trust doesn't.</strong> What changes is the proof a stranger needs to see before they'll hand you money and access to their business.
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
                      Companies with high trust levels experience <strong>2.5x higher revenue growth</strong> and <strong>90% higher retention</strong>. For freelancers and agencies working leads from LinkedIn, Reddit, X, Instagram, or Facebook, high trust translates to <strong>60% higher close rates, 40% larger deal sizes, and 75% higher client retention</strong>, regardless of which platform the lead was found on.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 1: Overview question */}
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
                How Do You Build Trust With a Client Before They've Hired You?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                You build trust before you're hired by proving three things quickly: you understand their problem, you've solved something like it before, and you communicate like someone who follows through. <strong>The proof you need to show depends on the platform the lead is on</strong>, because each platform has its own built-in credibility markers that people already trust.
              </p>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                A recommendation carries weight on LinkedIn. A karma score and post history carry weight on Reddit. A portfolio grid carries weight on Instagram. None of these signals transfer directly to another platform, which is why the same trust-building instinct needs to be applied differently depending on where you found the lead.
              </p>

              <div className={styles.howGrid} style={{ marginBottom: '10px' }}>
                {[
                  {
                    icon: 'fab fa-linkedin',
                    title: 'LinkedIn',
                    description: 'Trust comes from your professional identity',
                    build: 'Complete profile, recommendations, shared connections, posted work history'
                  },
                  {
                    icon: 'fab fa-reddit-alien',
                    title: 'Reddit',
                    description: 'Trust comes from your community reputation',
                    build: 'Comment/post history, karma in relevant subreddits, being a known helpful presence'
                  },
                  {
                    icon: 'fab fa-x-twitter',
                    title: 'X (Twitter)',
                    description: 'Trust comes from your public track record',
                    build: 'Threads and posts showing expertise, replies from recognizable accounts'
                  },
                  {
                    icon: 'fab fa-instagram',
                    title: 'Instagram',
                    description: 'Trust comes from visible proof of work',
                    build: 'Portfolio grid, before-and-after posts, client tags, testimonial highlights'
                  },
                  {
                    icon: 'fab fa-facebook',
                    title: 'Facebook',
                    description: 'Trust comes from group standing',
                    build: 'Active, helpful presence in business groups, Page reviews and ratings'
                  }
                ].map((platform, index) => (
                  <div key={index} className={styles.card} style={{ height: '100%' }}>
                    <div className={styles.cardIcon}>
                      <i className={platform.icon}></i>
                    </div>
                    <h3>{platform.title}</h3>
                    <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '15px' }}>{platform.description}</p>
                    <div style={{
                      background: 'rgba(245, 158, 11, 0.05)',
                      padding: '12px',
                      borderRadius: '8px'
                    }}>
                      <strong style={{ color: '#92400e', fontSize: '12px', display: 'block', marginBottom: '5px' }}>Main Trust Signal:</strong>
                      <p style={{ color: '#4b5563', fontSize: '12px', margin: '0' }}>{platform.build}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: LinkedIn */}
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
                  background: 'linear-gradient(135deg, #0a66c2, #378fe9)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="fab fa-linkedin"></i>
                </span>
                What Builds Trust on LinkedIn Before Someone Hires You?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On LinkedIn, trust is built through a <strong>complete, verifiable professional identity</strong>. Before a lead replies to your message, they will almost always click your name first. What they find there either confirms you're legitimate or raises doubts.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(10, 102, 194, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '2' }}>
                  <li><strong>A complete profile:</strong> a real photo, a headline that states who you help and how, and an About section written for clients, not recruiters.</li>
                  <li><strong>Recommendations and endorsements:</strong> two or three specific, recent recommendations outweigh a hundred generic skill endorsements.</li>
                  <li><strong>Shared connections:</strong> mutual connections act as informal references, even if the lead never asks them a single question.</li>
                  <li><strong>Posted work history:</strong> Featured section links, case study posts, or a Creator mode feed that shows you actually do the work you're pitching.</li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#4b5563'
              }}>
                None of this needs to be perfect. It needs to be <strong>consistent with the pitch you're about to send</strong>. A lead who posts "looking for a Shopify developer" and then finds a profile with three recommendations from Shopify store owners has already decided you're worth a reply, before you've written a word.
              </p>
            </div>

            {/* Section 3: Reddit */}
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
                  background: 'linear-gradient(135deg, #ff4500, #ff6a33)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="fab fa-reddit-alien"></i>
                </span>
                Why Does Your Reddit Comment History Matter More Than Your Pitch?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On Reddit, <strong>your comment and post history is your resume</strong>, and it gets checked before your pitch does. Redditors are famously allergic to sales pitches, so the moment someone shows interest in hiring, the community's instinct is to click your profile and scroll. A thin history with no karma in relevant subreddits reads as a burner account built to spam DMs, no matter how good your reply sounds.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(255, 69, 0, 0.05)',
                borderLeft: '4px solid #ff4500',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h4 style={{ color: '#9a3412', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-lightbulb"></i>
                  What Actually Builds Reddit Trust
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '2' }}>
                  <li><strong>Karma earned in the relevant subreddit</strong>, not just site-wide karma from unrelated communities.</li>
                  <li><strong>A history of genuinely helpful comments</strong>, answering questions before you ever needed anything from that community.</li>
                  <li><strong>Being a known, recognizable presence</strong> — the person other members already tag in threads when a question like this comes up.</li>
                  <li><strong>No pattern of drive-by self-promotion</strong> that trips the community's spam radar.</li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#4b5563'
              }}>
                In practice, this means the trust-building work happens <strong>before</strong> a lead ever posts. Being a known, helpful presence in a subreddit builds more trust than any pitch ever could, because it's evidence gathered independently of anything you're trying to sell. If you're new to a subreddit, spend a few weeks answering questions with no ask attached before you reply to hiring threads there.
              </p>
            </div>

            {/* Section 4: X/Twitter */}
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
                  background: 'linear-gradient(135deg, #000000, #333333)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="fab fa-x-twitter"></i>
                </span>
                How Does a Public X (Twitter) Track Record Build Credibility?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On X, trust is built through a <strong>visible, timestamped track record</strong> of public thinking. Anyone can write a bio that says "10 years of growth marketing." Far fewer people have 10 years of posts and threads that actually demonstrate it. Leads scroll your timeline the same way they'd check references, except the references are self-authored and impossible to fake convincingly over time.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(0,0,0,0.03)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '2' }}>
                  <li><strong>Threads that teach something specific</strong> in your field, not generic motivational posts.</li>
                  <li><strong>Replies and quote-tweets from recognizable accounts</strong> in your niche, which act as informal social proof.</li>
                  <li><strong>Consistency over time</strong> — a feed that's been talking about the same subject for months reads very differently than one that started three days ago.</li>
                  <li><strong>Engagement quality over follower count</strong> — a smaller account with substantive replies often reads as more trustworthy than a large, quiet one.</li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#4b5563'
              }}>
                If your X presence is thin, don't try to fake a track record overnight. Instead, lean harder on the other universal trust signals below, and use your reply to point to two or three real examples of work rather than the profile itself.
              </p>
            </div>

            {/* Section 5: Instagram */}
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
                  background: 'linear-gradient(135deg, #d62976, #fa7e1e)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="fab fa-instagram"></i>
                </span>
                Why Is Your Instagram Portfolio Grid Itself a Trust Signal?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On Instagram, the <strong>portfolio grid does the persuading before you say a word</strong>. For visual and creative work, photography, design, renovation, tattooing, fitness coaching, makeup artistry, the grid is not marketing decoration, it's the proof of work itself. A lead who visits your profile is running an instant credibility check by scrolling nine to twelve tiles.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(214, 41, 118, 0.05)',
                borderLeft: '4px solid #d62976',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <h4 style={{ color: '#9d174d', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-lightbulb"></i>
                  What Turns a Grid Into a Trust Signal
                </h4>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '2' }}>
                  <li><strong>Before-and-after posts</strong> that make the value of your work undeniable in a single glance.</li>
                  <li><strong>Client tags and mentions</strong>, which act as a public, checkable stamp of approval from the actual person you worked with.</li>
                  <li><strong>Saved highlights of testimonials</strong>, DMs, and reviews pinned above the grid, where a new visitor sees them in the first five seconds.</li>
                  <li><strong>Consistent quality across the grid</strong>, not just one great post surrounded by weaker filler.</li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#4b5563'
              }}>
                If you're reaching out from a comment or DM, don't just say you do great work, say "check the before-and-after in my third post" and point them straight there. On Instagram, showing beats telling every time.
              </p>
            </div>

            {/* Section 6: Facebook */}
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
                  background: 'linear-gradient(135deg, #1877f2, #42a5f5)',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px'
                }}>
                  <i className="fab fa-facebook"></i>
                </span>
                How Does Facebook Group Reputation Build Trust With Leads?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On Facebook, the strongest trust signal is <strong>reputation inside the group where the lead posted</strong>. Business, local, and freelancer Facebook groups are small enough that regular, helpful members are recognized by name. If you're already known as someone who answers questions well in that group, a hiring post from a fellow member is closer to a warm referral than a cold pitch.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(24, 119, 242, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#4b5563', fontSize: '14px', lineHeight: '2' }}>
                  <li><strong>Being an active, helpful member</strong> of the relevant business or freelancer groups, not just an outreach target list.</li>
                  <li><strong>Reviews and ratings on your Facebook Page</strong>, if you have one, since these display publicly and can't be edited by you after the fact.</li>
                  <li><strong>Comment history on other members' posts</strong> in the group, which shows the same pattern of genuine helpfulness Reddit rewards.</li>
                  <li><strong>Group admin or moderator status</strong>, when applicable, which acts as a strong implicit vouch for your standing.</li>
                </ul>
              </div>

              <p className={styles.subtitle} style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#4b5563'
              }}>
                If you spot a hiring post in a group you just joined, resist replying immediately with a pitch. Comment helpfully on a few other threads first, so your name has some context by the time you do reach out.
              </p>
            </div>

            {/* Section 7: Universal trust signals */}
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
                What Trust Signals Work No Matter Which Platform the Lead Came From?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Underneath every platform-specific signal, the same four behaviors build trust with anyone, regardless of where you found them. Think of the platform signals above as the door-opener, and these as what actually keeps trust growing once the conversation starts.
              </p>

              <div className={styles.howGrid} style={{ marginBottom: '10px' }}>
                {[
                  {
                    icon: 'fas fa-tags',
                    title: 'Transparent Pricing & Process',
                    description: 'Say what things cost and how you work, before they have to ask twice.'
                  },
                  {
                    icon: 'fas fa-comments',
                    title: 'Quick, Clear Communication',
                    description: 'Respond promptly and in plain language, with no vague, evasive answers.'
                  },
                  {
                    icon: 'fas fa-briefcase',
                    title: 'Relevant Past Work',
                    description: 'Show two or three examples close to their exact situation, not a generic portfolio dump.'
                  },
                  {
                    icon: 'fas fa-balance-scale',
                    title: 'Honest Scoping',
                    description: 'Say no to work you can\'t do well instead of overpromising to win the deal.'
                  }
                ].map((item, index) => (
                  <div key={index} className={styles.card} style={{ height: '100%' }}>
                    <div className={styles.cardIcon}>
                      <i className={item.icon}></i>
                    </div>
                    <h3>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#4b5563' }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 8: Pricing/process transparency */}
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
                How Do You Talk About Pricing and Process Without Scaring Off a Lead?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Clients trust honesty more than they trust perfection.</strong> Over-promising damages long-term credibility on every platform, while strategic transparency builds immediate trust. This matters even more on public platforms like Reddit and X, where vague or hypey answers get called out in the replies for everyone to see.
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
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <i className="fas fa-check" style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }}></i>
                    <div>
                      <strong style={{ color: '#1f2937', fontSize: '14px' }}>State Pricing Early:</strong>
                      <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '14px' }}>"Projects like this usually run [realistic range]. We can narrow that down once we understand [specific detail]."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Sharing experience */}
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
                  4
                </span>
                How Do You Share Past Work Without Sounding Boastful?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Talking about similar problems you've solved reassures a lead without sounding like a pitch. The psychology is simple: <strong>people trust those who have successfully navigated similar challenges before.</strong> But there's an art to sharing experience that builds trust rather than reading as self-promotion, especially on platforms like Reddit and X where self-promotion gets punished.
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

            {/* The Trust Building Timeline */}
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
                What Does the Trust-Building Timeline Look Like, From First Contact to Signed Deal?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Trust builds in predictable stages regardless of the platform. The first touch might be a LinkedIn comment, a Reddit reply, an X quote-tweet, an Instagram DM, or a Facebook group comment, but every lead moves through the same five phases on the way to becoming a client.
              </p>

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
                      actions: "Reply to their exact post with a specific insight, whether that's a LinkedIn comment, a Reddit reply, a quote-tweet on X, an Instagram DM, or a comment in a Facebook group. Ask a thoughtful question that shows you read the post.",
                      trustBuilt: "5-10% - They see you as knowledgeable"
                    },
                    {
                      phase: "First Conversation (Day 1-3)",
                      trustGoal: "Build care & integrity",
                      actions: "Move to DMs or email, listen more than you talk, ask about their goals and constraints, and be upfront about what you can and can't do.",
                      trustBuilt: "20-30% - They feel understood and safe"
                    },
                    {
                      phase: "Follow-Up (Day 3-7)",
                      trustGoal: "Demonstrate reliability",
                      actions: "Follow up with something of value, a relevant example, a quick answer to their question, and meet every small commitment you make, on time.",
                      trustBuilt: "40-50% - They see you as dependable"
                    },
                    {
                      phase: "Proposal Phase (Day 7-14)",
                      trustGoal: "Solidify all trust pillars",
                      actions: "Send a clear, honest proposal with real pricing, discuss likely challenges upfront, and point back to the platform-specific proof, recommendations, portfolio, or track record, that supports it.",
                      trustBuilt: "60-70% - They're confident in your abilities"
                    },
                    {
                      phase: "Pre-Close (Day 14-21)",
                      trustGoal: "Final trust validation",
                      actions: "Answer every remaining question thoroughly, offer references or additional examples if asked, and be patient with however long their decision takes.",
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

            {/* Key Takeaway / Conclusion */}
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
                Key Takeaway
              </h3>
              <p className={styles.subtitle} style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                <strong>Trust grows when a lead feels safe, understood, and respected, and the specific proof that makes them feel that way depends on the platform.</strong> On LinkedIn, that proof is your professional profile and recommendations. On Reddit, it's your comment history and karma. On X, it's your public track record. On Instagram, it's your portfolio grid. On Facebook, it's your group reputation.
                <br/><br/>
                Underneath all five, the same universal habits, transparent pricing, quick communication, relevant proof of work, and honest scoping, do the rest of the work. <strong>People don't buy from companies; they buy from people they trust.</strong> Learn what trust looks like on the platform your lead came from, and you'll close more of the deals that matter.
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
              <h3>How to Close Project Deals You Found on Social Media</h3>
              <p>Master the art of closing deals after building trust. From proposal to signed contract, across every platform.</p>
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
              <p>Professional follow-up techniques that build trust through consistent communication, on any platform.</p>
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
              <h3>How to Convert Social Media Project Leads into Paying Clients</h3>
              <p>The complete conversion process from initial contact to trust building to closing, across LinkedIn, Reddit, X, Facebook, and Instagram.</p>
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
              Apply these trust-building strategies with real project leads actively looking for services across LinkedIn, Reddit, X, Facebook, and Instagram.
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
