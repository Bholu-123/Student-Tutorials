import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../common/SectionWrapper';
import ResultsTabBar from '../results/ResultsTabBar';
import ResultStudentCard from '../results/ResultStudentCard';
import { STUDENT_RESULTS_SECTIONS, getResultsListingPath } from '../../constants/studentResults';
import { PATHS } from '../../routes/paths';

const PREVIEW_COUNT = 7;

const ResultsPreviewSection = () => {
  const [activeId, setActiveId] = useState(STUDENT_RESULTS_SECTIONS[0]?.id ?? '');

  const active = useMemo(
    () => STUDENT_RESULTS_SECTIONS.find((s) => s.id === activeId) ?? STUDENT_RESULTS_SECTIONS[0],
    [activeId],
  );

  const previewEntries = active?.entries.slice(0, PREVIEW_COUNT) ?? [];

  return (
    <SectionWrapper id="results" className="section-stripe-white">
      <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-100 md:text-4xl">
        A record of{' '}
        <span className="text-brand dark:text-brand-light">consistent excellence</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600 dark:text-gray-400">
        Outcomes across MHT CET, SSC board exams, medical admissions, and engineering programmes.
      </p>
      <div className="title-divider" />

      <div className="mb-8">
        <ResultsTabBar
          sections={STUDENT_RESULTS_SECTIONS}
          activeId={active?.id}
          onChange={setActiveId}
          tablistLabel="Preview result category"
        />
      </div>

      {active && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
          {previewEntries.map((entry, i) => (
            <ResultStudentCard key={`${active.id}-${entry.name}-${i}`} entry={entry} />
          ))}
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <Link
          to={getResultsListingPath(active?.id ?? STUDENT_RESULTS_SECTIONS[0].id)}
          className="inline-flex min-w-[200px] items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-base font-bold text-white shadow-md
                     transition-[transform,box-shadow] duration-200 hover:bg-brand-dark hover:shadow-lg active:scale-[0.99]
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:text-gray-900"
        >
          Explore all results
        </Link>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <Link to={PATHS.RESULTS} className="font-medium text-brand underline-offset-2 hover:underline dark:text-brand-light">
          View full results hub
        </Link>
      </p>
    </SectionWrapper>
  );
};

export default ResultsPreviewSection;
