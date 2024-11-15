import clsx from 'clsx';
import { columnClasses } from './columnClasses';

import type { FC } from 'react';
import type { ColumnProps } from './types';

export const Column: FC<ColumnProps> = ({
  children,
  size,
  align = 'left',
  classes = '',
}) => {
  return (
    <div
      className={clsx(
        columnClasses.base,
        size && columnClasses.size[size],
        columnClasses.align[align],
        classes,
      )}
    >
      {children}
    </div>
  );
};
