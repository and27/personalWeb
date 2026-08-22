'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './PageThread.module.scss';

// A single continuous line that starts at the full stop of the hero headline,
// leaves to the right and then stitches its way down the page, drawing itself
// as you scroll. The statement claims things should feel fluid; this is the
// page making that claim visible instead of only stating it.
//
// The overlay is fixed to the viewport and the path is authored in document
// coordinates, with the group translated by -scrollY each frame. That avoids
// depending on which ancestor happens to be positioned, and keeps the stroke
// width honest (no viewBox stretching).
const PageThread: React.FC = () => {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const group = groupRef.current;
    const path = pathRef.current;
    if (!svg || !group || !path) return;

    let length = 0;

    const buildPath = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      // Anchor to the headline's full stop; fall back to the top-right area
      // if the hero is not on this page.
      const dot = document.querySelector('[data-thread-start]');
      let sx = w * 0.6;
      let sy = h * 0.45;
      if (dot) {
        const r = dot.getBoundingClientRect();
        sx = r.right + window.scrollX;
        sy = r.bottom - r.height * 0.28 + window.scrollY;
      }

      // hug the very edge on phones, where the content container leaves almost
      // no gutter to run through
      const margin = w < 768 ? 10 : Math.min(64, w * 0.06);
      const rightX = w - margin;
      const leftX = margin;
      const swing = h * 0.9;

      // leave the full stop heading right, then bend downward
      let d = `M ${sx} ${sy}`;
      d += ` C ${sx + (rightX - sx) * 0.6} ${sy}, ${rightX} ${sy}, ${rightX} ${sy + swing * 0.45}`;

      let x = rightX;
      let y = sy + swing * 0.45;
      let toLeft = true;

      // serpentine down the page, hugging the margins so it never crosses copy
      while (y < docH - swing * 0.35) {
        const nx = toLeft ? leftX : rightX;
        const ny = y + swing;
        d += ` C ${x} ${y + swing * 0.5}, ${nx} ${ny - swing * 0.5}, ${nx} ${ny}`;
        x = nx;
        y = ny;
        toLeft = !toLeft;
      }

      path.setAttribute('d', d);
      length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      // reduced motion: show the finished thread, no scroll-drawing
      path.style.strokeDashoffset = reduce ? '0' : String(length);
    };

    let ticking = false;
    const apply = () => {
      ticking = false;
      const scrolled = window.scrollY;
      group.setAttribute('transform', `translate(0, ${-scrolled})`);
      if (reduce) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrolled / max)) : 0;
      // draw a little ahead of the reader so the tip leads rather than trails
      const drawn = Math.min(1, progress * 1.08 + 0.06);
      path.style.strokeDashoffset = String(length * (1 - drawn));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    const onResize = () => {
      buildPath();
      apply();
    };

    buildPath();
    apply();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    type LenisLike = {
      on: (e: string, cb: () => void) => void;
      off: (e: string, cb: () => void) => void;
    };
    const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
    lenis?.on('scroll', onScroll);

    // the page grows as lazy images and fonts settle; re-measure when it does
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      lenis?.off('scroll', onScroll);
      ro.disconnect();
    };
  }, [reduce]);

  return (
    <svg ref={svgRef} className={styles.thread} aria-hidden="true" focusable="false">
      <g ref={groupRef}>
        <path ref={pathRef} className={styles.threadPath} fill="none" />
      </g>
    </svg>
  );
};

export default PageThread;
