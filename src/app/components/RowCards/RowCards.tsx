'use client';

import styles from './RowCards.module.scss';
import globalStyles from '../../page.module.scss';
import React, { useState } from 'react';
import { Card, IRowCard } from './Card';

export interface IRowCards {
  title: string;
  cards?: IRowCard[];
  linkLabel?: string;
  orientation?: 'horizontal' | 'vertical';
  isFeatured?: boolean;
  cta?: string;
}

const RowCards: React.FC<IRowCards> = ({
  title,
  cards,
  linkLabel,
  orientation,
  isFeatured,
  cta
}) => {
  const cards2 = [...(cards as []), ...(cards as [])];
  const [page, setPage] = useState(0);
  const extraCards = isFeatured ? 1 : 0;
  const cardsPerPage = 3;
  const cardsToShow = cards2?.slice(0, cardsPerPage * (page + 1) + extraCards);
  const cardsLeft = (cards2?.length || 0) - (cardsToShow?.length || 0);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={globalStyles.projects}>
      <div className={globalStyles.container}>
        <h2
          className={`${globalStyles.section__title} ${styles.project__title}`}
        >
          {title}
        </h2>
        <div className={styles.project__cards}>
          {cardsToShow?.map((card: any, index: number) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              linkLabel={linkLabel}
              subtitle={card.subtitle}
              image={card.image}
              isFeatured={isFeatured && index === 0}
              orientation={
                isFeatured && index === 0 ? 'horizontal' : orientation
              }
            />
          ))}
        </div>
        {cta && cardsLeft > 0 && (
          <button className={globalStyles.btn} onClick={handleLoadMore}>
            {cta}
          </button>
        )}
      </div>
    </section>
  );
};
export default RowCards;
