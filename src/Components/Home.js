import React from 'react';
import Banner from './Banner';
import DetailsCardWrapper from './DetailsCardWrapper';
import CarouselTestimonial from "./CarouselTestimonial";
import FacultyCardWrapper from "./FacultyCardWrapper";

function Home() {
    return (
        <div>
            <Banner/>
            <DetailsCardWrapper/>
            <CarouselTestimonial/>
            <FacultyCardWrapper/>
        </div>
    )
}

export default Home
