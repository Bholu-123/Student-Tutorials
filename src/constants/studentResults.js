import { studentPortraitUrl } from './mediaPaths';

/** @typedef {'percentile' | 'percentage' | 'admission'} ResultsEntryKind */

/**
 * @typedef {Object} ResultsEntry
 * @property {string} name
 * @property {ResultsEntryKind} kind
 * @property {string} [headline] — percentile, percentage, or course name
 * @property {string} [detail] — rank line, college, etc.
 * @property {string | null} image — full public URL (`/gallery/Students/...`) or null
 */

const p = (filename) => (filename ? studentPortraitUrl(filename) : null);

/** URL slug for `/result-listing/<slug>` (stable links from the landing preview). */
export const RESULT_LISTING_SLUG_BY_SECTION_ID = {
  'mht-cet': 'mht-cet-results',
  ssc: 'ssc-results',
  'medical-admissions': 'medical-admissions-results',
  'engineering-admissions': 'engineering-admissions-results',
};

/** @type {Record<string, string>} */
export const SECTION_ID_BY_RESULT_LISTING_SLUG = Object.fromEntries(
  Object.entries(RESULT_LISTING_SLUG_BY_SECTION_ID).map(([sectionId, slug]) => [slug, sectionId]),
);

export const getResultsListingPath = (sectionId) =>
  `/result-listing/${RESULT_LISTING_SLUG_BY_SECTION_ID[sectionId]}`;

export const STUDENT_RESULTS_SECTIONS = [
  {
    id: 'mht-cet',
    title: 'MHT CET',
    subtitle: 'Percentile scores',
    batchLabel: 'Recent cohort',
    entries: /** @type {ResultsEntry[]} */ ([
      {
        name: 'Ishita Jadhav',
        kind: 'percentile',
        headline: '98.84',
        detail: 'percentile',
        image: p('Ishita Jadhav.jpg'),
      },
      {
        name: 'Vedika Hake',
        kind: 'percentile',
        headline: '81.50',
        detail: 'percentile',
        image: p('Vedika hake.jpg'),
      },
      {
        name: 'Mrunal Pawar',
        kind: 'percentile',
        headline: '96.00',
        detail: 'percentile',
        image: null,
      },
      {
        name: 'Zora Lambade',
        kind: 'percentile',
        headline: '90.00',
        detail: 'percentile',
        image: p('Zara lambade.jpg'),
      },
      {
        name: 'Mihir Sakpal',
        kind: 'percentile',
        headline: '89.00',
        detail: 'percentile',
        image: p('Mihir sakpal.jpg'),
      },
      {
        name: 'Madina Kacchi',
        kind: 'percentile',
        headline: '85.00',
        detail: 'percentile',
        image: null,
      },
      {
        name: 'Piyang Sume',
        kind: 'percentile',
        headline: '84.00',
        detail: 'percentile',
        image: null,
      },
      {
        name: 'Rehan Pathan',
        kind: 'percentile',
        headline: '81.00',
        detail: 'percentile',
        image: p('Rehan Pathan.jpg'),
      },
      {
        name: 'Manisha Chavan',
        kind: 'percentile',
        headline: '80.00',
        detail: 'percentile',
        image: null,
      },
      {
        name: 'Rikeen Ranjane',
        kind: 'percentile',
        headline: '80.00',
        detail: 'percentile',
        image: p('Rikeen Ranjane.jpg'),
      },
    ]),
  },
  {
    id: 'ssc',
    title: 'SSC (Std. 10)',
    subtitle: 'Board examination',
    batchLabel: 'Batch 2024–25',
    entries: /** @type {ResultsEntry[]} */ ([
      {
        name: 'Omkar Shinde',
        kind: 'percentage',
        headline: '98.2%',
        detail: '1st in Christ Jyoti School',
        image: p('Omkar shinde.jpg'),
      },
      {
        name: 'Swarali Rajapurkar',
        kind: 'percentage',
        headline: '93%',
        detail: null,
        image: p('Swarali Rajapurkar.jpg'),
      },
      {
        name: 'Mohd. Saad Gothe',
        kind: 'percentage',
        headline: '91%',
        detail: '3rd in Khadeeja School',
        image: p('Mohd.Saad Gothe.jpg'),
      },
      {
        name: 'Sarvesh Dundi',
        kind: 'percentage',
        headline: '91%',
        detail: null,
        image: p('Sarvesh Dundi.jpg'),
      },
      {
        name: 'Soham Rathod',
        kind: 'percentage',
        headline: '90%',
        detail: null,
        image: p('Soham Rathod.jpg'),
      },
      {
        name: 'Samina Kazi',
        kind: 'percentage',
        headline: '90%',
        detail: null,
        image: p('Sameena Kazi.jpg'),
      },
      {
        name: 'Sanchita Padwal',
        kind: 'percentage',
        headline: '89%',
        detail: null,
        image: p('Sanchita Padwal.jpg'),
      },
      {
        name: 'Tisha Khot',
        kind: 'percentage',
        headline: '89%',
        detail: null,
        image: p('Tisha Khot.jpg'),
      },
      {
        name: 'Vinayak Bahutale',
        kind: 'percentage',
        headline: '89%',
        detail: null,
        image: p('Vinayak Bahutale_.jpg'),
      },
      {
        name: 'Aman Kazi',
        kind: 'percentage',
        headline: '88%',
        detail: null,
        image: p('Aman Kazi.jpg'),
      },
    ]),
  },
  {
    id: 'medical-admissions',
    title: 'Medical & allied admissions',
    subtitle: 'MBBS, BDS, BAMS, BHMS',
    batchLabel: 'Batch 2024–25',
    entries: /** @type {ResultsEntry[]} */ ([
      {
        name: 'Ishita V. Jadhav',
        kind: 'admission',
        headline: 'MBBS',
        detail: 'Government Medical College, Ratnagiri',
        image: p('Ishita Jadhav.jpg'),
      },
      {
        name: 'Vedika C. Hake',
        kind: 'admission',
        headline: 'BDS',
        detail: 'Yogita Dental College, Khed',
        image: p('Vedika hake.jpg'),
      },
      {
        name: 'Mrunal C. Pawar',
        kind: 'admission',
        headline: 'BAMS',
        detail: 'YMT College, Mumbai',
        image: null,
      },
      {
        name: 'Mihir Sakpal',
        kind: 'admission',
        headline: 'BAMS',
        detail: 'D. Y. Patil College, Mumbai',
        image: p('Mihir sakpal.jpg'),
      },
      {
        name: 'Khushi Pandey',
        kind: 'admission',
        headline: 'BAMS',
        detail: 'National Institute of Ayurveda (Government), Jaipur',
        image: null,
      },
      {
        name: 'Zora Lambade',
        kind: 'admission',
        headline: 'BHMS',
        detail: 'Late Mrs. Housabai Homoeopathic Medical College and Hospital, Kolhapur',
        image: p('Zara lambade.jpg'),
      },
      {
        name: 'Bhakti Vaje',
        kind: 'admission',
        headline: 'BHMS',
        detail: 'Dapoli Homoeopathic Medical College, Dapoli',
        image: p('Bhakti waje.jpg'),
      },
      {
        name: 'Aditya Raj Sabane',
        kind: 'admission',
        headline: 'BAMS',
        detail: 'Rajiv Gandhi University of Health Sciences, Karnataka',
        image: p('Aditya Raj sabane.jpg'),
      },
    ]),
  },
  {
    id: 'engineering-admissions',
    title: 'Engineering admissions',
    subtitle: 'UG programmes',
    batchLabel: 'Batch 2024–25',
    entries: /** @type {ResultsEntry[]} */ ([
      {
        name: 'Divyang Surve',
        kind: 'admission',
        headline: 'AI Engineering',
        detail: 'Gharda Institute of Technology, Lote, Khed',
        image: p('Divyang surve.jpg'),
      },
      {
        name: 'Rikeen Ranjane',
        kind: 'admission',
        headline: 'AI Engineering',
        detail: 'Datta Meghe Engineering College, Mumbai',
        image: p('Rikeen Ranjane.jpg'),
      },
      {
        name: 'Rehan Pathan',
        kind: 'admission',
        headline: 'Mechanical Engineering',
        detail: 'Don Bosco Institute of Technology, Mumbai',
        image: p('Rehan Pathan.jpg'),
      },
      {
        name: 'Harsh Date',
        kind: 'admission',
        headline: 'Information Technology',
        detail: 'Don Bosco Institute of Technology, Mumbai',
        image: p('Harsh Date.jpg'),
      },
    ]),
  },
];
