import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LEGACY_REDIRECTS, PATHS } from './paths';

const HomePage = lazy(() => import('../pages/HomePage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const CourseSscPage = lazy(() => import('../pages/CourseSscPage'));
const GalleryClassroomPage = lazy(() => import('../pages/GalleryClassroomPage'));
const GalleryEventsPage = lazy(() => import('../pages/GalleryEventsPage'));
const GalleryCelebrationsPage = lazy(() => import('../pages/GalleryCelebrationsPage'));
const Course8thPage = lazy(() => import('../pages/Course8thPage'));

const PageSpinner = () => (
  <div className="flex justify-center items-center py-32">
    <div className="w-10 h-10 rounded-full border-4 border-brand/20 border-t-brand animate-spin" />
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<PageSpinner />}>
    <Routes>
      {/*
        Real routes must come before legacy redirects. Router matching is case-insensitive
        by default, so path="/SSC" would otherwise steal /ssc and render Navigate only.
      */}
      <Route path={PATHS.HOME} element={<HomePage />} />
      <Route path={PATHS.GALLERY} element={<GalleryPage />} />
      <Route path={PATHS.CONTACT} element={<ContactPage />} />
      <Route
        caseSensitive
        path={PATHS.COURSE_SSC}
        element={<CourseSscPage />}
      />
      <Route path={PATHS.COURSE_8TH_9TH} element={<Course8thPage />} />
      <Route path={PATHS.GALLERY_CLASSROOM} element={<GalleryClassroomPage />} />
      <Route path={PATHS.GALLERY_EVENTS} element={<GalleryEventsPage />} />
      <Route path={PATHS.GALLERY_CELEBRATIONS} element={<GalleryCelebrationsPage />} />

      {LEGACY_REDIRECTS.map(({ from, to }) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRoutes;
