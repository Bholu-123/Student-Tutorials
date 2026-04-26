import { SEG } from '../routes/paths';
import { GALLERY } from './mediaPaths';

/** Home gallery: Campus + Events only. */
export const GALLERY_CATEGORIES = [
  {
    image: `${GALLERY.classroom}/campus-01.jpg`,
    title: 'Campus',
    slug: SEG.GALLERY_CLASSROOM,
  },
  {
    image: `${GALLERY.events}/annual-events/annual-event-01.jpg`,
    title: 'Events',
    slug: SEG.GALLERY_EVENTS,
  },
];

/** Number of `campus-NN.jpg` files in `public/gallery/classroom` (landing JPEGs excluded). */
export const CAMPUS_GALLERY_COUNT = 21;

export const CLASSROOM_IMAGES = Array.from({ length: CAMPUS_GALLERY_COUNT }, (_, i) => ({
  src: `${GALLERY.classroom}/campus-${String(i + 1).padStart(2, '0')}.jpg`,
  caption: 'Campus',
}));

const celebrationSrc = (n) =>
  `${GALLERY.celebrations}/celebration-${String(n).padStart(2, '0')}.jpg`;

/** celebration-01..celebration-17 under public/gallery/celebrations. */
const CELEBRATIONS_NUMBERED_LAST = 17;

export const CELEBRATIONS_IMAGES = [
  ...Array.from({ length: 6 }, (_, i) => ({
    src: celebrationSrc(i + 1),
    caption: 'Prize Distribution',
  })),
  ...Array.from({ length: 4 }, (_, i) => ({
    src: celebrationSrc(7 + i),
    caption: 'Teachers with Students',
  })),
  ...Array.from({ length: CELEBRATIONS_NUMBERED_LAST - 10 }, (_, i) => ({
    src: celebrationSrc(11 + i),
    caption: 'Celebration',
  })),
];
