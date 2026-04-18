import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { TESTIMONIALS } from '../../constants/testimonials';

const HIGHLIGHT = 'Students Tutorial';

function QuoteBody({ text }) {
  const i = text.indexOf(HIGHLIGHT);
  if (i === -1) {
    return <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">{text}</p>;
  }
  return (
    <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
      {text.slice(0, i)}
      <span className="font-semibold text-[#f97316]">{HIGHLIGHT}</span>
      {text.slice(i + HIGHLIGHT.length)}
    </p>
  );
}

const TestimonialCard = ({ image, name, text, branch, college }) => (
  <article className="flex h-full min-h-0 flex-col rounded-[1.75rem] border border-gray-100 bg-white p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03] transition-shadow duration-300 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.16)] dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 text-5xl font-serif leading-none text-brand/30" aria-hidden>
        &ldquo;
      </div>
      <div className="min-h-0 flex-1">
        <QuoteBody text={text} />
      </div>
      <div className="mt-6 border-t border-gray-100 pt-6 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt=""
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-brand/25"
          />
          <div className="min-w-0 text-left">
            <p className="font-bold text-gray-900 dark:text-gray-100">{name}</p>
            {branch ? (
              <p className="mt-0.5 text-sm font-semibold text-brand-dark dark:text-brand-light">
                {branch}
              </p>
            ) : null}
            {college ? (
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{college}</p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
);

const Testimonials = () => (
  <SectionWrapper id="testimonials" className="section-stripe-white">
    <h2 className="section-title">What Our Students Say</h2>
    <div className="title-divider" />

    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 auto-rows-fr md:grid-cols-2 md:items-stretch lg:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
  </SectionWrapper>
);

export default Testimonials;
