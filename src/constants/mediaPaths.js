/** Public asset roots under /public — organized by gallery type. */
export const GALLERY = {
  banners: '/gallery/banners',
  classroom: '/gallery/classroom',
  courses: '/gallery/courses',
  events: '/gallery/events',
  celebrations: '/gallery/celebrations',
  features: '/gallery/features',
  testimonials: '/gallery/testimonials',
  /** Headshots for results / honours boards (`public/gallery/Students/`). */
  students: '/gallery/Students',
};

/** Safe URL for a filename inside `GALLERY.students` (spaces & special chars). */
export const studentPortraitUrl = (filename) => {
  if (!filename) return null;
  return `${GALLERY.students}/${encodeURIComponent(filename)}`;
};

export const BRAND = {
  logo: '/brand/logo.jpeg',
};

/** Scholarship exams promo (`public/gallery/Scholorship.jpeg`). */
export const SCHOLORSHIP_BANNER_IMAGE = '/gallery/Scholorship.jpeg';
