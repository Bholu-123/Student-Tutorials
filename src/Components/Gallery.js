import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Gallery.css";

const Gallery = ({image, title}) => {
    return (
      <div class="gallery-card-content">
        <div className="galley-card-imgBox">
          <img class="gallery-card-image" src={image} alt="" />
        </div>
        <div class="gallery-card-text">
          <h2 class="gallery-card-title">{title}</h2>
          <button class="gallery-card-btn card-btn">
            <Link className="gallery-card-link" to={`/${title}Gallery`}>
              View All
            </Link>
          </button>
        </div>
      </div>
    );
}

export default Gallery
