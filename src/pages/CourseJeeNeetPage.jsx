import React from 'react';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CourseJeeNeetSection from '../components/sections/CourseJeeNeetSection';
import { COURSES_SECTION_TO } from '../routes/paths';

const CourseJeeNeetPage = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
      <Breadcrumbs
        items={[
          { to: COURSES_SECTION_TO, label: 'Courses' },
          { label: 'JEE, NEET & MHT-CET' },
        ]}
      />
    </div>
    <CourseJeeNeetSection />
  </>
);

export default CourseJeeNeetPage;
