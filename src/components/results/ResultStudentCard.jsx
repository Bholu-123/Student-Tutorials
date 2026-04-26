import React from 'react';

const secondaryLine = (entry) => {
  if (entry.kind === 'percentile') return `Percentile ${entry.headline}`;
  if (entry.kind === 'percentage') {
    return [entry.headline, entry.detail].filter(Boolean).join(' · ');
  }
  return [entry.headline, entry.detail].filter(Boolean).join(' — ');
};

const ResultStudentCard = ({ entry }) => (
  <article
    className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200
               hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
  >
    <div className="aspect-square bg-gray-100 dark:bg-gray-800">
      {entry.image ? (
        <img src={entry.image} alt={entry.name} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-gray-400 dark:text-gray-500">
          {entry.name
            .split(/\s+/)
            .map((w) => w[0])
            .slice(0, 2)
            .join('')}
        </div>
      )}
    </div>
    <div className="flex flex-1 flex-col gap-0.5 p-3">
      <h3 className="text-sm font-bold leading-snug text-gray-900 dark:text-gray-100">{entry.name}</h3>
      <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-400">{secondaryLine(entry)}</p>
    </div>
  </article>
);

export default ResultStudentCard;
