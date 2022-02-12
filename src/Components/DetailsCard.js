import React from 'react'
import '../Style/DetailsCard.css'

function DetailsCard({image,title,para}) {
    return (
        <div className="details-card">
            <img src={image} alt="image" className="details-card-image"/>
            <h5 className="card-title">{title}</h5>
            <p className="card-para">{para}</p>
        </div>
    )
}

export default DetailsCard
