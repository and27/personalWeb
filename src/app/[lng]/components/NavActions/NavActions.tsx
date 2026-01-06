'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './NavActions.module.scss';

const NavActions = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState<'EN' | 'ES'>('ES');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/en') ? 'EN' : 'ES';

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme === 'light' ? 'light-theme' : 'dark-theme';
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value as 'EN' | 'ES';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    const newPathname =
      pathname.startsWith('/en') || pathname.startsWith('/es') ? pathname.slice(3) : pathname;
    const nextPath = newLanguage === 'EN' ? `/en${newPathname}` : `/es${newPathname}`;
    if (nextPath !== pathname) {
      router.replace(nextPath);
    }
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  useEffect(() => {
    setLanguage(currentLocale);
  }, [currentLocale]);

  return (
    <div className={styles.navActions}>
      <select
        className={styles.languageSelect}
        value={language}
        onChange={handleLanguageChange}
        aria-label="Language selector"
      >
        <option value="EN">English</option>
        <option value="ES">Español</option>
      </select>
    </div>
  );
};

export default NavActions;
