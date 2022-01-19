import React, { useState } from 'react';
import Banner from './Banner';
import DetailsCardWrapper from './DetailsCardWrapper';
import CarouselTestimonial from "./CarouselTestimonial";
import CourseCardWrapper from "./CourseCardWrapper";
import Footer from './Footer';
import GalleryContainer from './GalleryContainer';
import Contact from './Contact';

function Home() {
    const [counter, setCounter] = useState(0);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 200) {
        setVisible(true);
      } else if (scrolled <= 200) {
        setVisible(false);
      }
    };

    React.useEffect(() => {
      const event = window.addEventListener("scroll", toggleVisible);

      return () => event;
    }, []);
    return (
      <div>
        <DetailsCardWrapper />
        <CourseCardWrapper />
        <CarouselTestimonial />
        <GalleryContainer />
        <Contact />
        <img
          src="/bx-up-arrow-alt.svg"
          onClick={scrollToTop}
          style={{
            zIndex: "100",
            position: "fixed",
            height: "40px",
            width: "40px",
            bottom: "5vh",
            right: "1.8rem",
            boderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "#a82682",
            cursor: "pointer",
            display: visible ? "inline" : "none",
          }}
          className="tapTop"
        />
      </div>
    );
}

export default Home
