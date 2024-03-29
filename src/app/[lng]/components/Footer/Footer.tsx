'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { usePathname } from 'next/navigation';

interface navLink {
  to: string;
  label: string;
}

type ILinks = Array<navLink>;

const links: ILinks = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/blog',
    label: 'Blog'
  },
  {
    to: '/contact',
    label: 'Contact'
  }
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footerMenu}>
          {links.map(({ to, label }) => (
            <li className={styles.footerMenuItem} key={label}>
              <Link
                href={to}
                className={`${styles.footerMenuLink} ${to === pathname && styles.footerMenu__active}`}
                id={label}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footerCopy}>
        <p>© 2021-2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
