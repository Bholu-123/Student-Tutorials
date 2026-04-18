import React from 'react';
import { HiDownload } from 'react-icons/hi';
import SectionWrapper from '../common/SectionWrapper';
import { FEATURES } from '../../constants/features';

const BROCHURE_HEADLINE = "Architurn's Student Tutorial";
const BROCHURE_SUBTEXT =
  'Expert coaching for SSC, 8th and 9th Std, and integrated JEE/NEET/CET preparation in Chiplun.';

const FeatureCard = ({ image, title, para }) => (
  <div className="flex h-full min-h-0 flex-col rounded-2xl border border-gray-200/90 bg-white p-6 text-center shadow-md ring-1 ring-black/[0.04] transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
    <h3 className="mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{para}</p>
    <div className="relative mx-auto mt-auto w-full max-w-[200px]">
      <span
        className="pointer-events-none absolute -left-1 -top-1 z-1 h-6 w-6 border-l-2 border-t-2 border-brand-dark"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-1 -right-1 z-1 h-6 w-6 border-b-2 border-r-2 border-brand-dark"
        aria-hidden
      />
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-50 shadow-[0_6px_20px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/90 dark:bg-gray-900 dark:ring-gray-600">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  </div>
);

const Features = () => (
  <SectionWrapper id="features" className="section-stripe-theme">
    <h2 className="section-title">
      Our Salient <span className="text-brand">Features</span>
    </h2>
    <div className="title-divider" />

    <div className="mx-auto grid max-w-6xl grid-cols-1 auto-rows-fr gap-6 sm:grid-cols-2 sm:items-stretch lg:grid-cols-3">
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>

    <div className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-6 shadow-md ring-1 ring-black/[0.04] dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 md:text-2xl">
            {BROCHURE_HEADLINE}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
            {BROCHURE_SUBTEXT}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center md:items-end">
          <a
            href="/Broucher-2025.pdf"
            download="Broucher-2025.pdf"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            Download Brochure
            <HiDownload className="h-5 w-5 text-white" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Features;
