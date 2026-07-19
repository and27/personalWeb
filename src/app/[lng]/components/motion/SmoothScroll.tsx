'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Foundation of the motion system: smooth, momentum-based scrolling that the
// scroll-driven pieces (hero, the "transformation") will read their progress
// from. Never hijacks the scroll — Lenis only smooths native scroll, the wheel
// and keyboard keep working. Fully disabled under prefers-reduced-motion.
export default function SmoothScroll() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Leave touch devices on native scroll — smoothing there costs more than
      // it gives and can feel laggy on mid-range phones.
      syncTouch: false
    });

    // Expose the instance so scroll-driven components can subscribe later.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
