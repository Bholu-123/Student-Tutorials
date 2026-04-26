import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import { LANDING_COURSE_CARDS } from '../../constants/courses';
import { useInView } from '../../hooks/useInView';

const GoalCard = ({ image, label, to, ariaLabel }) => (
  <Link
    to={to}
    aria-label={ariaLabel}
    className="card-lift group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/6 transition-shadow duration-300 ease-in-out hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand dark:bg-gray-800 dark:ring-gray-700"
  >
    <div className="mb-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-xl bg-sky-50 dark:bg-sky-950/40 sm:h-40 sm:w-40">
      <img
        src={image}
        alt=""
        className="img-zoom-hover max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.06]"
        decoding="async"
      />
    </div>
    <span className="text-base font-semibold text-gray-900 dark:text-white">{label}</span>
    <span className="mt-2 text-xs font-medium text-brand">View details</span>
  </Link>
);

const Courses = () => {
  const [headRef, headInView] = useInView({ threshold: 0.15, rootMargin: '80px 0px 80px 0px' });
  const [gridRef, gridInView] = useInView({ threshold: 0.1, rootMargin: '80px 0px 80px 0px' });

  return (
    <SectionWrapper id="courses" className="section-stripe-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 rounded-full bg-brand/8 blur-3xl dark:bg-brand/10"
        aria-hidden
      />

      <div ref={headRef} className={`reveal-heading ${headInView ? 'is-visible' : ''}`}>
        <h2 className="section-title">Courses Offered</h2>
        <div className="title-divider" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400">
          Select a path below to open the full course details — 11th &amp; 12th is offered as separate
          JEE and NEET programmes, each with MHT-CET support.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`reveal-stagger mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4 ${gridInView ? 'is-visible' : ''}`}
      >
        {LANDING_COURSE_CARDS.map((c, index) => (
          <div key={c.id} className="reveal-item flex justify-center" style={{ '--stagger': index }}>
            <GoalCard {...c} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Courses;
