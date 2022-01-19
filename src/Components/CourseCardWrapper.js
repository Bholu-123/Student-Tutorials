import React from 'react';
import CourseCard from './CourseCard';
import '../Style/CourseCard.css';

function CourseCardWrapper() {
    const dummyData = [
      {
        image: "./Classes/DSC_6607.JPG",
        title: "SSC",
        para: "These batch is specially designed for average students who need help in their study in daily basis. Here we cover the syllabus with moderate speed and all subjects are coved in these batch. ",
      },
      {
        image: "./Classes/DSC_6603.JPG",
        title: "Vacation Batch",
        para: "These batch is for those who need self study more rather then daily packed schedule,classes are conducted only 2 days a week during regular school days and students get enough time for self study.",
      },

      {
        image: "./Classes/DSC_2021.JPG",
        title: "Mathematics and Science",
        para: "These batch is for those who need self study more rather then daily packed schedule,classes are conducted only 2 days a week during regular school days and students get enough time for self study.",
      },
    ];
    return (
      <div className="course-container">
        <h1 className="course-title">Course Offered</h1>
        <div className="course-title-border">
          <span></span>
        </div>
        <div className="course-card-wrapper">
          {dummyData.map((element) => {
            return (
              <CourseCard
                image={element.image}
                title={element.title}
                para={element.para}
              />
            );
          })}
        </div>
      </div>
    );
}

export default CourseCardWrapper;
