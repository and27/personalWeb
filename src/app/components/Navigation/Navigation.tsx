'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.scss';

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
    to: '#contact',
    label: 'Contact'
  }
];

export default function Navigation() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/">
          <Image
            src="/firma.png"
            alt="Home link personal logo"
            quality={100}
            width={200}
            height={48}
            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
          />
        </Link>
        <ul className={styles.navigation__menu}>
          {links.map(({ to, label }) => (
            <li id={label} className={styles.menu__item}>
              <Link href={to} className={styles.menu__link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`${styles.navigation__mobile_menu_container} ${
            isMobileMenuActive && styles.active
          }`}
        >
          <button
            className={`${styles.navigation__mobile_menu_trigger} 
          ${isMobileMenuActive && styles.active}`}
            onClick={handleMobileToggle}
            aria-controls="navigation__mobile-menu"
            aria-expanded={isMobileMenuActive}
            aria-label="Toggle mobile menu"
            aria-haspopup="true"
          >
            {isMobileMenuActive ? '' : '☰'}
          </button>
          <ul
            id="navigation__mobile-menu"
            hidden={!isMobileMenuActive}
            className={`${styles.navigation__mobile_menu} ${
              isMobileMenuActive && styles.navigation__mobile_menu_active
            }`}
          >
            {links.map(({ to, label }) => (
              <li id={label} className={styles.menu__item}>
                <Link href={to} className={styles.menu__link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
