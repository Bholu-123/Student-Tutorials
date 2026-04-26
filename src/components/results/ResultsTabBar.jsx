import React from 'react';

const ResultsTabBar = ({ sections, activeId, onChange, tablistLabel = 'Result categories' }) => (
  <div
    role="tablist"
    aria-label={tablistLabel}
    className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center"
  >
    {sections.map((section) => {
      const selected = section.id === activeId;
      return (
        <button
          key={section.id}
          id={`results-tab-${section.id}`}
          type="button"
          role="tab"
          aria-selected={selected}
          tabIndex={0}
          onClick={() => onChange(section.id)}
          className={[
            'shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950',
            selected
              ? 'bg-brand text-white shadow-sm dark:bg-brand dark:text-gray-900'
              : 'border border-gray-200 bg-white text-gray-700 hover:border-brand/50 hover:bg-[#f7fae8] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800',
          ].join(' ')}
        >
          {section.title}
        </button>
      );
    })}
  </div>
);

export default ResultsTabBar;
