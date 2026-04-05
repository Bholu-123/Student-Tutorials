import React from 'react';

const SectionWrapper = ({ id, className = '', children }) => (
  <section
    id={id}
    className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

export default SectionWrapper;
