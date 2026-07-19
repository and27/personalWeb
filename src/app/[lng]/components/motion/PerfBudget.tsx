'use client';

import { useReportWebVitals } from 'next/web-vitals';

// The performance budget, instrumented. Every scroll-driven / animated piece we
// add from here must keep these green — this logs each Core Web Vital against
// its threshold in dev so a regression is visible immediately. Zero cost in
// production (the callback only logs when NODE_ENV !== 'production').
const BUDGET: Record<string, number> = {
  LCP: 2500, // ms — largest contentful paint
  INP: 200, // ms — interaction to next paint
  CLS: 0.1, // score — cumulative layout shift
  FCP: 1800, // ms — first contentful paint
  TTFB: 800 // ms — time to first byte
};

export default function PerfBudget() {
  useReportWebVitals(metric => {
    if (process.env.NODE_ENV === 'production') return;
    const limit = BUDGET[metric.name];
    if (limit === undefined) return;
    const ok = metric.value <= limit;
    const unit = metric.name === 'CLS' ? '' : 'ms';
    // eslint-disable-next-line no-console
    console.log(
      `%c${ok ? '✓' : '✗'} ${metric.name} ${Math.round(metric.value)}${unit} / ${limit}${unit}`,
      `color:${ok ? '#54c08a' : '#e4695e'};font-weight:600`
    );
  });

  return null;
}
