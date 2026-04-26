import React from 'react';
import { HiDownload } from 'react-icons/hi';
import SectionWrapper from '../common/SectionWrapper';
import { FEATURES } from '../../constants/features';
import { BROCHURE_DOWNLOADS } from '../../constants/brochures';
import { useInView } from '../../hooks/useInView';

const BROCHURE_HEADLINE = "Architurn's Student Tutorial";
const BROCHURE_SUBTEXT =
  'Expert coaching for SSC, 8th and 9th Std, and integrated JEE/NEET/CET preparation in Chiplun.';

const FeatureCard = ({ image, title, para }) => (
  <div className="card-lift group flex h-full min-h-0 flex-col rounded-2xl border border-gray-200/90 bg-white p-6 text-center shadow-md ring-1 ring-black/4 transition-shadow duration-300 ease-in-out hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
    <h3 className="mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-gray-100">{title}</h3>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{para}</p>
    <div className="relative mx-auto mt-auto w-full max-w-[200px]">
      <span
        className="animate-gentle-float pointer-events-none absolute -left-1 -top-1 z-1 h-6 w-6 border-l-2 border-t-2 border-brand-dark"
        aria-hidden
      />
      <span
        className="animate-gentle-float pointer-events-none absolute -bottom-1 -right-1 z-1 h-6 w-6 border-b-2 border-r-2 border-brand-dark [animation-delay:0.6s]"
        aria-hidden
      />
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-50 shadow-[0_6px_20px_rgba(0,0,0,0.08)] ring-1 ring-gray-200/90 dark:bg-gray-900 dark:ring-gray-600">
        <img
          src={image}
          alt={title}
          className="img-zoom-hover h-full w-full object-cover group-hover:scale-[1.05]"
        />
      </div>
    </div>
  </div>
);

const Features = () => {
  const [headRef, headInView] = useInView({ threshold: 0.15, rootMargin: '80px 0px 80px 0px' });
  const [blockRef, blockInView] = useInView({ threshold: 0.1, rootMargin: '80px 0px 80px 0px' });

  return (
    <SectionWrapper id="features" className="section-stripe-theme relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl dark:bg-brand/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-light/15 blur-3xl dark:bg-brand-light/5"
        aria-hidden
      />

      <div ref={headRef} className={`reveal-heading ${headInView ? 'is-visible' : ''}`}>
        <h2 className="section-title">
          Our Salient <span className="text-brand">Features</span>
        </h2>
        <div className="title-divider" />
      </div>

      <div ref={blockRef} className="relative mx-auto max-w-6xl space-y-14">
        <div
          className={`reveal-stagger mx-auto grid max-w-6xl grid-cols-1 auto-rows-fr gap-6 sm:grid-cols-2 sm:items-stretch lg:grid-cols-3 ${
            blockInView ? 'is-visible' : ''
          }`}
        >
          {FEATURES.map((f, index) => (
            <div key={f.title} className="reveal-item" style={{ '--stagger': index }}>
              <FeatureCard {...f} />
            </div>
          ))}
        </div>

        <div
          className={`reveal-fade mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200/90 bg-white p-6 shadow-md ring-1 ring-black/4 transition-shadow duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:p-8 ${
            blockInView ? 'is-visible' : ''
          }`}
        >
          <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="max-w-xl flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 md:text-2xl">
                {BROCHURE_HEADLINE}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
                {BROCHURE_SUBTEXT}
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:mx-auto sm:max-w-lg sm:flex-row md:mx-0 md:w-[min(100%,28rem)] md:shrink-0">
              {BROCHURE_DOWNLOADS.map(({ id, label, href, downloadAs }) => (
                <a
                  key={id}
                  href={href}
                  download={downloadAs}
                  className="btn-cta-soft group/cta inline-flex min-h-12 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  {label}
                  <HiDownload
                    className="relative z-10 h-5 w-5 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover/cta:translate-y-0.5"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
