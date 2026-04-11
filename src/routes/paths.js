/**
 * Single source of truth for app URLs (kebab-case, SEO-friendly).
 * Course detail pages live under /courses/...
 */
export const SEG = {
  COURSE_SSC: 'ssc',
  COURSE_8TH_9TH: '8th-and-9th-std',
  COURSE_JEE_NEET: 'jee-neet-mhtcet',
  GALLERY_CLASSROOM: 'classroom-gallery',
  GALLERY_EVENTS: 'events-gallery',
  GALLERY_CELEBRATIONS: 'celebrations-gallery',
};

const COURSE_BASE = '/courses';

export const PATHS = {
  HOME: '/',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  COURSE_SSC: `${COURSE_BASE}/${SEG.COURSE_SSC}`,
  COURSE_8TH_9TH: `${COURSE_BASE}/${SEG.COURSE_8TH_9TH}`,
  COURSE_JEE_NEET: `${COURSE_BASE}/${SEG.COURSE_JEE_NEET}`,
  GALLERY_CLASSROOM: `/${SEG.GALLERY_CLASSROOM}`,
  GALLERY_EVENTS: `/${SEG.GALLERY_EVENTS}`,
  GALLERY_CELEBRATIONS: `/${SEG.GALLERY_CELEBRATIONS}`,
};

/** React Router `to` value — navbar "Courses" scrolls home to #courses. */
export const COURSES_SECTION_TO = { pathname: '/', hash: 'courses' };

/** Sub-album URLs (used for nav active state + breadcrumbs). */
export const GALLERY_SUB_PATHS = [
  PATHS.GALLERY_CLASSROOM,
  PATHS.GALLERY_EVENTS,
  PATHS.GALLERY_CELEBRATIONS,
];

export const isGalleryNavActive = (pathname) =>
  pathname === PATHS.GALLERY || GALLERY_SUB_PATHS.includes(pathname);

export const isCoursesNavActive = (pathname, hash = '') =>
  pathname.startsWith(`${COURSE_BASE}/`) ||
  (pathname === '/' && hash === '#courses');

/** Old URLs → new paths (keep bookmarks and external links working). */
export const LEGACY_REDIRECTS = [
  { from: '/SSC', to: PATHS.COURSE_SSC },
  { from: '/ssc', to: PATHS.COURSE_SSC },
  { from: '/8th-and-9th-std', to: PATHS.COURSE_8TH_9TH },
  { from: '/jee-neet-mhtcet', to: PATHS.COURSE_JEE_NEET },
  { from: '/ClassroomGallery', to: PATHS.GALLERY_CLASSROOM },
  { from: '/EventsGallery', to: PATHS.GALLERY_EVENTS },
  { from: '/CelebrationsGallery', to: PATHS.GALLERY_CELEBRATIONS },
  { from: '/8th-and-9th--Std', to: PATHS.COURSE_8TH_9TH },
];
