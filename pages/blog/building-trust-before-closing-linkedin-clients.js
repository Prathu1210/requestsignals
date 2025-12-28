import Head from "next/head";
import styles from "../../styles/Blog.module.css";

export default function Post() {
  return (
    <>
      <Head>
        <title>Building Trust Before Closing a Deal</title>
        <meta
          name="description"
          content="Learn how to build trust with LinkedIn leads before closing a project deal."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <article className={styles.blogCard}>
          <h1>Building Trust Before Closing a Deal</h1>

          <p>
            Trust is the most important factor in closing deals. Without trust,
            even the best proposal can fail.
          </p>

          <h2>Be Transparent About Capabilities</h2>
          <p>
            Clients appreciate honesty. Over-promising damages long-term
            credibility.
          </p>

          <h2>Share Relevant Experience</h2>
          <p>
            Talking about similar problems you’ve solved reassures the client
            without sounding boastful.
          </p>

          <p>
            Trust grows when clients feel safe, understood, and respected.
          </p>
        </article>
      </div>
    </>
  );
}
