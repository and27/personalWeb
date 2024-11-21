'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { usePathname } from 'next/navigation';

interface navLink {
  to: string;
  label: string;
}

type ILinks = Array<navLink>;

interface IFooterProps {
  menu: any;
  rights: string;
}

export default function Footer({ menu, rights }: IFooterProps) {
  const pathname = usePathname();
  const links: ILinks = menu;

  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footerMenu}>
          {links.map(({ to, label }) => (
            <li className={styles.footerMenuItem} key={label}>
              <Link
                href={to}
                className={`${styles.footerMenuLink} ${
                  to === pathname && styles.footerMenu__active
                }`}
                id={label}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footerCopy}>
        <p>{rights}</p>
      </div>
    </footer>
  );
}
