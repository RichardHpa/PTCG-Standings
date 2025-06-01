import { forwardRef } from 'react';
import clsx from 'clsx';

import type { PropsWithChildren, Ref } from 'react';

export const TableElement = forwardRef(
  ({ children }: PropsWithChildren, ref: Ref<HTMLTableElement>) => {
    return (
      <table
        ref={ref}
        className={clsx(
          'grid w-full border-collapse border-spacing-0 text-left text-sm text-gray-500 dark:text-gray-400',
        )}
      >
        {children}
      </table>
    );
  },
);
