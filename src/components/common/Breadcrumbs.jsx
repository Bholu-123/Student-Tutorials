import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi';
import { PATHS } from '../../routes/paths';

/**
 * @param {{ items: Array<{ to?: string | object, label: string }> }} props
 * items: trail after Home — use { to, label } for links (`to` may include hash), { label } only for current page.
 */
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-8">
    <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600 dark:text-gray-400 list-none m-0 p-0">
      <li className="flex items-center gap-1">
        <Link
          to={PATHS.HOME}
          className="inline-flex items-center gap-1 hover:text-brand dark:hover:text-brand-light transition-colors"
        >
          <HiHome className="shrink-0" aria-hidden />
          Home
        </Link>
      </li>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <li key={`${item.label}-${idx}`} className="flex items-center gap-1">
            <HiChevronRight className="shrink-0 text-gray-400 dark:text-gray-500" aria-hidden />
            {item.to && !isLast ? (
              <Link
                to={item.to}
                className="hover:text-brand dark:hover:text-brand-light transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-gray-900 dark:text-gray-100 font-medium"
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
