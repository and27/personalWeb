'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const DynamicWords = ({ lang }: { lang: string }) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const words =
    lang === 'es'
      ? ['tecnología', 'inteligencia artificial', 'innovación']
      : ['technology', 'artificial intelligence', 'innovation'];

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: words,
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedRef}></span>;
};

export default DynamicWords;
