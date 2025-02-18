import clsx from 'clsx';

import type { FC } from 'react';
import type { CardProps } from './types';

export const Card: FC<CardProps> = ({
  growHeight = true,
  children,
  title,
  action,
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:rounded-lg',
        { 'h-full': growHeight },
      )}
    >
      {title && (
        <div className="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-50 px-3 py-2.5 dark:border-gray-700 dark:bg-gray-700">
          <h2>{title}</h2>
          {action && <div className="flex gap-2">{action}</div>}
        </div>
      )}

      {children}
    </div>
  );
};
