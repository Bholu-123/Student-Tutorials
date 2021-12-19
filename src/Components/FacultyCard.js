import React from 'react';
import image from '../assets/img1.jpg';
import '../Style/FacultyCard.css';

function FacultyCard() {
    return (
        <div class="faculty-card">
            <div class="faculty-card-content">
                <div>
                    <img class="faculty-card-image" src={image}/>
                </div>
                <div class="faculty-card-text">
                    <h2 class="faculty-card-title">Bholu Tiwari</h2>
                    <p class="faculty-card-about">Competitive Programmer & web Developer</p>
                    <button class="faculty-card-btn card-btn">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default FacultyCard;

