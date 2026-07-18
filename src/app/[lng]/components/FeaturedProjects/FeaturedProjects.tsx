import React from 'react';
import styles from './FeaturedProjects.module.scss';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';

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
      <Reveal>
        <h2 className={globalStyles.section__title}>{title}</h2>
      </Reveal>
      <div className={styles.cards}>
        {services?.map((service, idx) => (
          <Reveal key={idx} className={styles.card} delay={idx * 0.08}>
            <span className={styles.card__accent} aria-hidden="true" />
            <h3 className={styles.card__title}>{service.title}</h3>
            <p className={styles.card__description}>{service.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
