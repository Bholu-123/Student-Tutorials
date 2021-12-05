import React from 'react'
import image from '../assets/img1.jpg';
import '../Style/TestimonialCard.css';

function TestimonialCard() {
    return (
        <div className="testimonial-card">
            <img  className="testimonial-image" src={image} alt="testimonial-image"/>
            <div className="testimonial-card-content">
                <h3 className="people-name">John</h3>
                <h3 className="people-job">Software Engineer at Google</h3>
                <div className="people-content-container">
                    <p className="people-content">I learned about SystemsExpert after watching one of Clement's free YouTube videos on System Design. 
                        I really liked the interview format that he used for tackling the problem so I figured I'd try SystemsExpert, which also uses that 
                        style. One of the things that I really got out of it was conveying confidence and using a very collaborative style while answering 
                        these questions. This tool was a big part of my successful interview prep and I'm very grateful to Clement and his team for creating 
                        this. Thanks guys!
                   </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
