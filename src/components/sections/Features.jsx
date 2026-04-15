import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { FEATURES } from '../../constants/features';

const FeatureCard = ({ image, title, para }) => (
  <div
    className="flex flex-col items-center text-center p-6 rounded-2xl
               bg-white dark:bg-gray-800 shadow-md hover:shadow-xl
               hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 ring-brand/20">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-base font-bold text-gray-800 dark:text-gray-100 mb-3 uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{para}</p>
  </div>
);

const Features = () => (
  <SectionWrapper id="features">
    <h2 className="section-title">Our Salient Features</h2>
    <div className="title-divider" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {FEATURES.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  </SectionWrapper>
);

export default Features;
