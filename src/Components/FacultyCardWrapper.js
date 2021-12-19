import React from 'react';
import FacultyCard from './FacultyCard';
import '../Style/FacultyCard.css';

function FacultyCardWrapper() {
    return (
        <div>
            <h1 className="faculty-title">Our Top Faculty</h1>
            <div className="faculty-card-wrapper">
                <FacultyCard/>
                <FacultyCard/>
                <FacultyCard/>
                <FacultyCard/>
                <FacultyCard/>
                <FacultyCard/>
            </div>
        </div>
    )
}

export default FacultyCardWrapper
