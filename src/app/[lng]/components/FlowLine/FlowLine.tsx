'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './FlowLine.module.scss';

interface FlowLineProps {
  // 'hero' anchors to the headline's full stop and flows out to the right.
  // 'closing' is its echo in the last section: the same stroke re-entering
  // from the left, so the page ends where the line does.
  variant?: 'hero' | 'closing';
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

// Locates the last character of an element's text via a Range, rather than
// wrapping it in its own <span> in the markup — a real element there fought
// text-wrap: balance's line-breaking on the headline and pushed the last
// line off-screen on narrow viewports.
const getLastCharRect = (el: Element): DOMRect | null => {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let lastText: Text | null = null;
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (node.textContent) lastText = node as Text;
  }
  if (!lastText?.textContent) return null;
  const len = lastText.textContent.length;
  const range = document.createRange();
  range.setStart(lastText, len - 1);
  range.setEnd(lastText, len);
  const rects = range.getClientRects();
  return rects.length ? rects[rects.length - 1] : null;
};

// Section-local, not page-wide. The line unspools: a head travels the route
// and the stroke is laid down behind it, rather than the finished line simply
// fading in. Both are driven by one rAF pass over a fixed duration, so the
// head and the drawn length stay in lockstep — a CSS transition on the stroke
// could not keep a separate element in sync with it.
const FlowLine: React.FC<FlowLineProps> = ({ variant = 'hero' }) => {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const head = headRef.current;
    if (!svg || !path || !head) return;
    const host = svg.parentElement;
    if (!host) return;

    const duration = variant === 'hero' ? 2200 : 1700;
    let length = 0;
    let played = false;
    let raf = 0;

    const build = () => {
      const hostRect = host.getBoundingClientRect();
      const w = hostRect.width;
      const h = hostRect.height;
      if (w < 2 || h < 2) return;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      let d = '';

      if (variant === 'hero') {
        const title = document.querySelector('[data-hero-title]');
        let sx = w * 0.55;
        let sy = h * 0.42;
        const r = title ? getLastCharRect(title) : null;
        if (r) {
          // the glyph sits on the baseline, ~0.23 of the line box up from its
          // bottom; a touch above that puts the line at the dot's own ink
          sx = r.right - hostRect.left;
          sy = r.bottom - hostRect.top - r.height * 0.34;
        }

        const rx = w;
        if (rx <= sx + 80) return;
        const span = rx - sx;
        const amp = Math.min(13, span * 0.035);
        const mid = sx + span * 0.52;

        d = `M ${sx} ${sy}`;
        d += ` C ${sx + (mid - sx) * 0.45} ${sy + amp * 0.9}, ${mid - (mid - sx) * 0.4} ${
          sy + amp * 1.5
        }, ${mid} ${sy + amp * 0.7}`;
        d += ` C ${mid + (rx - mid) * 0.45} ${sy - amp * 0.3}, ${rx - (rx - mid) * 0.3} ${
          sy - amp * 1.5
        }, ${rx} ${sy - amp * 2.1}`;
      } else {
        const sy = h * 0.5;
        const ex = Math.min(w * 0.42, 340);
        const amp = 9;
        const mid = ex * 0.55;
        d = `M 0 ${sy - 26}`;
        d += ` C ${mid * 0.35} ${sy - 26 + amp}, ${mid * 0.6} ${sy - amp}, ${mid} ${sy}`;
        d += ` C ${mid + (ex - mid) * 0.45} ${sy + amp}, ${ex - 20} ${sy + amp * 0.4}, ${ex} ${
          sy - 14
        }`;
      }

      path.setAttribute('d', d);
      length = path.getTotalLength();
      path.style.strokeDasharray = String(length);

      if (reduce || played) {
        // already told its story (or motion is off) — show it finished
        path.style.strokeDashoffset = '0';
        head.style.opacity = '0';
      } else {
        path.style.strokeDashoffset = String(length);
      }
    };

    const unspool = () => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const e = easeOut(t);
        path.style.strokeDashoffset = String(length * (1 - e));

        const p = path.getPointAtLength(length * e);
        head.setAttribute('cx', String(p.x));
        head.setAttribute('cy', String(p.y));
        // the tip fades out as the thread finishes running out
        head.style.opacity = String(t < 0.85 ? 1 : (1 - t) / 0.15);

        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          head.style.opacity = '0';
          played = true;
        }
      };
      raf = requestAnimationFrame(step);
    };

    build();

    const ro = new ResizeObserver(build);
    ro.observe(host);

    if (reduce) {
      return () => ro.disconnect();
    }

    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !played) {
          io.disconnect();
          unspool();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(host);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduce, variant]);

  return (
    <svg
      ref={svgRef}
      className={`${styles.flow} ${variant === 'closing' ? styles.flowClosing : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <path ref={pathRef} className={styles.flowPath} fill="none" />
      <circle ref={headRef} className={styles.flowHead} r="3" style={{ opacity: 0 }} />
    </svg>
  );
};

export default FlowLine;
