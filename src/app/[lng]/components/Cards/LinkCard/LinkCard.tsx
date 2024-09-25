import React from 'react';
import styles from '../VerticalCard/Card.module.scss';
import { IRowCard } from '../VerticalCard/Card';
import Link from 'next/link';

interface LinkCardProps extends IRowCard {}

const LinkCard: React.FC<LinkCardProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
  link,
  linkLabel
}) => {
  return (
    <Link href={link || '#'} className={styles.card}>
      {image && (
        <div className={styles.cardImageContainer}>
          <img src={image.src} alt={image.alt || title} className={styles.cardImage} />
        </div>
      )}
      <div className={styles.cardContent}>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {linkLabel && <span className={styles.linkLabel}>{linkLabel}</span>}
      </div>
    </Link>
  );
};

export default LinkCard;
