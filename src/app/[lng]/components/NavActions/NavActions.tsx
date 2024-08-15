import React, { useState } from 'react';
import styles from './NavActions.module.scss';

const NavActions = () => {
  const [theme, setTheme] = useState('light'); // Estado para el tema
  const [language, setLanguage] = useState('EN'); // Estado para el idioma

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.className = theme === 'light' ? 'dark-theme' : 'light-theme';
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'EN' ? 'ES' : 'EN'));
  };

  return (
    <div className={styles.navActions}>
      <button onClick={toggleLanguage}>
        <span>{language === 'EN' ? '🌐 EN' : '🌐 ES'}</span>
      </button>
      <button onClick={toggleTheme}>
        <span>{theme === 'light' ? '🌗 Dark Mode' : '🌞 Light Mode'}</span>
      </button>
    </div>
  );
};

export default NavActions;
