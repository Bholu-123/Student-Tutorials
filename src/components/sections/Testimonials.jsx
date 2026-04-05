import React, { useState, useEffect, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from '../common/SectionWrapper';
import { TESTIMONIALS } from '../../constants/testimonials';

function getSlidesToShow() {
  if (typeof window === 'undefined') return 1;
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  useEffect(() => {
    const onResize = () => setSlidesToShow(getSlidesToShow());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return slidesToShow;
}

const TestimonialCard = ({ image, name, text }) => (
  <div className="px-2 sm:px-3 h-full min-w-0">
    <div className="flex flex-col h-full p-5 sm:p-6 rounded-2xl
                    bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 min-w-0">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full object-cover ring-2 ring-brand/30"
        />
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-snug">
            {name}
          </h4>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic flex-1 wrap-break-word">
        "{text}"
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const slidesToShow = useSlidesToShow();

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true,
      arrows: false,
      adaptiveHeight: true,
    }),
    [slidesToShow]
  );

  return (
    <SectionWrapper id="testimonials" className="bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title">What Our Students Say</h2>
      <div className="title-divider" />
      <div className="testimonials-slider -mx-1 sm:mx-0">
        <Slider key={slidesToShow} {...sliderSettings}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
