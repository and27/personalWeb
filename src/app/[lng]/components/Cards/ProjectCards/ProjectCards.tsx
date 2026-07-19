import styles from './ProjectCards.module.scss';
import globalStyles from '../../../page.module.scss';
import React from 'react';
import { Card, IRowCard } from '../VerticalCard/Card';
import Link from 'next/link';
import Reveal from '../../motion/Reveal';

const ProjectCards = ({ cards }: { cards?: IRowCard[] }) => {
  return (
    <div className={styles.projectCardsContainer}>
      <div className={globalStyles.container}>
        <div className={styles.projectCards}>
          {cards?.map((card, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <Link href={`/projects`} className={styles.cardLink}>
                <Card
                  id="project-card"
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  technologies={card.technologies}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
