import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Courses from '../components/sections/Courses';
import Testimonials from '../components/sections/Testimonials';
import FaqSection from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import ScrollTopButton from '../components/common/ScrollTopButton';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Courses />
    <Testimonials />
    <FaqSection />
    <ContactSection />
    <ScrollTopButton />
  </>
);

export default HomePage;
