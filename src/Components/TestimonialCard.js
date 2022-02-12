import React from 'react'
import image from '../assets/img1.jpg';
import '../Style/TestimonialCard.css';

function TestimonialCard({image,Name,para}) {
    return (
        <div className="testimonial-card">
            <img  className="testimonial-image" src={image} alt="testimonial-image"/>
            <div className="testimonial-card-content">
                <h3 className="people-job">{Name}</h3>
                <div className="people-content-container">
                    <p className="people-content">
                        {para}
                   </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
