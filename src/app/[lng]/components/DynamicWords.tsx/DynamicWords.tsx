'use client';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const DynamicWords = ({ lang }: { lang: string }) => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const words =
    lang === 'es'
      ? ['lanzar', 'impulsar', 'escalar', 'automatizar', 'acelerar']
      : ['technology', 'artificial intelligence', 'innovation'];

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: words,
        fadeOut: true,
        fadeOutDelay: 1000,
        typeSpeed: 100,
        loop: true
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <span
      ref={typedRef}
      style={{
        color: 'transparent',
        backgroundImage: 'linear-gradient(to right, rgb(75, 75, 215), #610fc0)',
        backgroundClip: 'text'
      }}
    ></span>
  );
};

export default DynamicWords;
