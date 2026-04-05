import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import SectionWrapper from '../common/SectionWrapper';
import { FAQ_ITEMS } from '../../constants/faq';

const FaqItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 text-left
                 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50
                 transition-colors duration-200"
    >
      <span className="font-semibold text-gray-800 dark:text-gray-100 pr-4">{question}</span>
      <HiChevronDown
        size={20}
        className={`flex-shrink-0 text-brand transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-60' : 'max-h-0'
      }`}
    >
      <p className="px-5 py-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed
                    border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
        {answer}
      </p>
    </div>
  </div>
);

const FaqSection = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <SectionWrapper id="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="title-divider" />
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {FAQ_ITEMS.map((item) => (
          <FaqItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={activeId === item.id}
            onToggle={() =>
              setActiveId((prev) => (prev === item.id ? null : item.id))
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FaqSection;
