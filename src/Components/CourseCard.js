import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../assets/img1.jpg';
import '../Style/CourseCard.css';

function CourseCard({ image, title, para }) {
  return (
    <div class="course-card">
      <div class="course-card-content">
        <div className="course-card-imgBox">
          <img class="course-card-image" src={image} />
        </div>
        <div class="course-card-text">
          <h2 class="course-card-title">{title}</h2>
          <p class="course-card-about">
            {para}
          </p>
          <button class="course-card-btn card-btn">
          <Link className="course-card-link" to={`/${title}`}>Read More</Link>
          </button>  
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

