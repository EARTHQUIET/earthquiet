import Link from 'next/link';
import { useEffect, useState } from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  const [isBanner, setIsBanner] = useState(null);

  useEffect(() => {
    setIsBanner(true);
  }, []);

  return (
    <footer className={styles.footer}>
      {isBanner && (
        <div className={styles.banner}>
          <span>We Support 🇺🇦</span>
          <a
            className={styles.bannerLink}
            target='_blank'
            href='https://supportukrainenow.org/'
            rel='noreferrer'
          >
            <span>supportukrainenow.org</span>
          </a>
        </div>
      )}

      <div className={styles.footerUpper}>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/cookies'>
                <a>Cookies</a>
              </Link>
            </li>
            <li>
              <Link href='/terms'>
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href='/privacy'>
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/contribution'>
                <a>Contribution</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerUpperItem}>
          <ul>
            <li>
              <Link href='/docs'>
                <a>Docs</a>
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <a>Team</a>
              </Link>
            </li>
            <li>
              <Link href='/donate'>
                <a>Donate</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLower}>
        <p className={styles.footerLowerCopy}>
          &copy;{new Date().getFullYear()} Earthquiet
        </p>
      </div>
    </footer>
  );
};

export default Footer;
