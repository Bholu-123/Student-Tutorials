import React, { useState } from 'react';
import GalleryCarouselLightbox from './GalleryCarouselLightbox';

/** Rotating aspect ratios for a Pinterest-style rhythm. */
const ASPECT_CLASSES = [
  'aspect-[5/6]',
  'aspect-[4/5]',
  'aspect-square',
  'aspect-[5/4]',
  'aspect-[3/4]',
];

/**
 * CSS columns masonry + lightbox with focal carousel.
 * @param {{ src: string, caption?: string, label?: string }[]} images
 */
const GalleryMasonry = ({ images }) => {
  const [lightbox, setLightbox] = useState(null);

  if (!images?.length) return null;

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 [&>button]:mb-3 sm:[&>button]:mb-4">
        {images.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setLightbox(i)}
            className={[
              'group break-inside-avoid block w-full cursor-zoom-in overflow-hidden rounded-xl bg-gray-100 shadow-md',
              'transition duration-300 hover:shadow-xl dark:bg-gray-800',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950',
            ].join(' ')}
          >
            <div className={`relative w-full overflow-hidden ${ASPECT_CLASSES[i % ASPECT_CLASSES.length]}`}>
              <img
                src={img.src}
                alt={img.caption || 'Gallery photo'}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {img.caption && (
                <div
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent
                             opacity-0 transition duration-300 group-hover:opacity-100"
                >
                  <span className="line-clamp-2 px-3 py-2 text-left text-xs font-medium text-white sm:text-sm">
                    {img.caption}
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <GalleryCarouselLightbox
          images={images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

export default GalleryMasonry;
