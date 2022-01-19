import React, { useState } from 'react';

const CourseJunior = ({
  match: {
    params: { id },
  },
}) => {
  console.log(id);
  const [type, setType] = useState("Batches");
  return (
    <div className="course-ssc">
      <h2>COURSE(SSC)</h2>
      <div className="title-border">
        <span></span>
      </div>
      <div className="course-ssc-content">
        <ul className="nav nav-pills nav-justified mb-3">
          <li
            className="ssc-nav-item"
            onClick={() => {
              setType("Batches");
            }}
          >
            <div className="svg-box">
              <img className="course-svg" src="./batches.svg" />
            </div>
            <span className="ssc-name">Batches</span>
          </li>
          <li
            className="ssc-nav-item"
            onClick={() => {
              setType("Shedule");
            }}
          >
            <div className="svg-box">
              <img className="course-svg" src="./shedule.svg" />
            </div>
            <span className="ssc-name">Schedule</span>
          </li>
          <li
            className="ssc-nav-item"
            onClick={() => {
              setType("Test Series");
            }}
          >
            <div className="svg-box">
              <img className="course-svg" src="./test.svg" />
            </div>
            <span className="ssc-name">Test Series</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseJunior;
