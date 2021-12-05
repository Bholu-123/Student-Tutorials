import React from 'react'
import TestimonialCard from './TestimonialCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Style/TestimonialCard.css';
import LeftArrow from "../assets/left-arrow.svg"
import RightArrow from "../assets/right-arrow.svg"

const SamplePrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <img className="testimonial-prevArrow" src={LeftArrow} alt="prevArrow" {...props} />
);

const SampleNextArrow = ({ currentSlide, slideCount, ...props }) => (
  <img className="testimonial-nextArrow" src={RightArrow} alt="nextArrow" {...props} />
);

export default class CarouselTestimonial extends React.PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    };

    return (
      <div className="carousel-testimonial-container">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className="testimonial-card-wrapper">
            <div>
              <TestimonialCard/>
            </div>
            <div>
              <TestimonialCard/>
            </div>
            <div>
              <TestimonialCard/>
            </div>
            <div>
              <TestimonialCard/>
            </div>
            <div>
              <TestimonialCard/>
            </div>
            <div>
              <TestimonialCard/>
            </div>
        </Slider>
      </div>
    );
  }
}