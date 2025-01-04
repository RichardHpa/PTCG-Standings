import clsx from 'clsx';
import { columnClasses } from './columnClasses';

import type { FC } from 'react';
import type { ColumnProps } from './types';

export const Column: FC<ColumnProps> = ({
  children,
  size,
  align = 'left',
  classes = '',
  hiddenXs = false,
}) => {
  return (
    <div
      className={clsx(
        hiddenXs && columnClasses.hidden,
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
