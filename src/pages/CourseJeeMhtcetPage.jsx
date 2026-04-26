import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CourseJeeNeetSection from '../components/sections/CourseJeeNeetSection';
import FaqSection from '../components/sections/FaqSection';
import { COURSE_FAQ_JEE_NEET } from '../constants/faq';
import { COURSES_SECTION_TO } from '../routes/paths';

const CourseJeeMhtcetPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs
        items={[
          { to: COURSES_SECTION_TO, label: 'Courses' },
          { label: '11th & 12th — JEE & MHT-CET' },
        ]}
      />
    </div>
    <CourseJeeNeetSection track="jee" />
    <FaqSection
      id="faq-jee-mhtcet"
      title="JEE / MHT-CET FAQs"
      items={COURSE_FAQ_JEE_NEET}
    />
  </>
);

export default CourseJeeMhtcetPage;
