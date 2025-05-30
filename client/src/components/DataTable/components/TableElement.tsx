import clsx from 'clsx';

import type { FC, PropsWithChildren } from 'react';

export const TableElement: FC<PropsWithChildren> = ({ children }) => {
  return (
    <table
      className={clsx(
        'grid w-full border-collapse border-spacing-0 text-left text-sm text-gray-500 dark:text-gray-400',
      )}
    >
      {children}
    </table>
  );
};
