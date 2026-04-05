import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { useScrollTop } from '../../hooks/useScrollTop';

const ScrollTopButton = () => {
  const { visible, scrollToTop } = useScrollTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
                  bg-brand hover:bg-brand-dark text-white shadow-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <HiArrowUp size={20} />
    </button>
  );
};

export default ScrollTopButton;
