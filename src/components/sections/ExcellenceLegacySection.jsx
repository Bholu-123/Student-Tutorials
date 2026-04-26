import React from 'react';
import { HiAcademicCap, HiOfficeBuilding, HiUserGroup } from 'react-icons/hi';
import SectionWrapper from '../common/SectionWrapper';
import { EXCELLENCE_LEGACY } from '../../constants/excellenceLegacy';
import { useInView } from '../../hooks/useInView';

const ICONS = {
  batches: HiOfficeBuilding,
  qualified: HiAcademicCap,
  faculty: HiUserGroup,
};

/** Matches lime / brand family used across CTAs, dividers, and accents. */
const iconTileClass =
  'bg-[#e8f0d4] text-brand-dark shadow-sm dark:bg-brand/20 dark:text-brand-light';

const ExcellenceLegacySection = () => {
  const [headRef, headInView] = useInView({ threshold: 0.2, rootMargin: '60px 0px' });
  const [gridRef, gridInView] = useInView({ threshold: 0.15, rootMargin: '60px 0px' });

  return (
    <SectionWrapper className="section-stripe-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-brand/8 blur-3xl dark:bg-brand/10"
        aria-hidden
      />

      <div ref={headRef} className={`reveal-heading mx-auto max-w-3xl text-center ${headInView ? 'is-visible' : ''}`}>
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          {EXCELLENCE_LEGACY.line1}
          <br />
          <span className="text-brand dark:text-brand-light">{EXCELLENCE_LEGACY.line2}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
          {EXCELLENCE_LEGACY.subtitle}
        </p>
      </div>

      <div
        ref={gridRef}
        className={`reveal-stagger mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 ${gridInView ? 'is-visible' : ''}`}
      >
        {EXCELLENCE_LEGACY.stats.map((s, index) => {
          const Icon = ICONS[s.id] ?? HiAcademicCap;
          return (
            <div
              key={s.id}
              className="reveal-item flex flex-col items-center text-center"
              style={{ '--stagger': index }}
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${iconTileClass}`}>
                <Icon className="h-8 w-8" aria-hidden />
              </div>
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">{s.value}</p>
              <p className="mt-1 max-w-56 text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ExcellenceLegacySection;
