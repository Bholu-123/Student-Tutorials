import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { COURSES } from '../../constants/courses';
import { useInView } from '../../hooks/useInView';

const CourseCard = ({ image, title, description, to }) => (
  <Link
    to={to}
    className="card-lift group flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow-md ring-1 ring-black/[0.04] transition-shadow duration-300 ease-in-out hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-800 dark:ring-gray-700 md:flex-row"
  >
    <div className="h-56 overflow-hidden md:h-auto md:w-2/5">
      <img
        src={image}
        alt={title}
        className="img-zoom-hover h-full w-full object-cover group-hover:scale-[1.05]"
      />
    </div>
    <div className="flex flex-col justify-center p-6 md:w-3/5">
      <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
      <div>
        <span className="inline-block">
          <Button size="sm" className="pointer-events-none">
            Learn More
          </Button>
        </span>
      </div>
    </div>
  </Link>
);

const Courses = () => {
  const [headRef, headInView] = useInView({ threshold: 0.15, rootMargin: '80px 0px 80px 0px' });
  const [listRef, listInView] = useInView({ threshold: 0.1, rootMargin: '80px 0px 80px 0px' });

  return (
    <SectionWrapper id="courses" className="section-stripe-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 rounded-full bg-brand/8 blur-3xl dark:bg-brand/10"
        aria-hidden
      />

      <div ref={headRef} className={`reveal-heading ${headInView ? 'is-visible' : ''}`}>
        <h2 className="section-title">Courses Offered</h2>
        <div className="title-divider" />
      </div>

      <div
        ref={listRef}
        className={`reveal-stagger mx-auto flex max-w-4xl flex-col gap-8 ${listInView ? 'is-visible' : ''}`}
      >
        {COURSES.map((c, index) => (
          <div key={c.to} className="reveal-item" style={{ '--stagger': index }}>
            <CourseCard {...c} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Courses;
