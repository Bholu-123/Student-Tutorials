import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Course8thSection from '../components/sections/Course8thSection';
import FaqSection from '../components/sections/FaqSection';
import { COURSE_FAQ_8TH_9TH } from '../constants/faq';
import { COURSES_SECTION_TO } from '../routes/paths';

const Course8thPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs
        items={[
          { to: COURSES_SECTION_TO, label: 'Courses' },
          { label: '8th & 9th' },
        ]}
      />
    </div>
    <Course8thSection />
    <FaqSection
      id="faq-8th-9th"
      title="Class 8th & 9th FAQs"
      items={COURSE_FAQ_8TH_9TH}
    />
  </>
);

export default Course8thPage;
