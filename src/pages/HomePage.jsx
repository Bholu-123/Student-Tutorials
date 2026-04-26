import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Courses from '../components/sections/Courses';
import ExcellenceLegacySection from '../components/sections/ExcellenceLegacySection';
import ScholorshipSection from '../components/sections/ScholorshipSection';
import ResultsPreviewSection from '../components/sections/ResultsPreviewSection';
import Testimonials from '../components/sections/Testimonials';
import FaqSection from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollTopButton from '../components/common/ScrollTopButton';

const HomePage = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash === '#courses') {
      const el = document.getElementById('courses');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [pathname, hash]);

  return (
    <>
      <Hero />
      <Courses />
      <ExcellenceLegacySection />
      <ScholorshipSection />
      <Features />
      <ResultsPreviewSection />
      <Testimonials />
      <FaqSection />
      <ContactSection />
      <ScrollTopButton />
    </>
  );
};

export default HomePage;
