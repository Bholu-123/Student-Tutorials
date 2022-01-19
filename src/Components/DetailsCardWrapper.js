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
        para: "Our experienced faculty strive hard for extensive coverage of all courses in the form of lectures, study material and tests to ensure that students cover everything.",
      },
      {
        image: "./2.jpg",
        title: "EXPERIENCED FACULTY",
        para: "Our faculty add experience and value to student’s learning constantly with advanced teaching techniques and quick doubt clarification.",
      },
      {
        image: "./3.jpg",
        title: "NETWORK OF SUCCESS",
        para: "Strongly networked community of successful students; Ex-students help our students build connections and offer career guidance.",
      },
      {
        image: "./4.jpg",
        title: "TESTS & ASSESSMENT",
        para: "Our topic-wise tests, major-tests and rigourous feedback mechanism help the students to know their level of understanding",
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
