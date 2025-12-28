import Head from "next/head";
import styles from "../styles/StaticPages.module.css";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms and Conditions – RequestSignals</title>
        <meta
          name="description"
          content="Terms and conditions for using RequestSignals."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <div className={styles.blogCard}>
          <h1>Terms and Conditions</h1>

          <p>
            RequestSignals provides information based on publicly available data.
            We do not guarantee the accuracy, completeness, or availability of
            any information displayed.
          </p>

          <p>
            Users are responsible for how they use the information provided on
            this website.
          </p>

          <p>
            RequestSignals is not affiliated with LinkedIn or any third-party
            platforms referenced.
          </p>

          <p>
            By accessing this website, you agree to these terms and conditions.
          </p>
        </div>
      </div>
    </>
  );
}
