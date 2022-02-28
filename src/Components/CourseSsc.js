import React, { useState } from 'react';
import "../Style/CourseSsc.css";
import CourseSscBody from './CourseSscBody';

export const CourseSsc = () => {
    const [type,setType]=useState("VCRB");
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
                setType("VCRB");
              }}
            >
              <div
                className="svg-box"
                style={{ backgroundColor: type == "VCRB" ? "#a82682" : "" }}
              >
                <img className="course-svg" src="./batches.svg" />
              </div>
              <span
                className="ssc-name"
                style={{ color: type == "VCRB" ? "#a82682" : "" }}
              >
                Vacation Cum Regular Batch
              </span>
            </li>
            <li
              className="ssc-nav-item"
              onClick={() => {
                setType("VB");
              }}
            >
              <div
                className="svg-box"
                style={{ backgroundColor: type == "VB" ? "#a82682" : "" }}
              >
                <img className="course-svg" src="./batches.svg" />
              </div>
              <span
                className="ssc-name"
                style={{ color: type == "VB" ? "#a82682" : "" }}
              >
                Vacation Batch
              </span>
            </li>
            <li
              className="ssc-nav-item"
              onClick={() => {
                setType("TB");
              }}
            >
              <div
                className="svg-box"
                style={{ backgroundColor: type == "TB" ? "#a82682" : "" }}
              >
                <img className="course-svg" src="./batches.svg" />
              </div>
              <span
                className="ssc-name"
                style={{ color: type == "TB" ? "#a82682" : "" }}
              >
                Test Series Batch
              </span>
            </li>
          </ul>
          <CourseSscBody type={type} />
        </div>
      </div>
    );
}
