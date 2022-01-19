import React from 'react'
import Gallery from './Gallery';
import '../Style/Gallery.css';

const GalleryContainer = () => {
    const dummyData = [
      {
        image: "./Classes/DSC_6607.JPG",
        title: "Our Classroom",
      },
      {
        image: "./Classes/DSC_6607.JPG",
        title: "Annual Events",
      },

      {
        image: "./Classes/DSC_6627.JPG",
        title: "Celebrations",
      },
    ];
    return (
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-title-border">
          <span></span>
        </div>
        <div class="gallery-card">
          {dummyData.map((element) => {
            return <Gallery image={element.image} title={element.title} />;
          })}
        </div>
      </div>
    );
}

export default GalleryContainer
