import React, { useState, useEffect, useCallback, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { GALLERY } from '../../constants/mediaPaths';

const SLIDES = [
  { src: `${GALLERY.banners}/banner1.jpg`, alt: 'Students Tutorial' },
  { src: `${GALLERY.banners}/banner2.jpg`, alt: 'Our Classroom' },
  { src: `${GALLERY.banners}/banner3.jpg`, alt: 'Learning Together' },
  { src: `${GALLERY.banners}/banner4.jpg`, alt: 'Celebrate Success' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const rootRef = useRef(null);
  const blobARef = useRef(null);
  const blobBRef = useRef(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = root.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      const t = Math.max(0, Math.min(1, 1 - rect.top / (window.innerHeight + rect.height)));
      const y = (t - 0.5) * 18;
      if (blobARef.current) blobARef.current.style.transform = `translate3d(0, ${y * 0.9}px, 0)`;
      if (blobBRef.current) blobBRef.current.style.transform = `translate3d(0, ${-y * 0.7}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={rootRef}
      className="section-stripe-theme relative w-full overflow-hidden transition-colors duration-300 ease-in-out"
    >
      <div
        ref={blobARef}
        className="hero-blob -left-20 top-10 h-56 w-56 bg-brand/30 dark:bg-brand/20"
        aria-hidden
      />
      <div
        ref={blobBRef}
        className="hero-blob -right-16 bottom-4 h-48 w-48 bg-brand-light/35 dark:bg-brand-light/15"
        aria-hidden
      />

      <div className="relative z-[1] aspect-[16/8] min-h-[220px] w-full max-h-[640px]">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-brand-dark/80 text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-dark sm:flex"
      >
        <HiChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-brand-dark/80 text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-brand-dark sm:flex"
      >
        <HiChevronRight size={22} />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
              i === current ? 'scale-125 bg-brand-dark' : 'bg-brand/40 hover:bg-brand/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
