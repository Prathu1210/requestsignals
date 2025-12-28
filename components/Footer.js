import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} RequestSignals</p>

        <nav className={styles.nav}>
          <Link href="/about">About</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
