import React from 'react';
import { HiArrowUp } from 'react-icons/hi';
import { useScrollTop } from '../../hooks/useScrollTop';

const ScrollTopButton = () => {
  const { visible, scrollToTop } = useScrollTop();

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-brand text-white shadow-lg
                  transition-all duration-300
                  max-md:bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] max-md:left-1/2 max-md:-translate-x-1/2
                  md:bottom-6 md:right-6 md:left-auto md:translate-x-0
                  ${visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}`}
    >
      <HiArrowUp size={20} />
    </button>
  );
};

export default ScrollTopButton;
