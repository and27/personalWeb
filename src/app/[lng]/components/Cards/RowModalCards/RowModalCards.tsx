'use client';

import styles from './RowModalCards.module.scss';
import globalStyles from '../../../page.module.scss';
import React, { useState } from 'react';
import { Card, IRowCard } from '../VerticalCard/Card';
import { HorizontalCard } from '../HorizontalCard/HorizontalCard';
import CardModal from '../../CardModal/CardModal';

export interface IRowCards {
  title?: string;
  cards?: IRowCard[];
  linkLabel?: string;
  orientation?: 'horizontal' | 'vertical';
  isFeatured?: boolean;
  cta?: string;
  imageOverflow?: 'hidden' | 'visible';
}

const RowModalCards: React.FC<IRowCards> = ({
  title,
  cards,
  linkLabel,
  imageOverflow,
  orientation
}) => {
  const [selectedCard, setSelectedCard] = useState<IRowCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = (card: IRowCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className={`${styles.rowCards__container}`} id={title?.toLowerCase().replace(' ', '')}>
      <div className={globalStyles.container}>
        {title && (
          <h2 className={`${globalStyles.section__title} ${styles.rowCardsTitle}`}>{title}</h2>
        )}
        <div
          className={`${styles.rowCards} 
            ${orientation === 'horizontal' && styles.rowCards__horizontal}
            ${imageOverflow === 'hidden' && styles.rowCards__noOverflow}`}
        >
          {cards?.map((card: any, index: number) => {
            const CardComponent = orientation === 'horizontal' ? HorizontalCard : Card;
            return (
              <div
                key={index}
                onClick={e => handleCardClick(card)}
                role="button"
                tabIndex={0}
                aria-label={`View details of ${card.title}`}
                onKeyPress={e => e.key === 'Enter' && handleCardClick(card)}
              >
                <CardComponent
                  id={`card${index.toString()}`}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                  linkLabel={linkLabel}
                  subtitle={card.subtitle}
                  image={card.image}
                  technologies={card.technologies}
                />
              </div>
            );
          })}
        </div>
      </div>
      <CardModal isOpen={isModalOpen} onClose={handleCloseModal} card={selectedCard} />
    </div>
  );
};

export default RowModalCards;
