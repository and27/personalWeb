import Image, { StaticImageData } from 'next/image';
import styles from './Card.module.scss';
import CardWrapper from '../RowCards/CardWrapper';
import React from '../../../../../../public/React.png';
import Js from '../../../../../../public/js.png';
import Vite from '../../../../../../public/vite.png';

type imageData = {
  src: string | StaticImageData;
  alt: string;
  title: string;
  width?: number;
  height?: number;
};

export interface IRowCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkLabel?: string;
  image?: imageData;
  isFeatured?: boolean;
  cardIcons?: string[];
}

type CardProps = {
  orientation?: 'horizontal' | 'vertical';
  isFeatured?: boolean;
};

export const Card: React.FC<IRowCard & CardProps> = ({
  id,
  title,
  subtitle,
  description,
  link,
  image,
  isFeatured,
  cardIcons
}) => {
  return (
    <CardWrapper
      aria-labeledby={id}
      href={link}
      className={`${styles.card} ${isFeatured && styles.cardfeatured}`}
    >
      {image && (
        <div className={styles.cardImageContainer}>
          <Image
            src={image?.src}
            alt={image?.alt}
            className={styles.cardImage}
            fill
            style={{ objectFit: 'cover' }}
            title={image?.title}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        <h3 id={id} className={styles.cardTitle}>
          {title}
        </h3>
        {cardIcons && (
          <div className={styles.cardIcons}>
            <Image src={React} alt="React Icon" width={20} height={20} />
            <Image src={Vite} alt="Vite Icon" width={20} height={20} />
            <Image src={Js} alt="JS Icon" width={20} height={20} />
          </div>
        )}

        <p className={styles.cardDescription}>{description}</p>
      </div>
    </CardWrapper>
  );
};
