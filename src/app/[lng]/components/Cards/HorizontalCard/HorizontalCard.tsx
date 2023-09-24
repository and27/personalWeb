import Image from 'next/image';
import cardStyles from '../VerticalCard/Card.module.scss';
import styles from './HorizontalCard.module.scss';
import CardWrapper from '../RowCards/CardWrapper';

type imageData = {
  src: string;
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

export const HorizontalCard: React.FC<IRowCard & CardProps> = ({
  id,
  title,
  subtitle,
  description,
  link,
  image
}) => {
  return (
    <CardWrapper
      aria-labeledby={id}
      href={link}
      className={`${styles.card} ${styles.cardHorizontal}`}
    >
      {image && (
        <div className={styles.cardImageContainer}>
          <Image
            src={image?.src}
            alt={image?.alt}
            className={styles.cardImage}
            fill
            title={image?.title}
          />
        </div>
      )}
      <div className={cardStyles.cardContent}>
        {subtitle && <p className={cardStyles.cardSubtitle}>{subtitle}</p>}
        <h3 id={id} className={cardStyles.cardTitle}>
          {title}
        </h3>
        <p className={cardStyles.cardDescription}>{description}</p>
      </div>
    </CardWrapper>
  );
};
