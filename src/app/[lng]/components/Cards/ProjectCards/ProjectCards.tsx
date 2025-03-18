import styles from './ProjectCards.module.scss';
import globalStyles from '../../../page.module.scss';
import React from 'react';
import { Card, IRowCard } from '../VerticalCard/Card';
import Link from 'next/link';

const ProjectCards = ({ cards }: { cards?: IRowCard[] }) => {
  return (
    <div className={styles.projectCardsContainer}>
      <div className={globalStyles.container}>
        <div className={styles.projectCards}>
          {cards?.map((card, index) => (
            <Link href={`/projects`} key={index} className={styles.cardLink}>
              <Card
                id="project-card"
                title={card.title}
                description={card.description}
                image={card.image}
                technologies={card.technologies}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
