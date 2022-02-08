import React from "react";
import DetailsCard from "./DetailsCard";
import "../Style/DetailsCardWrapper.css";

function DetailsCardWrapper() {
    // const [data, setData] = React.useState([
    //   {
    //     image: image,
    //     title: "Details",
    //     para: "Lorem ipsum",
    //   },
    // ]);

    const dummyData = [
      {
        image: "./1.jpg",
        title: "WELL-CURATED STUDY MATERIAL",
        para: "Provision of highly structured content to the students. Content delivery in a systematic and easy way",
      },
      {
        image: "./2.jpg",
        title: "SPECIALIZED FACULTY TEAM",
        para: "Strong team of faculties specialized in their subject to teach the students in a curated style so that they could get the optimum result",
      },
      {
        image: "./3.jpg",
        title: "COMPETITIVE ENVIRONMENT",
        para: "There is a highly competitive environment for the students so that they could get motivated and work hard to achieve more",
      },
      {
        image: "./4.jpg",
        title: "TESTS & ASSESSMENT",
        para: "Carefully curated  assessments to reflect what a real day of exam might look like, filled with variety and appropriate difficulty",
      },
    ];
    return (
        <div className="details-container">
            <h1 className="details-heading">What is Student Tutorial?</h1>
            <div className="details-card-wrapper">
                {dummyData.map((element)=>{
                    return (
                        <DetailsCard
                          image={element.image}
                          title={element.title}
                          para={element.para}
                        />
                    )
                })
                }
            </div>
        </div>
    );
}

export default DetailsCardWrapper;
