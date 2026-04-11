import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';

const BATCH_TYPES = [
  { key: 'IB', label: 'Full course JEE/NEET (IB)' },
  { key: 'RB', label: 'Regular MHT-CET (RB)' },
  { key: 'TB', label: 'Target batch (TB)' },
];

const Schedule = ({ rows }) => (
  <div className="overflow-x-auto mt-5 rounded-xl">
    <table className="min-w-full text-sm border-collapse">
      <thead>
        <tr className="bg-brand text-white">
          <th className="px-4 py-3 text-left font-semibold whitespace-nowrap align-top max-w-[12rem]">
            Component
          </th>
          <th className="px-4 py-3 text-left font-semibold">Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([label, detail], ri) => (
          <tr
            key={label}
            className={ri % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}
          >
            <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-300 align-top whitespace-pre-line">
              {label}
            </th>
            <td className="px-4 py-3 text-gray-600 dark:text-gray-400 whitespace-pre-line align-top">
              {detail}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const IB_ROWS = [
  [
    'Teaching (6 Days / Week)',
    'Physics: 90 min./day\nChemistry: 90 min./day\nMaths/Biology: 90 min./day',
  ],
  [
    'DPP (Daily Practice Problem)',
    'Physics: 60 min./day\nChemistry: 60 min./day\nMaths/Biology: 60 min./day',
  ],
  ['Study time', '8 hrs / day'],
  ['Test series', 'Every 15 days — full-length test as per JEE/NEET pattern.'],
];

const RB_ROWS = [
  [
    'Teaching (4 Days / Week)',
    'Regular 90 min. lecture after college hours covering Board syllabus with MHT-CET syllabus.',
  ],
  ['Test series', 'Every 15 days — full-length test as per MHT-CET pattern.'],
];

const TB_ROWS = [
  [
    'Teaching (6 Days / Week)',
    'Physics: 90 min./day\nChemistry: 90 min./day\nMaths/Biology: 90 min./day',
  ],
  [
    'DPP (Daily Practice Problem)',
    'Physics: 60 min./day\nChemistry: 60 min./day\nMaths/Biology: 60 min./day',
  ],
  ['Study time', '8 hrs / day'],
  ['Test series', 'Every 7 days — full-length test as per JEE/NEET pattern.'],
];

const CONTENT = {
  IB: {
    rows: IB_ROWS,
    paras: [
      {
        bold: 'Integrated batch (IB):',
        text: 'For Class 11th & 12th aspirants targeting JEE and NEET with intensive weekly teaching, daily DPPs, and scheduled full-length tests.',
      },
    ],
  },
  RB: {
    rows: RB_ROWS,
    paras: [
      {
        bold: 'Regular MHT-CET (RB):',
        text: 'Structured around college timings: four teaching days per week with board-aligned lectures plus MHT-CET focus.',
      },
    ],
  },
  TB: {
    rows: TB_ROWS,
    paras: [
      {
        bold: 'Target batch (TB):',
        text: 'High-intensity schedule with more frequent full-length tests (every 7 days) for students in the final stretch of JEE/NEET preparation.',
      },
    ],
  },
};

const CourseJeeNeetSection = () => {
  const [active, setActive] = useState('IB');
  const { rows, paras } = CONTENT[active];

  return (
    <SectionWrapper>
      <h2 className="section-title">Courses — 11th &amp; 12th (JEE, NEET &amp; MHT-CET)</h2>
      <div className="title-divider" />
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
        Types of batches — choose a tab to view teaching hours, DPPs, study time, and test series for
        each programme.
      </p>
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
        <Schedule rows={rows} />
      </div>
    </SectionWrapper>
  );
};

export default CourseJeeNeetSection;
