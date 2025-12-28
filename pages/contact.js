import Head from "next/head";
import styles from "../styles/StaticPages.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – RequestSignals</title>
        <meta
          name="description"
          content="Contact information for RequestSignals."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <div className={styles.blogCard}>
          <h1>Contact</h1>

          <p>
            If you have questions or feedback about RequestSignals, please reach
            out through our LinkedIn page or the communication channels shared on
            this website.
          </p>
        </div>
      </div>
    </>
  );
}
