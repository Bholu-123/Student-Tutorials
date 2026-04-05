import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

const TABLE = {
  headers: ['Sessions', 'Evening Batch (3:15–6:15 pm)', 'Evening Batch (4:30–6:45 pm)', 'Long Holidays'],
  rows: [
    ['Starting Date', 'From 15th June 2022 onward', 'From 15th June 2022 onward', 'Ganpati Festival (7 days)'],
    ['Hrs / Day', '3', '2 hr 15 min', 'Diwali Vacations'],
    ['Days / Week', '6', '6', '—'],
  ],
};

const Course8thSection = () => (
  <SectionWrapper>
    <h2 className="section-title">Course — 8th &amp; 9th Std</h2>
    <div className="title-divider" />
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 md:p-8">
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
        <strong className="text-gray-900 dark:text-white">Strategy:</strong> Specially
        designed batches for all subjects of Maharashtra S.S.C. and CBSE with separate
        faculty for each subject.
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
        <strong className="text-gray-900 dark:text-white">Intensive coaching:</strong> More
        hours of coaching per subject for more practice. All concepts thoroughly explained
        so the base is strong for next year's boards.
      </p>
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-brand text-white">
              {TABLE.headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE.rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
                {row.map((cell, ci) =>
                  ci === 0
                    ? <th key={ci} className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">{cell}</th>
                    : <td key={ci} className="px-4 py-3 text-gray-600 dark:text-gray-400">{cell}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </SectionWrapper>
);

export default Course8thSection;
