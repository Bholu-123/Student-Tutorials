import { GALLERY } from './mediaPaths';

const pad2 = (n) => String(n).padStart(2, '0');

/**
 * Event gallery assets live under `public/gallery/events/<folder>/`.
 * Files: `<filePrefix>-01.jpg` … `<filePrefix>-NN.jpg` (same idea as `campus-NN.jpg`).
 *
 * To add photos: drop new sequentially numbered JPGs into the folder, then bump `count`.
 *
 * Renaming note (macOS default disk is case-insensitive): do not create `sports/` then
 * `rm -rf Sports/` — they are the same path. Stage under a distinct folder name first,
 * then rename to the final kebab-case folder.
 */
const EVENT_ALBUM_DEFS = [
  {
    id: 'braintor-exams',
    title: 'Braintor Exams',
    folder: 'braintor-exams',
    filePrefix: 'braintor-exam',
    count: 17,
    caption: 'Braintor Exam',
  },
  {
    id: 'scholarship-exams',
    title: 'Scholarship Exams',
    folder: 'scholarship-exams',
    filePrefix: 'scholarship-exam',
    count: 11,
    caption: 'Scholarship Exam',
  },
  {
    id: 'sports',
    title: 'Sports',
    folder: 'sports',
    filePrefix: 'sport',
    count: 19,
    caption: 'Sports',
  },
  {
    id: 'annual-events',
    title: 'Annual Events',
    folder: 'annual-events',
    filePrefix: 'annual-event',
    count: 41,
    caption: 'Annual Event',
  },
  {
    id: 'seminars',
    title: 'Seminars',
    folder: 'seminars',
    filePrefix: 'seminar',
    count: 44,
    caption: 'Seminar',
  },
];

const albumItems = ({ folder, filePrefix, count, caption }) =>
  Array.from({ length: count }, (_, i) => ({
    src: `${GALLERY.events}/${folder}/${filePrefix}-${pad2(i + 1)}.jpg`,
    caption,
  }));

/** Ordered event sub-albums for the Events gallery page. */
export const EVENT_GALLERY_ALBUMS = EVENT_ALBUM_DEFS.map((def) => ({
  id: def.id,
  title: def.title,
  items: albumItems(def),
}));
