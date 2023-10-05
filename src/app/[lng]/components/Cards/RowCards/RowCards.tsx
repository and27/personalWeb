'use client';

import styles from './RowCards.module.scss';
import globalStyles from '../../../page.module.scss';
import React, { useState } from 'react';
import { Card, IRowCard } from '../VerticalCard/Card';
import { HorizontalCard } from '../HorizontalCard/HorizontalCard';

export interface IRowCards {
  title?: string;
  cards?: IRowCard[];
  linkLabel?: string;
  orientation?: 'horizontal' | 'vertical';
  isFeatured?: boolean;
  cta?: string;
  imageOverflow?: 'hidden' | 'visible';
}

const RowCards: React.FC<IRowCards> = ({
  title,
  cards,
  linkLabel,
  isFeatured,
  cta,
  imageOverflow,
  orientation
}) => {
  const [page, setPage] = useState(0);
  const extraCards = isFeatured ? 1 : 0;
  const cardsPerPage = 3;
  const cardsToShow = cards?.slice(0, cardsPerPage * (page + 1) + extraCards);
  const cardsLeft = (cards?.length || 0) - (cardsToShow?.length || 0);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={`${globalStyles.projects}`} id={title?.toLowerCase().replace(' ', '')}>
      <div className={globalStyles.container}>
        {title && (
          <h2 className={`${globalStyles.section__title} ${styles.rowCardsTitle}`}>{title}</h2>
        )}
        <div
          className={`${styles.rowCards} 
            ${orientation === 'horizontal' && styles.rowCards__horizontal}
            ${imageOverflow === 'hidden' && styles.rowCards__noOverflow}`}
        >
          {cardsToShow?.map((card: any, index: number) => {
            if (orientation === 'horizontal') {
              return (
                <HorizontalCard
                  id={`card${index.toString()}`}
                  key={index}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkLabel={linkLabel}
                  subtitle={card.subtitle}
                  image={card.image}
                />
              );
            } else
              return (
                <Card
                  id={`card${index.toString()}`}
                  key={index}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkLabel={linkLabel}
                  subtitle={card.subtitle}
                  image={card.image}
                  isFeatured={isFeatured && index === 0}
                />
              );
          })}
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
