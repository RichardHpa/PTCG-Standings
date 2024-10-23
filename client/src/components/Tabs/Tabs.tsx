import type { FC } from 'react';
import type { Tabs as TabsType } from './types';

export const Tabs: FC<TabsType> = ({ children, actions }) => {
  return (
    <ul className="flex flex-wrap items-center border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      {children}

      {actions && <li className="ml-auto">{actions}</li>}
    </ul>
  );
};
