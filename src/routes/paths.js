/**
 * Single source of truth for app URLs (kebab-case, SEO-friendly).
 * Use PATHS in NavLink/Link; use SEG in data slugs that become `/${slug}` links.
 */
export const SEG = {
  COURSE_SSC: 'ssc',
  COURSE_8TH_9TH: '8th-and-9th-std',
  GALLERY_CLASSROOM: 'classroom-gallery',
  GALLERY_EVENTS: 'events-gallery',
  GALLERY_CELEBRATIONS: 'celebrations-gallery',
};

export const PATHS = {
  HOME: '/',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  COURSE_SSC: `/${SEG.COURSE_SSC}`,
  COURSE_8TH_9TH: `/${SEG.COURSE_8TH_9TH}`,
  GALLERY_CLASSROOM: `/${SEG.GALLERY_CLASSROOM}`,
  GALLERY_EVENTS: `/${SEG.GALLERY_EVENTS}`,
  GALLERY_CELEBRATIONS: `/${SEG.GALLERY_CELEBRATIONS}`,
};

/** Sub-album URLs (used for nav active state + breadcrumbs). */
export const GALLERY_SUB_PATHS = [
  PATHS.GALLERY_CLASSROOM,
  PATHS.GALLERY_EVENTS,
  PATHS.GALLERY_CELEBRATIONS,
];

export const isGalleryNavActive = (pathname) =>
  pathname === PATHS.GALLERY || GALLERY_SUB_PATHS.includes(pathname);

export const isCoursesNavActive = (pathname) =>
  pathname === PATHS.COURSE_SSC || pathname === PATHS.COURSE_8TH_9TH;

/** Old URLs → new paths (keep bookmarks and external links working). */
export const LEGACY_REDIRECTS = [
  { from: '/SSC', to: PATHS.COURSE_SSC },
  { from: '/ClassroomGallery', to: PATHS.GALLERY_CLASSROOM },
  { from: '/EventsGallery', to: PATHS.GALLERY_EVENTS },
  { from: '/CelebrationsGallery', to: PATHS.GALLERY_CELEBRATIONS },
  { from: '/8th-and-9th--Std', to: PATHS.COURSE_8TH_9TH },
];
