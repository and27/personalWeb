'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';
import Logo from '../../../../../public/firma.png';
import MobileMenu from './MobileMenu';

interface navLink {
  to: string;
  label: string;
  title: string;
}

export type ILinks = Array<navLink>;

export default function Navigation({ dict }: any) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const pathname = usePathname();

  const handleMobileToggle = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleMobileMenuSelected = () => {
    isMobileMenuActive && setTimeout(() => setIsMobileMenuActive(false), 300);
  };

  const links: ILinks = dict?.menu;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Home link personal logo"
            quality={100}
            width={200}
            height={48}
            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
          />
        </Link>
        <ul className={styles.navMenu}>
          {links?.map(({ to, label }) => (
            <li id={label} className={styles.navMenuItem} key={label}>
              <Link
                href={to}
                className={`${styles.navMenuLink} ${to === pathname && styles.menu__active}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <MobileMenu
          isMobileMenuActive={isMobileMenuActive}
          handleMobileToggle={handleMobileToggle}
          handleMobileMenuSelected={handleMobileMenuSelected}
          links={links}
        />
      </nav>
    </header>
  );
}
