import React from "react";
import { Carousel } from "react-bootstrap";

// import image1 from "../assets/img1.jpg";
// import image2 from "./../assets/img2.jpg";
import image3 from "./../assets/img3.jpg";
import "../Style/Banner.css";

const Banner = () => {
  return (
    <Carousel
      fade={true}
      pause={false}
      indicators={false}
      nextIcon={false}
      prevIcon={false}
    >
      <Carousel.Item interval={3000}>
        <img className="banner-image" src="./banner1.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="banner-image" src="./banner2.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="banner-image" src="./banner3.jpg" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="banner-image" src="./banner4.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
