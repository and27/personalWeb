import React from 'react';
import styles from './FeaturedProjects.module.scss';
import globalStyles from '../../page.module.scss';

interface IFeaturedProjectsProps {
  title: string;
  services: {
    title: string;
    description: string;
  }[];
}

const FeaturedProjects = ({ title, services }: IFeaturedProjectsProps) => (
  <section className={globalStyles.benefits}>
    <div className={globalStyles.container}>
      <h2 className={globalStyles.section__title}>{title}</h2>
      <div className={styles.cards}>
        {services?.map((service, idx) => (
          <div key={idx} className={idx % 2 === 0 ? styles.card__left : styles.card__right}>
            <h3 className={styles.card__title}>{service.title}</h3>
            <p className={styles.card__description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
