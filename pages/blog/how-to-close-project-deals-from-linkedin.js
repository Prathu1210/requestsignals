import Head from "next/head";
import styles from "../../styles/Blog.module.css";

export default function Post() {
  return (
    <>
      <Head>
        <title>How to Close Project Deals from LinkedIn</title>
        <meta
          name="description"
          content="Learn how agencies and freelancers successfully close project deals from LinkedIn leads."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <article className={styles.blogCard}>
          <h1>How to Close Project Deals from LinkedIn</h1>

          <p>
            Closing a deal is less about persuasion and more about alignment.
            Clients say yes when they feel understood and confident.
          </p>

          <h2>Clarify Scope Before Pricing</h2>
          <p>
            Many deals fail because expectations are unclear. Asking detailed
            questions before sharing numbers builds trust.
          </p>

          <h2>Explain the Process, Not Just the Cost</h2>
          <p>
            Clients are more comfortable when they understand how the work will
            be delivered and what milestones to expect.
          </p>

          <h2>Don’t Rush the Decision</h2>
          <p>
            Allow the client time to think. Follow up politely instead of
            pressuring for a quick answer.
          </p>
        </article>
      </div>
    </>
  );
}
