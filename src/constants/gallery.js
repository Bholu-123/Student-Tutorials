import { SEG } from '../routes/paths';
import { GALLERY } from './mediaPaths';

/** Home gallery cards — use files that exist under gallery/classroom (DSC_* may be absent). */
export const GALLERY_CATEGORIES = [
  {
    image: `${GALLERY.classroom}/classroom-29.jpg`,
    title: 'Classroom',
    slug: SEG.GALLERY_CLASSROOM,
  },
  {
    image: `${GALLERY.events}/event-01.jpg`,
    title: 'Events',
    slug: SEG.GALLERY_EVENTS,
  },
  {
    image: `${GALLERY.celebrations}/celebration-05.jpg`,
    title: 'Celebrations',
    slug: SEG.GALLERY_CELEBRATIONS,
  },
];

const CLASSROOM_FROM = 10;
const CLASSROOM_TO = 29;

export const CLASSROOM_IMAGES = Array.from(
  { length: CLASSROOM_TO - CLASSROOM_FROM + 1 },
  (_, i) => ({
    src: `${GALLERY.classroom}/classroom-${String(CLASSROOM_FROM + i).padStart(2, '0')}.jpg`,
    caption: 'Classroom',
  })
);

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

const eventSrc = (n) =>
  `${GALLERY.events}/event-${String(n).padStart(2, '0')}.jpg`;

/** event-01..event-42 under public/gallery/events (numbered on disk). */
const EVENTS_NUMBERED_LAST = 42;

export const EVENTS_IMAGES = [
  ...Array.from({ length: 10 }, (_, i) => ({
    src: eventSrc(i + 1),
    caption: 'Annual Event',
  })),
  { src: `${GALLERY.classroom}/classroom-10.jpg`, caption: 'Drawing Competition' },
  { src: `${GALLERY.classroom}/classroom-11.jpg`, caption: 'Drawing Competition' },
  { src: `${GALLERY.classroom}/classroom-12.jpg`, caption: 'Drawing Competition' },
  { src: `${GALLERY.classroom}/classroom-13.jpg`, caption: 'Drawing Competition' },
  { src: `${GALLERY.classroom}/classroom-14.jpg`, caption: 'Drawing Competition' },
  { src: eventSrc(11), caption: 'Annual Event' },
  { src: eventSrc(12), caption: 'Annual Event' },
  ...Array.from({ length: EVENTS_NUMBERED_LAST - 12 }, (_, i) => ({
    src: eventSrc(13 + i),
    caption: 'Annual Event',
  })),
];
