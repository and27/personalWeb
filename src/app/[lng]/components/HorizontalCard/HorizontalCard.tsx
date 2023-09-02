import Image from 'next/image';
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
      className={`${styles.card} ${styles.cardfeatured}`}
    >
      {image && (
        <div className={styles.project__image_container}>
          <Image
            src={image?.src}
            alt={image?.alt}
            className={styles.project__image}
            fill
            title={image?.title}
          />
        </div>
      )}
      <div className={styles.project__content}>
        {subtitle && <p className={styles.project__subtitle}>{subtitle}</p>}
        <h3 id={id} className={styles.project__title}>
          {title}
        </h3>
        <p className={styles.project__description}>{description}</p>
      </div>
    </CardWrapper>
  );
};