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
          sx = r.right - hostRect.left;
          sy = r.bottom - hostRect.top - r.height * 0.3;
        }

        const rx = w - 76; // leave room for the hook to swing past
        if (rx <= sx + 40) return; // too narrow to be worth drawing
        const amp = Math.min(11, (rx - sx) * 0.03);
        const mid = sx + (rx - sx) * 0.5;

        d = `M ${sx} ${sy}`;
        // two shallow S bends — a line that flows rather than a squiggle
        d += ` C ${sx + (mid - sx) * 0.4} ${sy - amp}, ${mid - (mid - sx) * 0.4} ${
          sy + amp
        }, ${mid} ${sy}`;
        d += ` C ${mid + (rx - mid) * 0.4} ${sy - amp}, ${rx - (rx - mid) * 0.4} ${
          sy + amp
        }, ${rx} ${sy}`;
        // and the hook at the edge, curving out and back
        const cy = sy + 92;
        d += ` C ${rx + 58} ${sy + 6}, ${rx + 58} ${cy - 26}, ${rx - 4} ${cy}`;
        d += ` C ${rx - 54} ${cy + 18}, ${rx - 86} ${cy + 2}, ${rx - 96} ${cy - 30}`;
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
