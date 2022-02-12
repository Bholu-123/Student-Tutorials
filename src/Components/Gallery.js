import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Gallery.css";

const Gallery = ({image, title}) => {
    return (
      <div className="gallery-card-content">
        <div className="galley-card-imgBox">
          <img className="gallery-card-image" src={image} alt="" />
        </div>
        <div className="gallery-card-text">
          <h2 className="gallery-card-title">{title}</h2>
          <button className="gallery-card-btn card-btn">
            <Link className="gallery-card-link" to={`/${title}Gallery`}>
              View All
            </Link>
          </button>
        </div>
      </div>
    );
}

export default Gallery
