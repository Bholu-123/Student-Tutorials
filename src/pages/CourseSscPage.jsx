import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CourseSscSection from '../components/sections/CourseSscSection';
import FaqSection from '../components/sections/FaqSection';
import { COURSE_FAQ_SSC } from '../constants/faq';
import { COURSES_SECTION_TO } from '../routes/paths';

const CourseSscPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs
        items={[
          { to: COURSES_SECTION_TO, label: 'Courses' },
          { label: 'SSC (Class 10)' },
        ]}
      />
    </div>
    <CourseSscSection />
    <FaqSection
      id="faq-ssc"
      title="Class 10 (SSC/CBSE) FAQs"
      items={COURSE_FAQ_SSC}
    />
  </>
);

export default CourseSscPage;
