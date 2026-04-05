import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionWrapper from '../common/SectionWrapper';
import { TESTIMONIALS } from '../../constants/testimonials';

const TestimonialCard = ({ image, name, text }) => (
  <div className="px-3 h-full">
    <div className="flex flex-col h-full p-6 rounded-2xl
                    bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-brand/30"
        />
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-100">{name}</h4>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic flex-1">
        "{text}"
      </p>
    </div>
  </div>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Testimonials = () => (
  <SectionWrapper id="testimonials" className="bg-gray-50 dark:bg-gray-900">
    <h2 className="section-title">What Our Students Say</h2>
    <div className="title-divider" />
    <Slider {...sliderSettings}>
      {TESTIMONIALS.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </Slider>
  </SectionWrapper>
);

export default Testimonials;
