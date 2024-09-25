'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './NavActions.module.scss';

const NavActions = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('EN');
  const router = useRouter();
  const pathname = usePathname();
  const previousLanguage = useRef(language);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language') || 'EN';
      if (storedLanguage !== language) {
        setLanguage(storedLanguage);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'ES' : 'EN';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentLocale = pathname.startsWith('/es') ? 'ES' : 'EN';

      if (previousLanguage.current !== language) {
        const newPathname =
          pathname.startsWith('/en') || pathname.startsWith('/es') ? pathname.slice(3) : pathname;

        router.push(language === 'EN' ? `/en${newPathname}` : `/es${newPathname}`);
        previousLanguage.current = language;
      }
    }
  }, [language, pathname]);

  return (
    <div className={styles.navActions}>
      <button onClick={toggleLanguage}>
        <span>{language === 'EN' ? '🌐 ES' : '🌐 EN'}</span>
      </button>
    </div>
  );
};

export default NavActions;
