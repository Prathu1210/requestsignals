import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <div className={styles.logo}>
          <Link href="/">RequestSignals</Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/blog">Blogs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/leads" className={styles.btnPrimary}>
            View Leads
          </Link>
        </nav>
      </div>
    </header>
  );
}