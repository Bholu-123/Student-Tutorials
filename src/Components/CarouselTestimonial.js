import React from "react";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink as Link } from "react-router-dom";
import Slider from "react-slick";
import "../Style/TestimonialCard.css";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

const dummyData = [
  {
    image: "/Mughdha mudaliyar.png",
    Name: "Mughdha mudaliyar",
    para: "Unique ability of Student's Tutorial is the individual attention towards each student. Each and every subject is very well taught and made simple with fun.   Mathematics subject which was tough for me, was made so easy to me by the sir. The teachers are putting so much effort to pick up each student and imparting in depth knowledge in each topic.",
  },
  {
    image: "/Atharva Tambat.png",
    Name: "Atharva Tambat",
    para: "The experience was amazing with student's tutorial Mathematics subject was well taught and explained more than twice.Science-2 subject was a bit difficult for me,but science-2 ma'am gave easy abbreviations to remember the topics.Personally,languages teacher helped me to improve my writing skills,Fundamentally they taught how to begin the writing skills rather than expand it.Teachers used to motivated all of us when we laged in any subject.",
  },
  {
    image: "/Atharva Kanade.png",
    Name: "Atharva Kanade",
    para: "I am very lucky to get admission in student's tutorial at the right time. My preparation was not that impressive but here by the guidance of wonderful faculty team I made significant progress and scored more than decent marks in boards. All the credit goes to faculty team and regular tests which helped me measure my progress.",
  },
  {
    image: "/Ishita Jadhav.png",
    Name: "Ishita Jadhav",
    para: "I would appreciate students tutorial team to guide me and helping me making my foundation strong. Revision classes and unit wise test helped me realizing my weak points so that I could work on it and improve further. Thankful to them since I landed scoring a good percentage in boards.",
  },
  {
    image: "/Yash Shirke.png",
    Name: "Yash Shirke",
    para: "Most important lesson of life i learn here is, preparation is always key to success rather then to wait till declaration of exam dates here teachers always guide how you should utilise your time in studys.",
  },
];

export default class CarouselTestimonial extends React.PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover:true,
      nextArrow: false,
      prevArrow: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="carousel-testimonial-container">
        <h2 className="carousel-testimonial-title">Testimonials</h2>
        <div className="testimonials-title-border">
          <span></span>
        </div>
        <Slider {...settings} className="testimonial-card-wrapper">
            {dummyData.map((element) => {
              return (
                <div>
                  <TestimonialCard
                    image={element.image}
                    Name={element.Name}
                    para={element.para}
                  />
                </div>
              );
            })}
        </Slider>
        {/* <Link to="/allTestimonials" className="read-testimonials-btn">
          Read More Testimonials
        </Link> */}
      </div>
    );
  }
}
