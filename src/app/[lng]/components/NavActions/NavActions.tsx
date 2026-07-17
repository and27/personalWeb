'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './NavActions.module.scss';

const NavActions = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [language, setLanguage] = useState<'EN' | 'ES'>('ES');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.startsWith('/en') ? 'EN' : 'ES';

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = newTheme;
    try {
      localStorage.setItem('theme', newTheme);
    } catch {
      // storage unavailable — theme still applies for this page view
    }
    setTheme(newTheme);
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
    setLanguage(currentLocale);
  }, [currentLocale]);

  return (
    <div className={styles.navActions}>
      <button
        type="button"
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
      >
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </button>
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
