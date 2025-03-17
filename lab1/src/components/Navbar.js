// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.ul}>
        <li className={styles.li}><Link href="/home" className={styles.a}>Home</Link></li>
        <li className={styles.li}><Link href="/about" className={styles.a}>About Us</Link></li>
        <li className={styles.li}><Link href="/contact" className={styles.a}>Contact Us</Link></li>
        <li className={styles.li}><Link href="/login" className={styles.a}>Login</Link></li>
        <li className={styles.li}><Link href="/users" className={styles.a}>Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
