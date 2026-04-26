import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { TESTIMONIALS } from '../../constants/testimonials';
import { useInView } from '../../hooks/useInView';

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
  <article className="card-lift group flex h-full min-h-0 flex-col rounded-[1.75rem] border border-gray-100 bg-white p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03] transition-shadow duration-300 ease-in-out hover:shadow-[0_20px_48px_-14px_rgba(0,0,0,0.18)] dark:border-gray-700 dark:bg-gray-800">
    <div className="mb-6 border-b border-gray-100 pb-6 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt=""
          className="img-zoom-hover h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-brand/25 group-hover:scale-105"
        />
        <div className="min-w-0 text-left">
          <p className="font-bold text-gray-900 dark:text-gray-100">{name}</p>
          {branch ? (
            <p className="mt-0.5 text-sm font-semibold text-brand-dark dark:text-brand-light">{branch}</p>
          ) : null}
          {college ? (
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{college}</p>
          ) : null}
        </div>
      </div>
    </div>
    <div className="animate-quote-soft mb-4 text-5xl font-serif leading-none text-brand/30" aria-hidden>
      &ldquo;
    </div>
    <div className="min-h-0 flex-1">
      <QuoteBody text={text} />
    </div>
  </article>
);

const Testimonials = () => {
  const [headRef, headInView] = useInView({ threshold: 0.15, rootMargin: '80px 0px 80px 0px' });
  const [gridRef, gridInView] = useInView({ threshold: 0.1, rootMargin: '80px 0px 80px 0px' });

  return (
    <SectionWrapper id="testimonials" className="section-stripe-white relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[min(100vw,48rem)] -translate-x-1/2 rounded-[100%] bg-white/40 blur-3xl dark:bg-white/5"
        aria-hidden
      />

      <div ref={headRef} className={`reveal-heading ${headInView ? 'is-visible' : ''}`}>
        <h2 className="section-title">What Our Students Say</h2>
        <div className="title-divider" />
      </div>

      <div
        ref={gridRef}
        className={`reveal-stagger mx-auto grid max-w-6xl grid-cols-1 gap-6 auto-rows-fr md:grid-cols-2 md:items-stretch lg:grid-cols-3 ${
          gridInView ? 'is-visible' : ''
        }`}
      >
        {TESTIMONIALS.map((t, index) => (
          <div key={t.name} className="reveal-item" style={{ '--stagger': index }}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
