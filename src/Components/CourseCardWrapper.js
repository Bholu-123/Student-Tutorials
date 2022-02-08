import React from 'react';
import CourseCard from './CourseCard';
import '../Style/CourseCard.css';

function CourseCardWrapper() {
    const dummyData = [
      {
        image: "/Classes/DSC_6607.jpg",
        title: "SSC",
        para: "These batches are specially designed to take all subjects of Maharashtra S.S.C. and  CBSE in our classes with separate faculty for each subject. Our schedule is so planned , that we work on motto “Early syllabus completion, More time for revision ",
      },
      {
        image: "/Classes/DSC_6603.jpg",
        title: "For 8th and 9th std",
        para: "These batch is for 8th and 9th std those who need self study more rather then daily packed schedule,classes are conducted only 2 days a week during regular school days and students get enough time for self study.",
      },
    ];
    return (
      <div className="course-container">
        <h1 className="course-title">Course Offered</h1>
        {/* <div className="course-title-border">
          <span></span>
        </div> */}
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
