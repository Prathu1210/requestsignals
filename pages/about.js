import Head from "next/head";
import styles from "../styles/StaticPages.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>About RequestSignals</title>
        <meta
          name="description"
          content="About RequestSignals and how we track real-time service request signals."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <div className={styles.blogCard}>
          <h1>About RequestSignals</h1>

        <p>
          RequestSignals is a platform that tracks real-time service and project
          request signals shared by professionals across public platforms such as
          LinkedIn.
        </p>

        <p>
          We focus only on genuine requests where individuals or businesses are
          actively looking for services, expertise, or external support. Job
          postings, promotions, and unrelated content are excluded.
        </p>

        <p>
          All signals displayed on RequestSignals are collected from publicly
          available sources and curated manually to ensure relevance, accuracy,
          and quality.
        </p>

        <p>
          Our goal is to help agencies, freelancers, consultants, and service
          providers discover real demand faster and make informed outreach
          decisions.
        </p>
        </div>
      </div>
    </>
  );
}
