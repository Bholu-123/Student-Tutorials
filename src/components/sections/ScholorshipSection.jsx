import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import { SCHOLORSHIP_BANNER_IMAGE } from '../../constants/mediaPaths';
import { PATHS } from '../../routes/paths';

const CONTACT_SCHOLORSHIP = `${PATHS.CONTACT}?course=Scholorship`;

const ScholorshipSection = () => (
  <SectionWrapper id="scholorship" className="section-stripe-theme relative overflow-hidden">
    <div
      className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 -translate-x-1/3 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15"
      aria-hidden
    />

    <div className="relative mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 md:text-4xl mb-2">
        <span className="text-gray-800 dark:text-gray-100">Scholarship</span>{' '}
        <span className="text-brand dark:text-brand-light">Exams</span>
      </h2>
      <div className="title-divider" />
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400">
        Identify your potential and win scholarships for a brighter future.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900 dark:ring-gray-700">
        <Link
          to={CONTACT_SCHOLORSHIP}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
          aria-label="Register for scholarship exams. Opens the contact page with Scholorship selected as the course."
        >
          <img
            src={SCHOLORSHIP_BANNER_IMAGE}
            alt=""
            decoding="async"
            className="block w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.01]"
          />
        </Link>
        <div className="flex justify-center border-t border-gray-100 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-900 sm:py-5">
          <Link
            to={CONTACT_SCHOLORSHIP}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-brand via-brand-light to-brand-dark px-8 py-3 text-sm font-bold text-white shadow-md ring-1 ring-black/10 transition duration-300 hover:shadow-lg hover:brightness-[1.03] sm:px-10 sm:py-3.5 sm:text-base dark:ring-white/10"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default ScholorshipSection;
