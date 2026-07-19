'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
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

// The morphing product frame: the same screen skeleton (hero block, two lines,
// a button) rendered in four treatments that cross-fade as you scroll.
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
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  // Cross-fade windows for the four frames.
  const o1 = useTransform(scrollYProgress, [0, 0.02, 0.22, 0.28], [1, 1, 1, 0]);
  const o2 = useTransform(scrollYProgress, [0.22, 0.28, 0.47, 0.53], [0, 1, 1, 0]);
  const o3 = useTransform(scrollYProgress, [0.47, 0.53, 0.72, 0.78], [0, 1, 1, 0]);
  const o4 = useTransform(scrollYProgress, [0.72, 0.78, 1], [0, 1, 1]);
  const frameOpacities = [o1, o2, o3, o4];

  // Active step index for the caption/rail (0..3).
  const activeIndex = useTransform(scrollYProgress, (v): number =>
    v < 0.25 ? 0 : v < 0.5 ? 1 : v < 0.75 ? 2 : 3
  );

  // Reduced motion / no-JS-scroll fallback: a calm static grid of the stages.
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
    <section ref={ref} className={styles.build}>
      <div className={styles.sticky}>
        <div className={`${globalStyles.container} ${styles.stage}`}>
          <div className={styles.copy}>
            <h2 className={globalStyles.section__title}>{title}</h2>
            <div className={styles.rail}>
              {stages.map((s, i) => (
                <StepRow key={s.step} stage={s} index={i} active={activeIndex} />
              ))}
            </div>
          </div>

          <div className={styles.viewport}>
            {([1, 2, 3, 4] as const).map((v, i) => (
              <motion.div key={v} className={styles.layer} style={{ opacity: frameOpacities[i] }}>
                <Frame variant={v} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function StepRow({
  stage,
  index,
  active
}: {
  stage: Stage;
  index: number;
  active: MotionValue<number>;
}) {
  const opacity = useTransform(active, v => (Math.round(v) === index ? 1 : 0.32));
  return (
    <motion.div className={styles.step} style={{ opacity }}>
      <span className={styles.stepNum}>{stage.step}</span>
      <div>
        <h3>{stage.label}</h3>
        <p>{stage.caption}</p>
      </div>
    </motion.div>
  );
}

export default BuildProcess;
