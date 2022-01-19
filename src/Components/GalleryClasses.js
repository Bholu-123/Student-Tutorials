import React from 'react';
import "../Style/GalleryClasses.css";

const GalleryClasses = () => {
  return (
    <div className="classroom-gallery-container">
      <h1>Our Classroom</h1>
      <div className="classroom-gallery-content">
        <div class="classroom-gallery">
          <img src="./Classes/DSC_2021.jpg" alt="Image"/>
          <h2>Classroom</h2>
        </div>
        <div class="classroom-gallery">
          <img src="./Classes/DSC_6592.jpg" alt="Image"/>
          <h2>Classroom</h2>
        </div>
        <div class="classroom-gallery">
          <img src="./Classes/DSC_6603.jpg" alt="Image"/>
          <h2>Classroom</h2>
        </div>
        <div class="classroom-gallery">
          <img src="./Classes/DSC_6607.jpg" alt="Image"/>
          <h2>Classroom</h2>
        </div>
        <div class="classroom-gallery">
          <img src="./Classes/DSC_0270.jpg" alt="Image"/>
          <h2>Classroom</h2>
        </div>
      </div>
    </div>
  );
};

export default GalleryClasses;
