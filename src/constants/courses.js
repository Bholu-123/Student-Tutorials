import { GALLERY } from './mediaPaths';
import { PATHS } from '../routes/paths';

/**
 * Landing “Courses Offered” tiles — artwork from `public/gallery/courses/`.
 * Doctor → NEET track, Engineer → JEE track; 8th–9th and SSC keep dedicated pages.
 */
export const LANDING_COURSE_CARDS = [
  {
    id: 'doctor',
    image: `${GALLERY.courses}/course-doctor.png`,
    label: 'Doctor',
    to: PATHS.COURSE_NEET_MHTCET,
    ariaLabel: 'Doctor — NEET and MHT-CET (11th and 12th)',
  },
  {
    id: 'engineer',
    image: `${GALLERY.courses}/course-engineer.png`,
    label: 'Engineer',
    to: PATHS.COURSE_JEE_MHTCET,
    ariaLabel: 'Engineer — JEE and MHT-CET (11th and 12th)',
  },
  {
    id: '8th-9th',
    image: `${GALLERY.courses}/course-8th-9th.png`,
    label: '8th & 9th',
    to: PATHS.COURSE_8TH_9TH,
    ariaLabel: 'Classes 8 and 9',
  },
  {
    id: 'ssc',
    image: `${GALLERY.courses}/course-10th.png`,
    label: 'SSC',
    to: PATHS.COURSE_SSC,
    ariaLabel: 'SSC Class 10',
  },
];
