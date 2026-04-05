import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { COURSES } from '../../constants/courses';

const CourseCard = ({ image, title, description, slug }) => (
  <div
    className="flex flex-col md:flex-row rounded-2xl overflow-hidden
               bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex flex-col justify-center p-6 md:w-3/5">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <div>
        <Link to={`/${slug}`}>
          <Button size="sm">Learn More</Button>
        </Link>
      </div>
    </div>
  </div>
);

const Courses = () => (
  <SectionWrapper id="courses">
    <h2 className="section-title">Courses Offered</h2>
    <div className="title-divider" />
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      {COURSES.map((c) => (
        <CourseCard key={c.slug} {...c} />
      ))}
    </div>
  </SectionWrapper>
);

export default Courses;
