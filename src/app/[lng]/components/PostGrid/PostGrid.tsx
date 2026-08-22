'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '../motion/Reveal';
import globalStyles from '../../page.module.scss';
import styles from './PostGrid.module.scss';

export interface PostCardData {
  id: string;
  title: string;
  description?: string;
  date?: string;
  link: string;
  image?: { src: string; alt?: string };
}

interface PostGridProps {
  title?: string;
  posts: PostCardData[];
  cta?: string;
}

// Same visual grammar as ProjectReel (big cover, dark scrim, Syne title
// overlay) but as a scannable card grid instead of full-viewport slides —
// blog listings can have many entries, one-per-screen would be tedious.
const PostGrid: React.FC<PostGridProps> = ({ title, posts, cta }) => {
  const [page, setPage] = useState(0);
  const perPage = 6;
  const visible = posts.slice(0, perPage * (page + 1));
  const remaining = posts.length - visible.length;

  return (
    <div className={globalStyles.container}>
      {title && (
        <Reveal>
          <h2 className={globalStyles.section__title}>{title}</h2>
        </Reveal>
      )}
      <div className={styles.grid}>
        {visible.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 0.06}>
            <Link href={post.link} className={styles.card}>
              {post.image?.src && (
                <Image
                  src={post.image.src}
                  alt={post.image.alt || ''}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  loading="lazy"
                  className={styles.cardImage}
                  style={{ objectFit: 'cover' }}
                />
              )}
              <div className={styles.scrim} aria-hidden="true" />
              <div className={styles.cardContent}>
                {post.date && <span className={styles.cardDate}>{post.date}</span>}
                <h3 className={styles.cardTitle}>{post.title}</h3>
                {post.description && <p className={styles.cardExcerpt}>{post.description}</p>}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      {cta && remaining > 0 && (
        <button className={styles.loadMore} onClick={() => setPage(page + 1)}>
          {cta}
        </button>
      )}
    </div>
  );
};

export default PostGrid;
