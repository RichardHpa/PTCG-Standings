import { useCallback, useState } from 'react';
import clsx from 'clsx';

import { accordionClasses } from './accordionClasses';

import type { FC } from 'react';
import type { AccordionProps } from './types';

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleItemClick = useCallback(
    (index: number) => {
      if (expanded === index) {
        setExpanded(null);
        return;
      }
      setExpanded(index);
    },
    [expanded],
  );

  return (
    <div>
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        const isOpen = expanded === index;
        return (
          <div key={index}>
            <h2>
              <button
                type="button"
                onClick={event => {
                  event.currentTarget.blur();
                  handleItemClick(index);
                }}
                className={clsx(
                  accordionClasses.item,
                  isFirst && accordionClasses.firstItem,
                  isLast && !isOpen && accordionClasses.lastItem,
                  isOpen && accordionClasses.isActive,
                )}
                aria-expanded={expanded === index}
              >
                <span>{item.title}</span>
                <svg
                  data-accordion-icon
                  className={clsx(
                    'h-3 w-3 shrink-0',
                    expanded !== index && 'rotate-180',
                  )}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div className={clsx(expanded !== index && 'hidden')}>
              <div
                className={clsx(
                  'border border-gray-200 p-5 dark:border-gray-700',
                  [isOpen && !isLast ? 'border-b-0' : ''],
                )}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
