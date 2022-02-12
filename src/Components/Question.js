import React from 'react';
import "../Style/Faq.css";

const Question = ({ question, answer, setActiveIndex,activeIndex, index }) => {
  return (
    <div className="question-wrapper">
      <div className="question" >
        <h3>{question}</h3>
        <button
          onClick={() => {
            if (activeIndex === index) {
              setActiveIndex(-1);
            } else {
              setActiveIndex(index);
            }
          }}
        >
          <svg
            className={index === activeIndex ? "active" : ""}
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
          </svg>
        </button>
      </div>
      <div className={index === activeIndex ? "answer active" : "answer"}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
