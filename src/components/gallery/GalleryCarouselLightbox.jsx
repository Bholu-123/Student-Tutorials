import React, { useCallback, useEffect, useRef } from 'react';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';

const mod = (n, m) => ((n % m) + m) % m;

const CarouselCard = ({ item, variant, onPick }) => {
  const isSide = variant === 'side';
  const isCenter = variant === 'center';
  const className = [
    'relative overflow-hidden rounded-2xl md:rounded-[1.75rem] border-0 p-0 text-left',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40',
    isSide
      ? 'hidden sm:block w-[22%] max-w-[200px] shrink-0 opacity-55 scale-[0.92] transition duration-300 hover:opacity-80'
      : 'w-full sm:w-[52%] max-w-3xl shrink-0 shadow-2xl z-10 transition duration-300',
  ].join(' ');

  const inner = (
    <div className={isSide ? 'aspect-[3/4]' : 'aspect-[4/5] sm:aspect-[3/4]'}>
      <img
        src={item.src}
        alt={item.caption || 'Gallery'}
        className="h-full w-full object-cover"
        draggable={false}
      />
    </div>
  );

  if (isCenter) {
    return (
      <div className={className} role="img" aria-label={item.caption || 'Gallery'}>
        {inner}
      </div>
    );
  }

  return (
    <button type="button" onClick={onPick} className={className}>
      {inner}
    </button>
  );
};

/**
 * Full-screen focal carousel: large center card, smaller neighbours, arrows, dots.
 */
const GalleryCarouselLightbox = ({ images, startIndex, onClose }) => {
  const [index, setIndex] = React.useState(startIndex);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const n = images.length;
  const prev = useCallback(() => setIndex((i) => mod(i - 1, n)), [n]);
  const next = useCallback(() => setIndex((i) => mod(i + 1, n)), [n]);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  if (!n) return null;

  const i = mod(index, n);
  const cur = images[i];
  const left = images[mod(i - 1, n)];
  const right = images[mod(i + 1, n)];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-900/85 p-3 sm:p-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close gallery"
      >
        <IoClose className="h-7 w-7" />
      </button>

      <div className="relative flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-0 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 sm:h-12 sm:w-12 md:left-1"
          aria-label="Previous image"
        >
          <IoChevronBack className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-0 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30 sm:h-12 sm:w-12 md:right-1"
          aria-label="Next image"
        >
          <IoChevronForward className="h-6 w-6" />
        </button>

        <div
          className="flex w-full max-w-5xl items-center justify-center gap-2 sm:gap-3 md:gap-4 px-10 sm:px-12"
          onClick={(e) => e.stopPropagation()}
        >
          <CarouselCard item={left} variant="side" onPick={prev} />
          <CarouselCard item={cur} variant="center" />
          <CarouselCard item={right} variant="side" onPick={next} />
        </div>

        <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 px-4">
          {images.map((_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setIndex(dot)}
              className={[
                'h-2 rounded-full transition-all',
                dot === i ? 'w-8 bg-zinc-700 dark:bg-zinc-200' : 'w-2 bg-zinc-300/80 hover:bg-zinc-200 dark:bg-zinc-600',
              ].join(' ')}
              aria-label={`Go to image ${dot + 1}`}
            />
          ))}
        </div>

        {cur.caption && (
          <p className="max-w-lg px-4 text-center text-sm text-zinc-200">{cur.caption}</p>
        )}
      </div>
    </div>
  );
};

export default GalleryCarouselLightbox;
