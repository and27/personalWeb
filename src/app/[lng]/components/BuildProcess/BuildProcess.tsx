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

const STAGES: Record<
  string,
  { title: string; stages: Stage[]; headline: string; btn: string; live: string }
> = {
  es: {
    title: 'De la idea al producto',
    headline: 'Productos digitales que destacan.',
    btn: 'Ver trabajo',
    live: 'EN VIVO',
    stages: [
      { step: '01', label: 'Idea', caption: 'Un boceto. La forma antes que el pixel.' },
      { step: '02', label: 'Diseño', caption: 'Interfaz clara, jerarquía, intención.' },
      { step: '03', label: 'Código', caption: 'Frontend rápido y mantenible.' },
      { step: '04', label: 'En vivo', caption: 'En producción, usándose de verdad.' }
    ]
  },
  en: {
    title: 'From idea to product',
    headline: 'Digital products that stand out.',
    btn: 'View work',
    live: 'LIVE',
    stages: [
      { step: '01', label: 'Idea', caption: 'A sketch. Shape before pixel.' },
      { step: '02', label: 'Design', caption: 'Clear interface, hierarchy, intent.' },
      { step: '03', label: 'Code', caption: 'Fast, maintainable frontend.' },
      { step: '04', label: 'Live', caption: 'In production, actually used.' }
    ]
  }
};

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
// 0 before a, ramps to 1 across [a,b], holds to c, back to 0 by d
const band = (p: number, a: number, b: number, c: number, d: number) => {
  if (p <= a || p >= d) return 0;
  if (p < b) return (p - a) / (b - a);
  if (p <= c) return 1;
  return (d - p) / (d - c);
};

/* ---- Act 1 · Paper: the sketch draws itself ---------------------------- */
function SketchFrame({ animated }: { animated: boolean }) {
  const hidden = animated ? { strokeDashoffset: 1 } : undefined;
  const noteHidden = animated ? { opacity: 0 } : undefined;
  return (
    <div className={`${styles.frame} ${styles.paper}`} aria-hidden="true">
      <svg viewBox="0 0 400 300" className={styles.sketchSvg} fill="none">
        {/* hero block — slightly wobbly, hand-drawn */}
        <path
          data-draw="0"
          pathLength={1}
          style={hidden}
          d="M42 44 Q200 38 356 46 Q362 88 357 126 Q200 133 44 127 Q38 86 42 44 Z"
        />
        {/* two text lines */}
        <path data-draw="1" pathLength={1} style={hidden} d="M44 168 Q190 163 322 167" />
        <path data-draw="2" pathLength={1} style={hidden} d="M44 194 Q150 190 250 193" />
        {/* button */}
        <path
          data-draw="3"
          pathLength={1}
          style={hidden}
          d="M44 226 Q100 222 148 226 Q152 244 148 262 Q96 266 45 262 Q41 244 44 226 Z"
        />
        {/* annotation arrow */}
        <path
          data-draw="4"
          pathLength={1}
          style={hidden}
          d="M262 236 Q300 250 322 226 M316 224 L324 225 L322 234"
        />
      </svg>
      <span className={styles.sketchNote} data-note="0" style={noteHidden}>
        ¿y si…?
      </span>
    </div>
  );
}

/* ---- Act 2 · Design tool: blocks snap into a grid ---------------------- */
function DesignFrame({ animated }: { animated: boolean }) {
  const start = (dx: number, dy: number, dr: number) =>
    animated ? { transform: `translate(${dx}px, ${dy}px) rotate(${dr}deg)` } : undefined;
  const hidden = animated ? { opacity: 0 } : undefined;
  return (
    <div className={`${styles.frame} ${styles.design}`} aria-hidden="true">
      <div className={styles.designBar}>
        <span className={styles.designDot} />
        <span className={styles.designTitle}>hero.fig</span>
      </div>
      <div className={styles.designBody}>
        <div className={styles.designGrid} data-grid style={hidden} />
        <div
          className={styles.dHero}
          data-snap
          data-dx="-26"
          data-dy="14"
          data-dr="-3.5"
          style={start(-26, 14, -3.5)}
        />
        <div
          className={styles.dLine}
          data-snap
          data-dx="30"
          data-dy="-8"
          data-dr="2.5"
          style={start(30, -8, 2.5)}
        />
        <div
          className={`${styles.dLine} ${styles.dLineShort}`}
          data-snap
          data-dx="-18"
          data-dy="10"
          data-dr="-2"
          style={start(-18, 10, -2)}
        />
        <div
          className={styles.dBtn}
          data-snap
          data-dx="22"
          data-dy="16"
          data-dr="4"
          style={start(22, 16, 4)}
        />
        <span className={`${styles.redline} ${styles.redlineTop}`} data-red style={hidden}>
          24
        </span>
        <span className={`${styles.redline} ${styles.redlineMid}`} data-red style={hidden}>
          16
        </span>
        <div className={styles.chips}>
          {[styles.chipA, styles.chipB, styles.chipC].map((c, i) => (
            <span key={i} className={`${styles.chip} ${c}`} data-chip style={hidden} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Act 3 · Editor: the code types itself ----------------------------- */
const CODE_LINES: React.ReactNode[] = [
  <>
    <span className={styles.k}>export function</span> <span className={styles.f}>Hero</span>
    () {'{'}
  </>,
  <>
    {'  '}
    <span className={styles.k}>return</span> (
  </>,
  <>
    {'    '}&lt;<span className={styles.t}>section</span>{' '}
    <span className={styles.a}>className</span>=<span className={styles.s}>&quot;hero&quot;</span>
    &gt;
  </>,
  <>
    {'      '}&lt;<span className={styles.t}>h1</span>&gt;Producto&lt;/
    <span className={styles.t}>h1</span>&gt;
  </>,
  <>
    {'      '}&lt;<span className={styles.t}>button</span>&gt;Empezar&lt;/
    <span className={styles.t}>button</span>&gt;
  </>,
  <>
    {'    '}&lt;/<span className={styles.t}>section</span>&gt;
  </>,
  <>{'  );'}</>,
  <>{'}'}</>
];

function CodeFrame({ animated }: { animated: boolean }) {
  const hidden = animated ? { clipPath: 'inset(0 100% 0 0)' } : undefined;
  const termHidden = animated ? { opacity: 0 } : undefined;
  return (
    <div className={`${styles.frame} ${styles.editor}`} aria-hidden="true">
      <div className={styles.editorBar}>
        <span className={styles.editorTab}>Hero.tsx</span>
        <span className={styles.editorTabIdle}>tokens.css</span>
      </div>
      <div className={styles.editorBody}>
        <pre className={styles.code}>
          {CODE_LINES.map((line, i) => (
            <span key={i} className={styles.codeRow}>
              <span className={styles.lineNum}>{i + 1}</span>
              <span className={styles.codeLine} data-cl style={hidden}>
                {line}
              </span>
            </span>
          ))}
        </pre>
        <div className={styles.terminal} data-term style={termHidden}>
          <span className={styles.termArrow}>▲</span> deploy · listo en 28s
        </div>
      </div>
    </div>
  );
}

/* ---- Act 4 · Browser: the site itself, live ---------------------------- */
function LiveFrame({
  animated,
  headline,
  btn,
  live
}: {
  animated: boolean;
  headline: string;
  btn: string;
  live: string;
}) {
  const hidden = animated ? { opacity: 0, transform: 'translateY(14px)' } : undefined;
  const badgeHidden = animated ? { opacity: 0, transform: 'scale(0.6)' } : undefined;
  return (
    <div className={`${styles.frame} ${styles.browser}`} aria-hidden="true">
      <div className={styles.browserBar}>
        <span className={styles.designDot} />
        <span className={styles.urlPill}>
          <span className={styles.lock}>🔒</span> andresbanda.com
        </span>
      </div>
      <div className={styles.browserBody}>
        <span className={styles.miniEyebrow} data-rise style={hidden}>
          Crea · Innova · Repite
        </span>
        <h4 className={styles.miniHeadline} data-rise style={hidden}>
          {headline}
        </h4>
        <span className={styles.miniBtn} data-rise style={hidden}>
          {btn}
        </span>
        <div className={styles.miniName} data-rise style={hidden}>
          Andrés Banda
        </div>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgeLive}`} data-badge style={badgeHidden}>
            <i className={styles.liveDotMini} /> {live}
          </span>
          <span className={styles.badge} data-badge style={badgeHidden}>
            ⚡ 100
          </span>
          <span className={styles.badge} data-badge style={badgeHidden}>
            LCP 0.9s
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */

const BuildProcess: React.FC<{ lang?: string }> = ({ lang = 'es' }) => {
  const { title, stages, headline, btn, live } = STAGES[lang] || STAGES.es;
  const reduce = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    // Cache the animated elements of each act once.
    const layer = (i: number) => layerRefs.current[i];
    const q = (i: number, sel: string) =>
      layer(i) ? Array.from(layer(i)!.querySelectorAll<HTMLElement>(sel)) : [];
    const draws = q(0, '[data-draw]');
    const notes = q(0, '[data-note]');
    const snaps = q(1, '[data-snap]');
    const grids = q(1, '[data-grid]');
    const reds = q(1, '[data-red]');
    const chips = q(1, '[data-chip]');
    const codeLines = q(2, '[data-cl]');
    const terms = q(2, '[data-term]');
    const rises = q(3, '[data-rise]');
    const badges = q(3, '[data-badge]');

    const applyActs = (p: number) => {
      // local 0..1 progress inside each quarter of the section
      const local = (i: number) => clamp01((p - i * 0.25) / 0.25);

      // Act 1 — strokes draw sequentially, then the annotation pops
      const p1 = local(0);
      draws.forEach((el, i) => {
        const lp = clamp01(p1 * (draws.length + 0.6) - i * 0.8);
        el.style.strokeDashoffset = String(1 - easeOut(lp));
      });
      notes.forEach(el => {
        el.style.opacity = String(clamp01((p1 - 0.8) / 0.2));
      });

      // Act 2 — scattered pieces snap to the grid, then redlines + palette
      const p2 = local(1);
      grids.forEach(el => {
        el.style.opacity = String(clamp01(p2 / 0.2) * 0.55);
      });
      snaps.forEach(el => {
        const t = easeOut(clamp01(p2 / 0.55));
        const dx = parseFloat(el.dataset.dx || '0') * (1 - t);
        const dy = parseFloat(el.dataset.dy || '0') * (1 - t);
        const dr = parseFloat(el.dataset.dr || '0') * (1 - t);
        el.style.transform = `translate(${dx}px, ${dy}px) rotate(${dr}deg)`;
      });
      reds.forEach((el, i) => {
        el.style.opacity = String(clamp01((p2 - (0.58 + i * 0.1)) / 0.15));
      });
      chips.forEach((el, i) => {
        const lp = easeOut(clamp01((p2 - (0.66 + i * 0.08)) / 0.18));
        el.style.opacity = String(lp);
        el.style.transform = `scale(${0.5 + 0.5 * lp})`;
      });

      // Act 3 — each code line "types" left to right, then the deploy line
      const p3 = local(2);
      codeLines.forEach((el, i) => {
        const lp = clamp01((p3 * 1.18 * codeLines.length - i) / 1);
        el.style.clipPath = `inset(0 ${(1 - lp) * 100}% 0 0)`;
      });
      terms.forEach(el => {
        el.style.opacity = String(clamp01((p3 - 0.86) / 0.14));
      });

      // Act 4 — the site assembles, then the proof badges pop
      const p4 = local(3);
      rises.forEach((el, i) => {
        const lp = easeOut(clamp01((p4 - i * 0.1) / 0.35));
        el.style.opacity = String(lp);
        el.style.transform = `translateY(${(1 - lp) * 14}px)`;
      });
      badges.forEach((el, i) => {
        const lp = easeOut(clamp01((p4 - (0.55 + i * 0.13)) / 0.2));
        el.style.opacity = String(lp);
        el.style.transform = `scale(${0.6 + 0.4 * lp})`;
      });
    };

    let ticking = false;
    let inView = true;

    const apply = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp01(-rect.top / scrollable) : 0;

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

      applyActs(progress);
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
  }, [reduce]);

  const frames = [
    <SketchFrame key="s1" animated={!reduce} />,
    <DesignFrame key="s2" animated={!reduce} />,
    <CodeFrame key="s3" animated={!reduce} />,
    <LiveFrame key="s4" animated={!reduce} headline={headline} btn={btn} live={live} />
  ];

  // Reduced motion: a calm static grid, every act in its finished state.
  if (reduce) {
    return (
      <section className={globalStyles.benefits}>
        <div className={globalStyles.container}>
          <h2 className={globalStyles.section__title}>{title}</h2>
          <div className={styles.staticGrid}>
            {stages.map((s, i) => (
              <div key={s.step} className={styles.staticCard}>
                {frames[i]}
                <div className={styles.staticMeta}>
                  <span className={styles.stepNum}>{s.step}</span>
                  <div>
                    <h3>{s.label}</h3>
                    <p>{s.caption}</p>
                  </div>
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
            {frames.map((frame, i) => (
              <div
                key={i}
                className={styles.layer}
                ref={el => {
                  layerRefs.current[i] = el;
                }}
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {frame}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;
