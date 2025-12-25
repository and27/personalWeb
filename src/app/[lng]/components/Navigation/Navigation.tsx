'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.scss';
import Logo from '../../../../../public/firma.png';
import MobileMenu from './MobileMenu';
import NavActions from '../NavActions/NavActions';

interface navLink {
  to: string;
  label: string;
  title: string;
}

export type ILinks = Array<navLink>;

export default function Navigation({ dict }: any) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';
  const host = typeof window !== 'undefined' ? window.location.hostname : null;

  const handleMobileToggle = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const handleMobileMenuSelected = () => {
    isMobileMenuActive && setTimeout(() => setIsMobileMenuActive(false), 300);
  };
  const links: ILinks = dict?.menu;
  const localizedLinks = links?.map(link => {
    const to = link.to || '';
    if (to.startsWith('http')) {
      return link;
    }
    if (currentLocale === 'en') {
      if (to === '/en' || to.startsWith('/en/')) {
        return link;
      }
      return { ...link, to: `/en${to.startsWith('/') ? '' : '/'}${to}` };
    }
    if (to === '/es' || to.startsWith('/es/')) {
      const normalized = to.replace(/^\/es(\/|$)/, '/');
      return { ...link, to: normalized === '/' ? '/' : normalized.replace(/\/$/, '') };
    }
    return link;
  });

  const homeHref = currentLocale === 'en' ? '/en' : '/';
  let navigationLogo;
  if (host === 'abstudio.com.co' || host === 'www.abstudio.com.co') {
    navigationLogo = (
      <Link href={homeHref} style={{ opacity: 0.8, display: 'flex', alignItems: 'center' }}>
        <p className={styles.logo}>abstudio</p>
      </Link>
    );
  } else {
    navigationLogo = (
      <Link href={homeHref} style={{ opacity: 0.8, display: 'flex', alignItems: 'center' }}>
        <Image
          src={Logo}
          alt="Home link personal logo"
          quality={100}
          width={175}
          height={42}
          sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
        />
      </Link>
    );
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {navigationLogo}
        <ul className={styles.navMenu}>
          {localizedLinks?.map(({ to, label }) => (
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
        {host !== 'abstudio.com.co' && <NavActions />}

        <MobileMenu
          isMobileMenuActive={isMobileMenuActive}
          handleMobileToggle={handleMobileToggle}
          handleMobileMenuSelected={handleMobileMenuSelected}
          links={localizedLinks}
        />
      </nav>
    </header>
  );
}
