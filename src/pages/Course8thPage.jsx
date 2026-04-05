import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Course8thSection from '../components/sections/Course8thSection';

const Course8thPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs items={[{ label: '8th & 9th Std' }]} />
    </div>
    <Course8thSection />
  </>
);

export default Course8thPage;
