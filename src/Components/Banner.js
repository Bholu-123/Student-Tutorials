import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../assets/img1.jpg';
import image2 from './../assets/img2.jpg';
import image3 from './../assets/img3.jpg';
import '../Style/Banner.css';


const Banner = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="banner-image"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="banner-image"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="banner-image"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner;