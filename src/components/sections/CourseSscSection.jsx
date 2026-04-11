import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

const BATCH_TYPES = [
  { key: 'VCRB', label: 'Vacation Cum Regular Batch' },
  { key: 'VB', label: 'Vacation Batch' },
  { key: 'TB', label: 'Test Series Batch' },
];

const VCRB_TABLE = {
  headers: ['Sessions', 'Summer Vacation 1st', 'Summer Vacation 2nd', 'Regular (1st Term)', 'Diwali Vacation', 'Regular (2nd Term)'],
  rows: [
    ['Duration', '2nd week of April to 21st May', '6th June to 12th June', '16th June onward', 'All Days', 'After Vacation'],
    ['Hrs / Day', '4', '4', '2', '4', '2'],
    ['Days / Week', '7', '7', '6', '7', '6'],
  ],
};

const TB_TABLE = {
  headers: ['Sessions', '1st Term', 'Mid Term', 'After Diwali (Nov–Dec)', 'Prelims'],
  rows: [
    ['Duration', 'June to Sep.', '1st week of October', 'Nov. and Dec.', 'Jan and Feb'],
    ['Days of Test', 'Sunday & Thursday', 'Alternate days (2 papers/subject)', 'Sunday & Thursday', '3 Prelims'],
    ['Counseling', 'Once a month', 'After test series', 'Once a month', 'After each prelims'],
  ],
};

const VB_TABLE = {
  headers: ['Sessions', 'Summer Vacation 1st', 'Summer Vacation 2nd', 'Regular (1st Term)', 'Diwali Vacation', 'Regular (2nd Term)'],
  rows: [
    ['Duration', '2nd week of April to 21st May', '6th June to 12th June', '16th June onward', 'All Days', 'After Vacation'],
    ['Hrs / Day', '3', '3', '3', '3', '3'],
    ['Days / Week', '7', '7', 'Saturday only', '7', 'Saturday only'],
  ],
};

const Schedule = ({ table }) => (
  <div className="overflow-x-auto mt-5 rounded-xl">
    <table className="min-w-full text-sm border-collapse">
      <thead>
        <tr className="bg-brand text-white">
          {table.headers.map((h) => (
            <th key={h} className="px-4 py-3 text-left font-semibold whitespace-nowrap">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, ri) => (
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
);

const CONTENT = {
  VCRB: {
    table: VCRB_TABLE,
    paras: [
      { bold: 'Strategy:', text: 'Specially designed batches to take all subjects of Maharashtra S.S.C. and CBSE with separate faculty for each subject. Motto: "Early syllabus completion, More time for revision".' },
      { bold: 'Intensive coaching:', text: 'More hours of coaching per subject for more practice. All concepts thoroughly explained with numerous examples.' },
    ],
  },
  TB: {
    table: TB_TABLE,
    paras: [
      { bold: 'Test Series batch:', text: 'Designed for students who need help through tests only. We conduct weekly tests and prelims, check papers and provide answer keys. We guide students once a month for improvement.' },
      { bold: 'Regular Tests:', text: 'Frequent unit tests & several rounds of preliminary exams scheduled to not clash with school tests.' },
    ],
  },
  VB: {
    table: VB_TABLE,
    paras: [
      { bold: 'Strategy:', text: 'Designed for students who need self-study time rather than a daily packed schedule. Classes are conducted only twice a week during regular school days.' },
    ],
  },
};

const CourseSscSection = () => {
  const [active, setActive] = useState('VCRB');
  const { table, paras } = CONTENT[active];

  return (
    <SectionWrapper>
      <h2 className="section-title">Course — SSC</h2>
      <div className="title-divider" />
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {BATCH_TYPES.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200
              ${active === key
                ? 'bg-brand text-white shadow-md'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-brand/10 hover:text-brand'
              }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 md:p-8">
        {paras.map((p, i) => (
          <p key={i} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
            <strong className="text-gray-900 dark:text-white">{p.bold}</strong> {p.text}
          </p>
        ))}
        <Schedule table={table} />
      </div>
    </SectionWrapper>
  );
};

export default CourseSscSection;
