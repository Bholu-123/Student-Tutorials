import React from 'react'
import TestimonialCard from './TestimonialCard';
import { NavLink as Link } from "react-router-dom"; 
import '../Style/AllTestimonials.css';

function AllTestimonials() {
    return (
        <div>
            <div className="allTestimonial-header">
               <div className="allTestimonial-header-content">
                  <h1 className="allTestimonial-heading">Students Tutorials Reviews</h1>
                  <Link to='/Contact' className='allTestimonial-contactBtn'>
                      CONTACT NOW
                  </Link> 
               </div>
            </div>
            <div className="allTestimonial-headerNext">
                <div className="allTestimonial-headerNext-content">
                    <h1 className="allTestimonial-heading2">Students Tutorials Reviews</h1>
                    <Link to='/SubmitReview' className='allTestimonial-submitReview'>
                        Submit Review
                    </Link> 
                </div>
            </div>
            <div className="allTestimonial-container">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </div>
        // <div className="allTestimonial-container">
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        //     <TestimonialCard/>
        // </div>
    )
}

export default AllTestimonials
