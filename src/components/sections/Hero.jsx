import React, { useState, useEffect, useCallback } from 'react';
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

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="section-stripe-theme relative w-full overflow-hidden">
      {/* Keep full banner visible on all screens (no crop). */}
      <div
        className="relative w-full aspect-[16/8] min-h-[220px] max-h-[640px]"
      >
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700
              ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                   w-10 h-10 rounded-full bg-brand-dark/80 hover:bg-brand-dark
                   items-center justify-center text-white transition"
      >
        <HiChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                   w-10 h-10 rounded-full bg-brand-dark/80 hover:bg-brand-dark
                   items-center justify-center text-white transition"
      >
        <HiChevronRight size={22} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              i === current
                ? 'bg-brand-dark scale-125'
                : 'bg-brand/40 hover:bg-brand/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
