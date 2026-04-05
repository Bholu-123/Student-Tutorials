import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactSection from '../components/sections/ContactSection';

const ContactPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs items={[{ label: 'Contact' }]} />
    </div>
    <ContactSection />
  </>
);

export default ContactPage;
