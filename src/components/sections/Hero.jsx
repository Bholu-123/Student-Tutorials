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
    <div className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative h-[55vw] max-h-[640px] min-h-[260px]">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
              ${i === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                   w-10 h-10 rounded-full bg-white/20 hover:bg-white/40
                   flex items-center justify-center text-white transition"
      >
        <HiChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer
                   w-10 h-10 rounded-full bg-white/20 hover:bg-white/40
                   flex items-center justify-center text-white transition"
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
              i === current ? 'bg-brand scale-125' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
