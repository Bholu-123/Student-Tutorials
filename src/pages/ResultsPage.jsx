import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionWrapper from '../components/common/SectionWrapper';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ResultsTabBar from '../components/results/ResultsTabBar';
import ResultStudentCard from '../components/results/ResultStudentCard';
import { STUDENT_RESULTS_SECTIONS, SECTION_ID_BY_RESULT_LISTING_SLUG } from '../constants/studentResults';
import { PATHS } from '../routes/paths';

const ResultsPage = () => {
  const { listingSlug } = useParams();
  const initialId = useMemo(() => {
    if (listingSlug && SECTION_ID_BY_RESULT_LISTING_SLUG[listingSlug]) {
      return SECTION_ID_BY_RESULT_LISTING_SLUG[listingSlug];
    }
    return STUDENT_RESULTS_SECTIONS[0]?.id ?? '';
  }, [listingSlug]);

  const [activeId, setActiveId] = useState(initialId);

  useEffect(() => {
    setActiveId(initialId);
  }, [initialId]);

  const active = STUDENT_RESULTS_SECTIONS.find((s) => s.id === activeId) ?? STUDENT_RESULTS_SECTIONS[0];

  const breadcrumbItems = listingSlug
    ? [{ to: PATHS.RESULTS, label: 'Results' }, { label: active?.title ?? 'Results' }]
    : [{ label: 'Results' }];

  return (
    <SectionWrapper>
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="section-title">Student results</h1>
      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 dark:text-gray-400">
        Highlights across MHT CET, SSC, medical admissions, and engineering programmes.
      </p>
      <div className="title-divider" />

      <div className="mb-8">
        <ResultsTabBar
          sections={STUDENT_RESULTS_SECTIONS}
          activeId={active?.id}
          onChange={(id) => setActiveId(id)}
        />
      </div>

      {active && (
        <section
          role="tabpanel"
          aria-labelledby={`results-tab-${active.id}`}
          className="space-y-4"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{active.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {active.subtitle} · {active.batchLabel}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{active.entries.length} entries</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {active.entries.map((entry, i) => (
              <ResultStudentCard key={`${entry.name}-${i}`} entry={entry} />
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to={PATHS.HOME}
              className="inline-flex items-center justify-center rounded-xl border-2 border-brand bg-transparent px-6 py-3 text-sm font-semibold text-brand
                         transition-colors hover:bg-brand hover:text-white dark:hover:text-gray-900"
            >
              Back to home
            </Link>
          </div>
        </section>
      )}
    </SectionWrapper>
  );
};

export default ResultsPage;
