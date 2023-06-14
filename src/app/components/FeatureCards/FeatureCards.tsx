import React from 'react';
import styles from './FeatureCards.module.css';
import globalStyles from '../../page.module.css';

const FeatureCards = () => (
  <section className={globalStyles.section}>
    <div className={globalStyles.container}>
      <h2 className={globalStyles.section__title}>What I do?</h2>
      <div className={styles.cards}>
        <div className={styles.card__left}>
          <h3 className={styles.card__title}>Frontend Development</h3>
          <p className={styles.card__description}>
            I build responsive websites and web applications using React,
            Next.js, TypeScript, JavaScript, HTML, CSS, and SASS.
          </p>
        </div>
        <div className={styles.card__right}>
          <h3 className={styles.card__title}>Backend Development</h3>
          <p className={styles.card__description}>
            I build REST APIs using Node.js, Express, MongoDB, and Firebase.
          </p>
        </div>
        <div className={styles.card__left}>
          <h3 className={styles.card__title}>UI/UX Design</h3>
          <p className={styles.card__description}>
            I design user interfaces and user experiences using Figma, Adobe XD,
            and Adobe Photoshop.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureCards;
