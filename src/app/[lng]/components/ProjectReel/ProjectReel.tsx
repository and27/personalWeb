'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import globalStyles from '../../page.module.scss';
import Reveal from '../motion/Reveal';
import styles from './ProjectReel.module.scss';

export interface ReelProject {
  id: string;
  title: string;
  category?: string;
  image: string;
  link?: string;
}

interface ProjectReelProps {
  projects: ReelProject[];
  title?: string;
}

// Editorial index rather than a grid of thumbnails: the project names carry
// the section at display size, and the screenshot only appears — large, and
// tracking the cursor — for the row you are actually pointing at. Full-page
// captures turn to mush at thumbnail size, so this shows them big or not at
// all. Where there is no hover (touch, reduced motion) each row keeps its own
// inline thumbnail instead.
const ProjectReel: React.FC<ProjectReelProps> = ({ projects, title }) => {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = followerRef.current;
    if (!el) return;
    // Only track where hovering is a real interaction.
    if (!window.matchMedia('(hover: hover)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let started = false;

    const tick = () => {
      // ease toward the cursor so the image trails slightly instead of
      // snapping — the lag is what makes it feel like a physical object
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!started) {
        // jump to the cursor on first sight, then ease from there
        started = true;
        x = targetX;
        y = targetY;
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <section className={styles.reel}>
      <div className={globalStyles.container}>
        {title && (
          <Reveal>
            <h2 className={globalStyles.section__title}>{title}</h2>
          </Reveal>
        )}

        <ul className={styles.list}>
          {projects.map((project, i) => {
            const Row = project.link ? 'a' : 'div';
            return (
              <li key={project.id} className={styles.row}>
                <Row
                  className={styles.rowInner}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  {...(project.link
                    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  <span className={styles.rowNum}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.rowTitle}>{project.title}</h3>
                  {project.category && (
                    <span className={styles.rowCategory}>{project.category}</span>
                  )}
                  <span className={styles.rowArrow} aria-hidden="true">
                    ↗
                  </span>

                  {/* shown only where there is no hover to drive the follower */}
                  <span className={styles.rowThumb} aria-hidden="true">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="150px"
                      loading="lazy"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </span>
                </Row>
              </li>
            );
          })}
        </ul>
      </div>

      {!reduce && (
        <div
          ref={followerRef}
          className={`${styles.follower} ${active !== null ? styles.followerOn : ''}`}
          aria-hidden="true"
        >
          {projects.map((project, i) => (
            <Image
              key={project.id}
              src={project.image}
              alt=""
              fill
              sizes="420px"
              loading="lazy"
              className={`${styles.followerImg} ${active === i ? styles.followerImgOn : ''}`}
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectReel;
