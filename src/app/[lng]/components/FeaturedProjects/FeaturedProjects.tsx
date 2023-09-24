import React from 'react';
import styles from './FeaturedProjects.module.css';
import globalStyles from '../../page.module.scss';

const FeaturedProjects = () => (
  <section className={globalStyles.section}>
    <div className={globalStyles.container}>
      <h2 className={globalStyles.section__title}>What I do?</h2>
      <div className={styles.cards}>
        <div className={styles.card__left}>
          <h3 className={styles.card__title}>Frontend Development</h3>
          <p className={styles.card__description}>
            Build responsive websites and web apps with React, Next.js, TypeScript, and more.
            Emphasis on security and user-centered solutions.
          </p>
        </div>
        <div className={styles.card__right}>
          <h3 className={styles.card__title}>Application Security Testing</h3>
          <p className={styles.card__description}>
            Ensure application protection from cyber threats with our expertise in security testing.
          </p>
        </div>
        <div className={styles.card__left}>
          <h3 className={styles.card__title}>Custom Digital Experience</h3>
          <p className={styles.card__description}>
            Tailored solutions for web and mobile apps, from prototyping to enhanced user
            experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
