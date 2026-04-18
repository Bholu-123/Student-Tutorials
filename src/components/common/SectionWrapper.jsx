import React, { forwardRef } from 'react';

const SectionWrapper = forwardRef(({ id, className = '', children }, ref) => (
  <section
    ref={ref}
    id={id}
    className={`py-16 md:py-20 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
));

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
