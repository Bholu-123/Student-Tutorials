import React, { useEffect, useState } from 'react';
import "../Style/Faq.css";
import Question from './Question';
import Searchbar from './Searchbar';

const questions = [
  {
    id: 1,
    question: "Why coaching classes are important ?",
    answer:
      "Due to increasing competitive entrance exams after H.S.C.  base Should be cleared from 9th and 10th std. and hence syllabus demands more hours of study, better concept understanding, more test and closer monitoring of students",
  },

  {
    id: 2,
    question:
      "How we are different from other coachings?",
    answer:
      "Coaching for 2 to 3 subjects is not sufficient for overall good performance in boards. That’s why we provide coaching of each subject by professional  and experienced supervisions.",
  },

  {
    id: 3,
    question:
      "What is our Test series plan ? How its gonna help boosting your performance ?",
    answer:
      "This batch is designed for the students who need help in evaluating their preparation. We conduct weekly test , check answers sheets and also provide answer key of each test paper. Provide guidance to students once in a month to improve",
  },
  {
    id: 4,
    question:
      "How is our vacation batch planned?Search on your phone or tablet?",
    answer:
      "This batch is for the students  who need self study more rather then daily packed schedule. Classes are conducted only 2 days a week during regular school days and students get enough time for self study.",
  },
  {
    id: 5,
    question: "How to reach out to us for any query ?",
    answer:
      "Provided a conatct form , fill that form and we will get back to you. Its for students and parents as well.This batch is for the students  who need self study more rather then daily packed schedule. Classes are conducted only 2 days a week during regular school days and students get enough time for self study.",
  },
];
const Faq = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = questions.filter((item) =>
      item.question.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="faqs">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently asked questions</h2>
        {/* <Searchbar onSearchChange={handleSearchChange} /> */}
        <div className="faq">
          {searchResults.map((item,i) => (
            <Question index={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
