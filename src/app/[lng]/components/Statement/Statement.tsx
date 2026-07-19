'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './Statement.module.scss';
import globalStyles from '../../page.module.scss';

interface StatementProps {
  eyebrow: string;
  text: string;
}

// Full-screen giant statement that "lights up" word by word as you scroll
// through it — a large declaration instead of a paragraph, in the spirit of
// the reference screens the owner pointed to.
const Statement: React.FC<StatementProps> = ({ eyebrow, text }) => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(' ');

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    let inView = true;

    const apply = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      const n = wordRefs.current.length;
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        const wordProgress = Math.min(1, Math.max(0, progress * n - i));
        el.style.opacity = String(0.18 + 0.82 * wordProgress);
      });
    };

    const onScroll = () => {
      if (!inView || ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    const io = new IntersectionObserver(
      entries => {
        inView = entries[0].isIntersecting;
        if (inView) apply();
      },
      { rootMargin: '0px' }
    );
    io.observe(section);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    type LenisLike = {
      on: (event: string, cb: () => void) => void;
      off: (event: string, cb: () => void) => void;
    };
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.on('scroll', onScroll);
    apply();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      lenis?.off('scroll', onScroll);
    };
  }, [reduce, words.length]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.statement} ${reduce ? styles.statementStatic : ''}`}
    >
      <div className={styles.sticky}>
        <div className={globalStyles.container}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <p className={styles.text}>
            {words.map((word, i) => (
              <span
                key={i}
                ref={el => {
                  wordRefs.current[i] = el;
                }}
                className={styles.word}
                style={reduce ? undefined : { opacity: i === 0 ? 1 : 0.18 }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statement;
