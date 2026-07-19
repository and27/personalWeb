'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './BuildProcess.module.scss';
import globalStyles from '../../page.module.scss';

interface Stage {
  step: string;
  label: string;
  caption: string;
}

const STAGES: Record<string, { title: string; stages: Stage[] }> = {
  es: {
    title: 'De la idea al producto',
    stages: [
      { step: '01', label: 'Idea', caption: 'Un boceto. La forma antes que el pixel.' },
      { step: '02', label: 'Diseño', caption: 'Interfaz clara, jerarquía, intención.' },
      { step: '03', label: 'Código', caption: 'Frontend rápido y mantenible.' },
      { step: '04', label: 'En vivo', caption: 'En producción, usándose de verdad.' }
    ]
  },
  en: {
    title: 'From idea to product',
    stages: [
      { step: '01', label: 'Idea', caption: 'A sketch. Shape before pixel.' },
      { step: '02', label: 'Design', caption: 'Clear interface, hierarchy, intent.' },
      { step: '03', label: 'Code', caption: 'Fast, maintainable frontend.' },
      { step: '04', label: 'Live', caption: 'In production, actually used.' }
    ]
  }
};

// Cross-fade ramp: 0 before `a`, up to 1 across [a,b], hold to `c`, down to 0 by `d`.
function band(p: number, a: number, b: number, c: number, d: number) {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / (b - a);
  if (p <= c) return 1;
  return (d - p) / (d - c);
}

function Frame({ variant }: { variant: 1 | 2 | 3 | 4 }) {
  return (
    <div className={`${styles.frame} ${styles[`v${variant}`]}`} aria-hidden="true">
      <div className={styles.frameBar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.frameBody}>
        {variant === 3 ? (
          <pre className={styles.code}>
            <span className={styles.k}>export</span> <span className={styles.k}>function</span>{' '}
            <span className={styles.f}>Hero</span>() {'{'}
            {'\n'} <span className={styles.k}>return</span> &lt;
            <span className={styles.t}>section</span> <span className={styles.a}>className</span>=
            <span className={styles.s}>&quot;hero&quot;</span>&gt;
            {'\n'} &lt;<span className={styles.t}>h1</span>&gt;Producto&lt;/
            <span className={styles.t}>h1</span>&gt;
            {'\n'} &lt;<span className={styles.t}>button</span>&gt;Empezar&lt;/
            <span className={styles.t}>button</span>&gt;
            {'\n'} &lt;/<span className={styles.t}>section</span>&gt;;{'\n'}
            {'}'}
          </pre>
        ) : (
          <>
            <div className={styles.frameHero} />
            <div className={styles.frameLine} />
            <div className={`${styles.frameLine} ${styles.short}`} />
            <div className={styles.frameBtn}>{variant === 4 ? 'Empezar' : ''}</div>
            {variant === 4 && <span className={styles.liveDot} />}
          </>
        )}
      </div>
    </div>
  );
}

const BuildProcess: React.FC<{ lang?: string }> = ({ lang = 'es' }) => {
  const { title, stages } = STAGES[lang] || STAGES.es;
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    let inView = true;

    // Progress is derived from the section's real position, so it works no
    // matter what drives the scroll (native, Lenis smooth-scroll, keyboard).
    const apply = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;

      const o = [
        band(progress, -1, 0, 0.22, 0.28),
        band(progress, 0.22, 0.28, 0.47, 0.53),
        band(progress, 0.47, 0.53, 0.72, 0.78),
        band(progress, 0.72, 0.78, 1, 2)
      ];
      layerRefs.current.forEach((el, i) => {
        if (el) el.style.opacity = String(o[i]);
      });

      const active = progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;
      stepRefs.current.forEach((el, i) => {
        if (el) el.style.opacity = i === active ? '1' : '0.32';
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
    // Bridge Lenis explicitly in case its scroll events don't reach window.
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
  }, [reduce]);

  // Reduced motion: a calm static grid of the four stages.
  if (reduce) {
    return (
      <section className={globalStyles.benefits}>
        <div className={globalStyles.container}>
          <h2 className={globalStyles.section__title}>{title}</h2>
          <div className={styles.staticGrid}>
            {stages.map((s, i) => (
              <div key={s.step} className={styles.staticCard}>
                <Frame variant={(i + 1) as 1 | 2 | 3 | 4} />
                <div className={styles.staticMeta}>
                  <span className={styles.step}>{s.step}</span>
                  <h3>{s.label}</h3>
                  <p>{s.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className={styles.build}>
      <div className={styles.sticky}>
        <div className={`${globalStyles.container} ${styles.stage}`}>
          <div className={styles.copy}>
            <h2 className={globalStyles.section__title}>{title}</h2>
            <div className={styles.rail}>
              {stages.map((s, i) => (
                <div
                  key={s.step}
                  className={styles.step}
                  ref={el => {
                    stepRefs.current[i] = el;
                  }}
                  style={{ opacity: i === 0 ? 1 : 0.32 }}
                >
                  <span className={styles.stepNum}>{s.step}</span>
                  <div>
                    <h3>{s.label}</h3>
                    <p>{s.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.viewport}>
            {([1, 2, 3, 4] as const).map((v, i) => (
              <div
                key={v}
                className={styles.layer}
                ref={el => {
                  layerRefs.current[i] = el;
                }}
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                <Frame variant={v} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;
