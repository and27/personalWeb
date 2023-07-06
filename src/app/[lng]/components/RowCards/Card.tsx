import Image from 'next/image';
import Link from 'next/link';
import styles from './RowCards.module.scss';

type imageData = {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
};

export interface IRowCard {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  linkLabel?: string;
  image?: imageData;
  isFeatured?: boolean;
}

interface IWrapper {
  href?: string;
  className: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({
  children,
  href,
  className,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }
};

type CardProps = {
  orientation?: 'horizontal' | 'vertical';
  isFeatured?: boolean;
};

export const Card: React.FC<IRowCard & CardProps> = ({
  title,
  subtitle,
  description,
  link,
  image,
  isFeatured
}) => {
  return (
    <Wrapper
      href={link}
      className={`${styles.project__card} ${
        isFeatured && styles.project__cardfeatured
      }`}
    >
      {image && (
        <div className={styles.project__image_container}>
          <Image
            src={image?.src}
            alt={image?.alt}
            className={styles.project__image}
            height={image.height}
            width={image.width || 500}
            title={image?.title}
            style={{ width: image.width || '100%' }}
          />
        </div>
      )}
      <div className={styles.project__content}>
        {subtitle && <p className={styles.project__subtitle}>{subtitle}</p>}
        <h3 className={styles.project__title}>{title}</h3>
        <p className={styles.project__description}>{description}</p>
      </div>
    </Wrapper>
  );
};
