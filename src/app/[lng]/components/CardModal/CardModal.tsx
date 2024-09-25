import React from 'react';
import Image from 'next/image';
import styles from './CardModal.module.scss';
import globalStyles from '../../page.module.scss';
import { IRowCard } from '../Cards/VerticalCard/Card';

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: IRowCard | null;
}

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose, card }) => {
  if (!isOpen || !card) return null;
  console.log(card.extra);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        {card.extra?.screen && (
          <div className={styles.imageContainer}>
            <Image
              src={card.extra?.screen.src}
              alt={card.extra?.screen.alt || card.title}
              className={styles.modalImage}
              width={600}
              height={350}
              objectFit="cover"
            />
            {card.extra?.link && (
              <button className={globalStyles.btn}>
                <a href={card.link} target="_blank" rel="noopener noreferrer">
                  Visitar el sitio
                </a>
              </button>
            )}
          </div>
        )}
        <div className={styles.textContent}>
          <div className={styles.modalHeader}>
            <h3 className={styles.modalTitle}>{card.title}</h3>
            <div className={styles.techStack}>
              <ul>
                {card.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.modalDescription}>{card.description}</p>
          <div className={styles.projectImpact}>
            <h4>Highlights</h4>
            <p>{card.extra?.impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
