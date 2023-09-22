import Image, { StaticImageData } from 'next/image';
import styles from './RowCards.module.scss';
import CardWrapper from './CardWrapper';

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

export const Card: React.FC<IRowCard & CardProps> = ({ id, title, subtitle, description, link, image, isFeatured }) => {
  return (
    <CardWrapper aria-labeledby={id} href={link} className={`${styles.card} ${isFeatured && styles.cardfeatured}`}>
      {image && (
        <div className={styles.project__image_container}>
          <Image src={image?.src} alt={image?.alt} className={styles.project__image} fill title={image?.title} />
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
