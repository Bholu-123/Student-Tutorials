import { GALLERY } from './mediaPaths';
import { PATHS } from '../routes/paths';

/** Order: JEE/NEET first, then SSC, then 8th & 9th. `to` is the Learn More / card target. */
export const COURSES = [
  {
    image: `${GALLERY.classroom}/classroom-10.jpg`,
    title: 'JEE, NEET & MHT-CET (11th & 12th)',
    to: PATHS.COURSE_JEE_NEET,
    description:
      'Full-course JEE/NEET batches (IB), Regular MHT-CET (RB), and Target batches (TB) with daily teaching, DPPs, study hours, and periodic full-length tests as per exam patterns.',
  },
  {
    image: `${GALLERY.classroom}/classroom-29.jpg`,
    title: 'SSC (Class 10)',
    to: PATHS.COURSE_SSC,
    description:
      'Maharashtra State Board and CBSE Class 10: all subjects with dedicated faculty per subject. Early syllabus completion, structured revision, tests, and prelims aligned with SSC patterns.',
  },
  {
    image: `${GALLERY.classroom}/classroom-15.jpg`,
    title: 'Classes 8th & 9th',
    to: PATHS.COURSE_8TH_9TH,
    description:
      'Foundation batches for Class 8 and 9: balanced weekly schedule, evening options, and holiday intensives so concepts stay strong before board years.',
  },
];
