/**
 * PDFs in `/public`. Filenames contain `&` — build hrefs with encodeURIComponent so links resolve.
 */
const rootPdf = (filename) => `/${encodeURIComponent(filename)}`;

/** One brochure for Class 8th–9th and Class 10 (SSC). */
export const BROCHURE_8TH_9TH_AND_SSC_HREF = rootPdf('8th&9th-Broucher-2025.pdf');

export const BROCHURE_JEE_NEET_HREF = rootPdf('Jee&Neet-Broucher-2025.pdf');

export const BROCHURE_DOWNLOADS = [
  {
    id: 'foundation-ssc',
    label: '8th, 9th & 10th SSC brochure',
    href: BROCHURE_8TH_9TH_AND_SSC_HREF,
    downloadAs: 'Students-Tutorial-8th-10th-SSC-2025.pdf',
  },
  {
    id: 'jee-neet',
    label: 'JEE & NEET brochure',
    href: BROCHURE_JEE_NEET_HREF,
    downloadAs: 'Students-Tutorial-JEE-NEET-2025.pdf',
  },
];
