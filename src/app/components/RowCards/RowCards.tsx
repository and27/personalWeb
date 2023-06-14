import styles from './RowCards.module.css';
import globalStyles from '../../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type imageData = {
  src: string;
  alt: string;
};
export interface IRowCard {
  title: string;
  description: string;
  link: string;
  linkLabel?: string;
  subtitle?: string;
  image?: imageData;
}
export interface IRowCards {
  title: string;
  cards: IRowCard[];
  linkLabel?: string;
  orientation?: 'horizontal' | 'vertical';
  isClickable?: boolean;
}

const ProjectCards = [
  {
    title: 'Ciodesia',
    description:
      'Ciodesia is an education platform to provide training and services related to geography.',
    link: ''
  },
  {
    title: 'Secure Lab',
    description:
      'Secure Lab (Hacker Club) is a cybersecurity training platform for IT professionals.',
    link: ''
  },
  {
    title: 'Snacks',
    description:
      'Snacks website provides actionable tips and pieces of advice about digital marketing.',
    link: ''
  }
];

export const Projects: IRowCards = {
  title: 'Recent Projects',
  cards: ProjectCards
};

type CardProps = {
  orientation?: 'horizontal' | 'vertical';
  isClickable?: boolean;
};

interface IWrapper {
  href?: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children, href, ...props }) => {
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  } else {
    return <div {...props}>{children}</div>;
  }
};

const Card: React.FC<IRowCard & CardProps> = ({
  title,
  description,
  link,
  subtitle,
  image,
  orientation,
  isClickable = false
}) => {
  return (
    <Wrapper href={link}>
      <div
        className={`${styles.project__card} ${
          orientation === 'horizontal' && styles.project__cardvertical
        }`}
      >
        {image && (
          <Image
            src={image?.src}
            alt={image?.alt}
            width={200}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        )}

        <div className={styles.project__content}>
          {subtitle && <h4 className={styles.project__subtitle}>{subtitle}</h4>}
          <h3 className={styles.project__title}>{title}</h3>
          <p className={styles.project__description}>{description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const RowCards: React.FC<IRowCards> = ({
  title,
  cards,
  linkLabel,
  orientation
}) => {
  return (
    <section className={globalStyles.projects}>
      <div className={globalStyles.container}>
        <h2
          className={`${globalStyles.section__title} ${styles.project__title}`}
        >
          {title}
        </h2>
        <div className={styles.project__cards}>
          {cards?.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              linkLabel={linkLabel}
              subtitle={card.subtitle}
              image={card.image}
              orientation={orientation}
              isClickable={card.link ? true : false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RowCards;
