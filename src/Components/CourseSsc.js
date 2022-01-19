import React, { useState } from 'react';
import "../Style/CourseSsc.css";
import CourseSscBody from './CourseSscBody';

export const CourseSsc = () => {
    const [type,setType]=useState("Batches");
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
          <CourseSscBody type={type} />
        </div>
      </div>
    );
}
