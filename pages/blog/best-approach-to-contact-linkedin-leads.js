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
        <title>Best Ways to Approach Project Leads From Social Media | RequestSignals</title>
        <meta
          name="description"
          content="Professional networking platforms, community-driven platforms, fast-moving short-form platforms, visual portfolio-first platforms, and group-based social platforms each demand a different first message. Learn platform-specific outreach strategies and message templates that get replies instead of blocks, downvotes, or bans."
        />
        <meta name="keywords" content="LinkedIn leads, Reddit leads, X leads, Facebook leads, Instagram leads, social media leads, freelance leads, project leads" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Best Ways to Approach Project Leads From Social Media" />
        <meta property="og:description" content="A platform-by-platform playbook for first-contact outreach across major social media platforms, with real message templates for each." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://requestsignals.com/blog/best-approach-to-contact-linkedin-leads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Ways to Approach Project Leads From Social Media" />
        <meta name="twitter:description" content="Platform-specific first-contact strategies for major social media platforms, with templates that get replies instead of bans." />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Ways to Approach Project Leads From Social Media",
            "description": "A platform-specific playbook for first-contact outreach across major social media platforms, including message templates and etiquette to avoid bans and rejections.",
            "image": "https://requestsignals.com/images/social-leads-approach-strategies.jpg",
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
              <i className="fas fa-first-order-alt"></i> First Contact Playbook
            </div>
            <h1 style={{ fontSize: '42px', lineHeight: '1.2' }}>
              Best Ways to Approach <span className={styles.gradientText}>Project Leads From Social Media</span>
            </h1>
            <p className={styles.subtitle} style={{ fontSize: '18px' }}>
              Major social media platforms each reward a different first move. Learn the platform-specific outreach approach that gets replies, not blocks, downvotes, or a ban.
            </p>

            <div className={styles.meta} style={{ marginTop: '25px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-layer-group" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>5 Platforms Covered</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-clock" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>11 min read</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-users" style={{ color: '#10b981' }}></i>
                <span style={{ fontSize: '14px', color: '#4b5563' }}>Freelancers &amp; Agencies</span>
              </div>
            </div>

            <div style={{ marginTop: '25px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span className={styles.tag}>Multi-Platform Outreach</span>
              <span className={styles.tag}>First Contact</span>
              <span className={styles.tag}>Community DMs</span>
              <span className={styles.tag}>Professional Messaging</span>
              <span className={styles.tag}>Visual Platform Outreach</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.postBackground}>
              <div className={`${styles.blurredPost} ${styles.postBg1}`}></div>
              <div className={`${styles.blurredPost} ${styles.postBg2}`}></div>

              <div className={`${styles.linkedinPost} ${styles.post1}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}><i className="fas fa-object-ungroup"></i></span>
                    <div className={styles.highlightText}>
                      <h4>One Playbook, Five Rulebooks</h4>
                      <p>Every platform has its own etiquette for that first message</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.linkedinPost} ${styles.post2}`}>
                <div className={styles.postContent}>
                  <div className={styles.contentHighlight}>
                    <span className={styles.highlightIcon} style={{ background: 'linear-gradient(135deg, #ef4444, #f87171)' }}><i className="fas fa-ban"></i></span>
                    <div className={styles.highlightText}>
                      <h4>Rule #1</h4>
                      <p>Cold-pitching in community-driven platforms or group-based social platforms can get you banned instantly</p>
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
                <strong>The exact message that lands a client on a professional networking platform will get your comment removed on a community-driven platform, ignored on a fast-moving, short-form platform, and reported in a group-based social platform.</strong> Now that leads on RequestSignals come from several major social media platforms, "how do I message this person" no longer has one answer. It has five — and picking the wrong one costs you the lead before a real conversation ever starts.
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
                    <i className="fas fa-globe"></i>
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>The Multi-Platform Outreach Reality</h4>
                    <p style={{ margin: '0', color: '#4b5563', fontSize: '15px', lineHeight: '1.6' }}>
                      Professional networking platforms are built for direct messaging — a personalized cold message is expected there. <strong>Community-driven platforms and group-based social platforms are communities first,</strong> and both routinely ban accounts that DM strangers without warming up publicly first. Fast-moving, short-form platforms reward speed and public visibility over private messages. Visual, portfolio-first platforms are visual-first, so a DM with a relevant example often works better than any amount of text. Your opening move has to match the room you're walking into.
                    </p>
                  </div>
                </div>
              </div>

              {/* Table of contents */}
              <div className={styles.card} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                marginBottom: '0'
              }}>
                <h4 style={{ margin: '0 0 15px 0', color: '#1f2937', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="fas fa-list" style={{ color: '#10b981' }}></i>
                  Jump to a Platform
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <a href="#why-platform-matters" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fas fa-angle-right" style={{ marginRight: '6px' }}></i>Why platform matters</a>
                  <a href="#linkedin" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fab fa-linkedin" style={{ marginRight: '6px' }}></i>Professional Networking</a>
                  <a href="#reddit" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fab fa-reddit-alien" style={{ marginRight: '6px' }}></i>Community-Driven</a>
                  <a href="#x-twitter" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fab fa-x-twitter" style={{ marginRight: '6px' }}></i>Fast-Moving, Short-Form</a>
                  <a href="#instagram" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fab fa-instagram" style={{ marginRight: '6px' }}></i>Visual, Portfolio-First</a>
                  <a href="#facebook" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fab fa-facebook" style={{ marginRight: '6px' }}></i>Group-Based</a>
                  <a href="#cheat-sheet" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fas fa-table" style={{ marginRight: '6px' }}></i>Platform cheat sheet</a>
                  <a href="#universal" style={{ color: '#065f46', fontSize: '14px', textDecoration: 'none' }}><i className="fas fa-infinity" style={{ marginRight: '6px' }}></i>What never changes</a>
                </div>
              </div>
            </div>

            {/* Section 1: Why platform matters */}
            <div id="why-platform-matters" style={{ marginBottom: '40px' }}>
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
                Why Does Your First-Contact Approach Need to Change by Platform?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                <strong>Because each platform has its own unwritten rules about solicitation, and breaking them costs you the lead before you ever get a reply.</strong> Professional networking platforms were built for professional networking, so a personalized direct message is normal and even welcomed. Community-driven platforms and most group-based social platforms are communities first — members (and moderator bots) treat unsolicited DMs from strangers as spam, and can ban your account for it. Fast-moving, short-form platforms move fast and reward public conversation over private pitches. Visual, portfolio-first platforms are a visual medium, so a DM that shows rather than tells often outperforms a written pitch.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                marginBottom: '0'
              }}>
                <h3 style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  color: '#1f2937'
                }}>
                  <i className="fas fa-question-circle" style={{ color: '#10b981', marginRight: '10px' }}></i>
                  Three Questions That Decide Your Opening Move
                </h3>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Is this platform built for professional networking or community discussion?</strong> Professional networking platforms expect a pitch. Community-driven platforms and group-based social platforms don't.</li>
                  <li><strong>Does the platform's culture treat an unsolicited DM as normal or as spam?</strong> On visual, portfolio-first platforms and professional networking platforms it's normal. On community-driven platforms and in most group-based social platforms, it's often against the rules.</li>
                  <li><strong>What's the visible, public step that has to happen before a private message is acceptable?</strong> A helpful comment, a public reply, or nothing at all — it depends entirely on where the lead posted.</li>
                </ul>
              </div>
            </div>

            {/* Section 2: Professional networking platforms */}
            <div id="linkedin" style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #0a66c2, #2e8fe0)',
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
                How Do You Approach a Lead on Professional Networking Platforms?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On professional networking platforms, you approach with a <strong>personalized connection request note or a direct message that references the lead's specific post</strong> — this is the one platform type in this list where a well-crafted cold message is expected and often welcomed, not treated as spam. The catch is that "well-crafted" is doing a lot of work in that sentence. Generic templates still get ignored.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(10, 102, 194, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                marginBottom: '30px',
                border: '1px solid rgba(10, 102, 194, 0.15)'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-clipboard-list" style={{ color: '#0a66c2' }}></i>
                  Before You Message
                </h4>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li>Read the actual post — reference the specific project, budget, or timeline they mentioned, not their job title.</li>
                  <li>If you're not connected, the connection note has a strict character limit — say one specific thing, not your whole pitch.</li>
                  <li><strong>Never attach a proposal, deck, or portfolio PDF in the first message.</strong> It reads as a mass-sent pitch even when it isn't.</li>
                  <li>Keep the message to 50–70 words. It should be readable in under 15 seconds on a phone.</li>
                </ul>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '20px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Doesn't Work</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    "Hi [Name], I help businesses like yours grow with [service]. Check out my portfolio and let me know if you'd like to hop on a call!"
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>No reference to their post. Could be sent to anyone. Reads as automated.</p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Works</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    "Hi [Name], saw your post about needing a [specific need] for [specific detail they mentioned]. I've done similar work for [relevant context] — happy to share how I'd approach it if useful, no strings attached."
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>References their exact ask. Offers value before asking for anything.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Community-driven platforms */}
            <div id="reddit" style={{ marginBottom: '40px' }}>
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
                How Do You Approach a Lead on Community-Driven Platforms Without Getting Banned?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On community-driven platforms, you <strong>never cold-DM someone who posted asking for help.</strong> You first leave a genuinely useful public comment on their thread, and only move to a DM if they respond positively, ask a follow-up, or explicitly invite it. Many communities have zero-tolerance "no solicitation" rules enforced by moderators and automod bots — a comment that reads as a pitch, or a DM sent to someone who never replied to you, can get your comment removed and your account banned from the community or shadowbanned platform-wide.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(255, 69, 0, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 69, 0, 0.15)',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-shield-alt" style={{ color: '#ff4500' }}></i>
                  The Community-First Sequence
                </h4>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Check the sidebar or pinned rules for a self-promotion policy</strong> before doing anything. Some communities ban it outright; others allow it only in designated threads.</li>
                  <li>Answer their actual question in the comment, in full — even if they never hire you, the comment should stand on its own as genuinely helpful.</li>
                  <li>If the rules allow it, mention that you do this professionally in one short, low-key line at the end — not the headline of the comment.</li>
                  <li>Only send a DM if they reply to you, upvote and engage, or the community explicitly allows offering services in comments.</li>
                  <li>An account with little reputation or history posting "DM me" gets auto-removed by many communities' spam filters — build some genuine comment history first.</li>
                </ul>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '20px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Doesn't Work</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Sent as an immediate DM) "Hey, saw your post looking for help with [X]. I can do that for $500, check my profile for examples!"
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Unsolicited DM from a stranger. Gets reported and can trigger a ban even if your work is legitimate.</p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Works</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Public comment) "One thing that trips people up with [their exact problem] is [specific, useful detail]. I'd start with [concrete suggestion]. Happy to go into more detail if it's helpful — I work on this kind of thing, but the above should get you unstuck either way."
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Public, useful, low-pressure. Lets them invite the DM instead of forcing it.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Fast-moving, short-form platforms */}
            <div id="x-twitter" style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #111827, #374151)',
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
                How Do You Approach a Lead on Fast-Moving, Short-Form Platforms?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On fast-moving, short-form platforms, you <strong>reply publicly with something genuinely useful first, then move the conversation to DMs</strong> once there's been an exchange or they open their DMs to you. A cold DM from a stranger with no prior interaction is frequently filtered straight into a "message requests" folder the person never checks. These platforms also move fast — a thread asking for recommendations is often stale within hours, so speed matters as much as quality.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(17, 24, 39, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(17, 24, 39, 0.12)',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-bolt" style={{ color: '#111827' }}></i>
                  Why Speed and Brevity Matter Here
                </h4>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li>Reply within the first few hours — threads on these platforms lose visibility fast, and a reply on a dead thread reads as spam trawling.</li>
                  <li>Keep the public reply short: one useful sentence beats a paragraph. Long replies get collapsed and skipped.</li>
                  <li>Don't pitch in the reply itself — add value, then let the DM (once opened) carry the actual offer.</li>
                  <li>A relevant public quote-share of their post with your own angle can outperform a reply if you have something substantive to add.</li>
                </ul>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '20px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Doesn't Work</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Cold DM, no prior interaction) "Hey! Saw you're looking for [service]. I do exactly that, here's my site: [link]. Let me know!"
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Lands in message requests, unread. No public trust built first.</p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Works</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Public reply) "One thing worth checking before you hire for this: [specific, useful tip]." Then, only if they reply or follow you: (DM) "Glad that helped — happy to talk through the [project] if you want a second opinion."
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Public value first earns the right to a DM. Short both times.</p>
                </div>
              </div>
            </div>

            {/* Section 5: Visual, portfolio-first platforms */}
            <div id="instagram" style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
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
                How Do You Approach a Lead on Visual, Portfolio-First Platforms?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                On visual, portfolio-first platforms, a <strong>direct DM is normal and expected — as long as it shows rather than tells.</strong> These platforms are visual-first, which makes them especially strong for design, photography, video, branding, and other creative-work leads. A DM that includes one relevant example or a portfolio link that matches what they're asking for consistently outperforms paragraphs of explanation.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(131, 58, 180, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(131, 58, 180, 0.15)',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-images" style={{ color: '#833ab4' }}></i>
                  Make It Visual
                </h4>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li>Check whether they posted from a business or creator account — it tells you how comfortable they already are with DMs from strangers.</li>
                  <li>Scan the comments on their post for extra clues about the exact look, style, or budget they want before you message.</li>
                  <li>Lead with one image or a single portfolio link that matches their specific ask — not a full grid dump or a generic "check my page."</li>
                  <li>Keep the written part of the DM to two or three sentences; let the visual do the convincing.</li>
                </ul>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '20px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Doesn't Work</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    "Hey! I'm a designer, I do logos, branding, social content, and more. Check out my page for my work and let me know if you need anything!"
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Text-only, generic, no visual, lists everything instead of matching their need.</p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Works</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    "Saw you're looking for [specific style] — this piece [attached image/link] is close to that direction. Happy to put together a couple of concepts around what you posted if useful."
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>One matching example, short text, specific to their request.</p>
                </div>
              </div>
            </div>

            {/* Section 6: Group-based social platforms */}
            <div id="facebook" style={{ marginBottom: '40px' }}>
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
                How Do You Approach a Lead in a Group on a Group-Based Social Platform?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                In a group on a group-based social platform, you <strong>respect the group's rules first.</strong> Many freelance, small-business, and local-community groups explicitly ban direct solicitation in the comments — some remove the post entirely, some remove you from the group. If the rules aren't clear, message the group admin and ask directly whether offering your services in a comment or a DM is allowed. When it is allowed, a genuine, helpful comment before you DM still outperforms jumping straight to a pitch.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(24, 119, 242, 0.05)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid rgba(24, 119, 242, 0.15)',
                marginBottom: '30px'
              }}>
                <h4 style={{
                  color: '#1f2937',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-gavel" style={{ color: '#1877f2' }}></i>
                  Check Before You Comment
                </h4>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li>Read the group's pinned rules post — many spell out exactly when self-promotion is and isn't allowed.</li>
                  <li>Some groups restrict offers of services to a designated weekly "promo thread" instead of regular posts.</li>
                  <li>If it's genuinely unclear, a short message to an admin asking permission takes thirty seconds and avoids a ban.</li>
                  <li>Where comments are allowed, answer the actual question first; treat the fact that you offer this as a service as a footnote, not the headline.</li>
                </ul>
              </div>

              <div className={styles.howGrid} style={{ marginBottom: '20px' }}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-times" style={{ color: '#ef4444' }}></i>
                  </div>
                  <h3>What Doesn't Work</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Comment on their post) "I offer this service! Message me for pricing 🙋"
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Reads as an ad. In rule-strict groups this gets deleted and can get you removed.</p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className="fas fa-check" style={{ color: '#10b981' }}></i>
                  </div>
                  <h3>What Works</h3>
                  <p style={{ fontSize: '14px', color: '#4b5563', fontStyle: 'italic', background: '#f9fafb', padding: '12px', borderRadius: '8px' }}>
                    (Comment) "For what it's worth, [specific useful suggestion related to their post]." Then, once the group's rules confirm it's fine: (DM) "Following up from the group — happy to share how I'd approach [their project] if that's still something you need help with."
                  </p>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '10px' }}>Rule-compliant, helpful first, low-pressure DM second.</p>
                </div>
              </div>
            </div>

            {/* Cheat Sheet */}
            <div id="cheat-sheet" style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-table" style={{ color: '#10b981' }}></i>
                What's the Fastest Way to Compare Outreach Rules Across All Five Platform Types?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Use this as a quick pre-flight check before you send anything. <strong>When in doubt, add a genuine public step before your first private message</strong> — it works everywhere, even on platforms where it isn't strictly required.
              </p>

              <div className={styles.card} style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(52, 211, 153, 0.05))',
                padding: '30px',
                borderRadius: '16px',
                border: '1px solid rgba(16, 185, 129, 0.15)'
              }}>
                <div style={{
                  display: 'grid',
                  gap: '20px'
                }}>
                  {[
                    { platform: "Professional Networking Platforms", icon: "fab fa-linkedin", color: "linear-gradient(135deg, #0a66c2, #2e8fe0)", firstMove: "Personalized connection note or direct message", avoid: "Attaching a proposal or portfolio in message one", bestFor: "Professional services, consulting, B2B" },
                    { platform: "Community-Driven Platforms", icon: "fab fa-reddit-alien", color: "linear-gradient(135deg, #ff4500, #ff6a33)", firstMove: "Genuinely helpful public comment on the thread", avoid: "DMing before they've responded to you", bestFor: "Niche technical or creative problems" },
                    { platform: "Fast-Moving, Short-Form Platforms", icon: "fab fa-x-twitter", color: "linear-gradient(135deg, #111827, #374151)", firstMove: "Short, valuable public reply, fast", avoid: "Cold DMs with no prior public interaction", bestFor: "Fast-moving, visible requests" },
                    { platform: "Visual, Portfolio-First Platforms", icon: "fab fa-instagram", color: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)", firstMove: "Direct DM with one matching visual example", avoid: "Text-only pitches with no visual proof", bestFor: "Design, photo, video, creative work" },
                    { platform: "Group-Based Social Platforms", icon: "fab fa-facebook", color: "linear-gradient(135deg, #1877f2, #42a5f5)", firstMove: "Check group rules, then comment or ask an admin", avoid: "Solicitation comments in rule-strict groups", bestFor: "Local services, small business, community-based work" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '20px',
                      padding: '15px',
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{
                        background: item.color,
                        color: 'white',
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        flexShrink: 0
                      }}>
                        <i className={item.icon}></i>
                      </div>
                      <div style={{ flex: 1, minWidth: '220px' }}>
                        <strong style={{ color: '#1f2937', fontSize: '15px' }}>{item.platform}</strong>
                        <p style={{ color: '#4b5563', margin: '5px 0 0 0', fontSize: '13px' }}><strong>First move:</strong> {item.firstMove}</p>
                        <p style={{ color: '#991b1b', margin: '4px 0 0 0', fontSize: '13px' }}><strong>Avoid:</strong> {item.avoid}</p>
                        <p style={{ color: '#065f46', margin: '4px 0 0 0', fontSize: '13px' }}><strong>Best for:</strong> {item.bestFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Universal principles */}
            <div id="universal" style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '20px',
                color: '#1f2937',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-infinity" style={{ color: '#10b981' }}></i>
                What Stays the Same No Matter Which Platform You Use?
              </h2>

              <p className={styles.subtitle} style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Underneath the platform-specific etiquette, the same handful of principles decide whether your first contact works anywhere you use it.
              </p>

              <div className={styles.card} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '25px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <ul style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.9', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Lead with value, not a pitch.</strong> Whether it's a comment, a reply, or a DM, the first thing the lead reads should help them, not sell to them.</li>
                  <li><strong>Reference the specifics of what they actually posted.</strong> A message that could be copy-pasted to anyone reads as a template everywhere, on every platform.</li>
                  <li><strong>Don't front-load attachments.</strong> A proposal, invoice, or full portfolio dump in the very first touch feels like pressure — the one exception is a single relevant image on visual, portfolio-first platforms, where visual proof is the point.</li>
                  <li><strong>Respond fast once you get a real signal.</strong> A reply, an upvote, an accepted connection, or an opened DM is a small window — momentum fades within a day or two on every platform.</li>
                  <li><strong>Track what worked, per platform.</strong> The comment-then-DM sequence that works on community-driven platforms looks nothing like the connection-note approach on professional networking platforms — keep notes so you're not re-learning the same lessons every time.</li>
                </ul>
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
                Key Takeaway
              </h3>
              <p className={styles.subtitle} style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#4b5563',
                textAlign: 'center',
                marginBottom: '0'
              }}>
                Mastering the <strong>best ways to approach project leads from social media</strong> means treating each platform as its own room with its own etiquette, not running one script everywhere. Professional networking platforms reward a confident direct message. Community-driven platforms and group-based social platforms reward patience and a public first step. Fast-moving, short-form platforms reward speed. Visual, portfolio-first platforms reward proof over promises.
                <br/><br/>
                Every platform gets you to the same destination — a real conversation with someone who needs your help — just through a different door. <strong>Match the door, and the conversation takes care of itself.</strong>
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
            Complete Your <span className={styles.gradientText}>Outreach Success System</span>
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
              <p>First contact is just the opener. Master the follow-up cadence that turns a quiet thread into a conversation.</p>
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
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Foundation
                </span>
              </div>
              <h3>How to Convert Social Media Project Leads into Paying Clients</h3>
              <p>The bigger picture behind first contact: a full framework for turning leads from any platform into signed work.</p>
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

            <a href="/blog/how-to-close-project-deals-from-linkedin" className={styles.card} style={{ textDecoration: 'none', display: 'block' }}>
              <div className={styles.cardIcon}>
                <i className="fas fa-file-contract"></i>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <span className={styles.step}>
                  Advanced
                </span>
              </div>
              <h3>How to Close Project Deals You Found on Social Media</h3>
              <p>From opening message to signed contract: master the complete deal-closing process across platforms.</p>
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
              Browse real, actively-posted leads from major social media platforms, refreshed every two hours, and put the right platform-specific opening move to work.
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
