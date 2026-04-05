import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CourseSscSection from '../components/sections/CourseSscSection';

const CourseSscPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs items={[{ label: 'SSC' }]} />
    </div>
    <CourseSscSection />
  </>
);

export default CourseSscPage;
