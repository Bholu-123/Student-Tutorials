import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../assets/img1.jpg';
import '../Style/CourseCard.css';

function CourseCard({ image, title, para }) {
  const arr = title.split(" ");
  const newTitle = arr.reduce((acc, em) => (em+"-"+acc),"");

  return (
    <div className="course-card">
      <div className="course-card-content">
        <div className="course-card-imgBox">
          <img className="course-card-image" src={image} />
        </div>
        <div className="course-card-text">
          <h2 className="course-card-title">{title}</h2>
          <p className="course-card-about">{para}</p>
          <button className="course-card-btn card-btn">
            <Link
              className="course-card-link"
              to={`/${newTitle.substr(0, newTitle.length - 1)}`}
            >
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

