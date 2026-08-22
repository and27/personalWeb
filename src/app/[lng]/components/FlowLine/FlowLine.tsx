'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './FlowLine.module.scss';

interface FlowLineProps {
  // 'hero' anchors to the headline's full stop and flows out to the right,
  // curling at the edge. 'closing' is its echo in the last section: the same
  // stroke re-entering from the left, so the page ends where the line does.
  variant?: 'hero' | 'closing';
}

// Lives inside one section rather than spanning the page. Both variants are
// drawn once when they come into view; there is no scroll-linked work.
const FlowLine: React.FC<FlowLineProps> = ({ variant = 'hero' }) => {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;
    const host = svg.parentElement;
    if (!host) return;

    const build = () => {
      const hostRect = host.getBoundingClientRect();
      const w = hostRect.width;
      const h = hostRect.height;
      if (w < 2 || h < 2) return;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      let d = '';

      if (variant === 'hero') {
        // start exactly where the headline's sentence ends
        const dot = document.querySelector('[data-thread-start]');
        let sx = w * 0.55;
        let sy = h * 0.42;
        if (dot) {
          const r = dot.getBoundingClientRect();
          // the glyph sits on the baseline, ~0.23 of the line box up from its
          // bottom; a touch above that puts the line at the dot's own ink
          sx = r.right - hostRect.left;
          sy = r.bottom - hostRect.top - r.height * 0.34;
        }

        // Runs out to the edge and leaves. An earlier version curled back on
        // itself here; a closed loop reads as a scribble, not as flow, and it
        // collided with the CTA row. This mirrors the closing line instead,
        // which is the shape that works.
        const rx = w;
        if (rx <= sx + 80) return; // too narrow to be worth drawing
        const span = rx - sx;
        const amp = Math.min(13, span * 0.035);
        const mid = sx + span * 0.52;

        d = `M ${sx} ${sy}`;
        // dips away from the full stop…
        d += ` C ${sx + (mid - sx) * 0.45} ${sy + amp * 0.9}, ${mid - (mid - sx) * 0.4} ${
          sy + amp * 1.5
        }, ${mid} ${sy + amp * 0.7}`;
        // …then lifts on its way off the right edge
        d += ` C ${mid + (rx - mid) * 0.45} ${sy - amp * 0.3}, ${rx - (rx - mid) * 0.3} ${
          sy - amp * 1.5
        }, ${rx} ${sy - amp * 2.1}`;
      } else {
        // closing echo: enters from the left edge and settles mid-section
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
      const len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = reduce ? '0' : String(len);
    };

    build();

    if (reduce) {
      const ro = new ResizeObserver(build);
      ro.observe(host);
      return () => ro.disconnect();
    }

    // draw it once, when the section is actually on screen
    const io = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          path.style.strokeDashoffset = '0';
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(host);

    const ro = new ResizeObserver(build);
    ro.observe(host);

    return () => {
      io.disconnect();
      ro.disconnect();
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
    </svg>
  );
};

export default FlowLine;
