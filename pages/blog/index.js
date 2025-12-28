import Head from "next/head";
import styles from "../../styles/Blog.module.css";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>LinkedIn Project Leads – Conversion & Closing Guides</title>
        <meta
          name="description"
          content="Practical guides on converting LinkedIn project leads into paying clients. Learn outreach, follow-ups, and deal closing methods."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <main className={styles.blogCard}>
          <h1>LinkedIn Project Leads – Conversion Guides</h1>

          <p>
            Finding project requirements is only the first step. The real
            challenge is converting those opportunities into real conversations,
            proposals, and finally closed deals.
          </p>

          <p>
            This blog focuses on practical, experience-based methods that
            agencies and freelancers can use to approach leads, build trust,
            and close projects without sounding salesy.
          </p>

          <ul>
            <li>
              <a href="/blog/how-to-convert-linkedin-project-leads">
                How to Convert LinkedIn Project Leads into Clients
              </a>
            </li>
            <li>
              <a href="/blog/best-approach-to-contact-linkedin-leads">
                Best Ways to Approach LinkedIn Project Leads
              </a>
            </li>
            <li>
              <a href="/blog/how-to-close-project-deals-from-linkedin">
                How to Close Project Deals from LinkedIn
              </a>
            </li>
            <li>
              <a href="/blog/follow-up-strategies-for-linkedin-leads">
                Follow-Up Strategies That Actually Work
              </a>
            </li>
            <li>
              <a href="/blog/building-trust-before-closing-linkedin-clients">
                Building Trust Before Closing a Deal
              </a>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
