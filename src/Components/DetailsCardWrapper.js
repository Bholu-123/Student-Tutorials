import React from "react";
import DetailsCard from "./DetailsCard";
import "../Style/DetailsCardWrapper.css";
import image1 from "../assets/img1.jpg";
import image2 from "./../assets/img2.jpg";
import image3 from "./../assets/img3.jpg";

function DetailsCardWrapper() {
    // const [data, setData] = React.useState([
    //   {
    //     image: image,
    //     title: "Details",
    //     para: "Lorem ipsum",
    //   },
    // ]);

    const dummyData = [
        {image: image1,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
        {image: image2,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
        {image: image3,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
        {image: image2,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
        {image: image3,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
        {image: image1,title: "Highly structured content",para: "card must look like this means Each card content an image of full width of card,heading and Paragraph"},
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
