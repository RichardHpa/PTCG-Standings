import clsx from 'clsx';

import type { FC } from 'react';
import type { TabProps } from './types';

export const Tab: FC<TabProps> = ({ children, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={clsx(
        'me-2 inline-block cursor-pointer rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300',
        {
          'active cur cursor-default bg-gray-100 text-blue-600 hover:text-blue-600 dark:bg-gray-800 dark:text-blue-500 dark:hover:text-blue-500':
            active,
        },
      )}
    >
      {children}
    </li>
  );
};
