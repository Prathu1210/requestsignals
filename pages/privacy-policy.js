import Head from "next/head";
import styles from "../styles/StaticPages.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – RequestSignals</title>
        <meta
          name="description"
          content="Privacy policy of RequestSignals explaining data usage and analytics tracking."
        />
      </Head>

      <div className={styles.blogWrapper}>
        <div className={styles.blogCard}>
          <h1>Privacy Policy</h1>

          <p>
            RequestSignals respects your privacy. We do not collect personally
            identifiable information from visitors.
          </p>

          <p>
            We use Google Analytics (GA4) to understand website traffic and
            usage patterns. Google Analytics may use cookies to collect anonymous
            usage data such as pages visited and time spent on the site.
          </p>

          <p>
            We do not sell, trade, or share user data with third parties.
          </p>

          <p>
            By using this website, you consent to this privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}
