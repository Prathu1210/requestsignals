import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerInner}`}>
        <span>© 2025 RequestSignals</span>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}