'use client';
import styles from './Masthead.module.scss';
import globalStyles from '../../page.module.scss';
import { motion } from 'framer-motion';

function Masthead() {
  return (
    <main className={globalStyles.masthead}>
      <div className={globalStyles.container}>
        <div className={styles.masthead__inner}>
          <header className={styles.masthead__content}>
            <h1 className={styles.masthead__title}>
              <span>Hi, I'm Andrés,</span>
              <br />
              <span className={styles.masthead__title_dark}>
                Security
              </span> & <span className={styles.masthead__title_dark}>Web</span>{' '}
              Developer.
            </h1>
            <p className={styles.masthead__description}>
              Taking your online presence to the next level with security-driven
              web applications.
            </p>
            <a className={styles.masthead__btn} href="#contact">
              Let's talk
            </a>
          </header>
          <div className={styles.photo}></div>
        </div>
      </div>
    </main>
  );
}

export default Masthead;
