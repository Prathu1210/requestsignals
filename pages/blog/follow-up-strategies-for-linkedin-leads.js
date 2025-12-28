import Head from "next/head";
import styles from "../../styles/Blog.module.css";

export default function Post() {
  return (
    <>
      <Head>
        <title>Follow-Up Strategies That Actually Work</title>
        <meta
          name="description"
          content="Effective follow-up strategies to convert LinkedIn project leads into clients."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <article className={styles.blogCard}>
          <h1>Follow-Up Strategies That Actually Work</h1>

          <p>
            Most deals are not lost because of rejection, but because of silence.
            A thoughtful follow-up can revive many stalled conversations.
          </p>

          <h2>Timing Matters</h2>
          <p>
            Following up too quickly can feel pushy, while waiting too long can
            make the lead go cold.
          </p>

          <h2>Add Value in Every Follow-Up</h2>
          <p>
            Sharing a small suggestion or insight shows continued interest and
            professionalism.
          </p>

          <p>
            Effective follow-ups feel like reminders, not pressure.
          </p>
        </article>
      </div>
    </>
  );
}
