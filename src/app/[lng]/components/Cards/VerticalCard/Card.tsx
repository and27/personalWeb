import Image, { StaticImageData } from 'next/image';
import styles from './Card.module.scss';
import CardWrapper from '../RowCards/CardWrapper';

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
  isFeatured
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
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </CardWrapper>
  );
};
