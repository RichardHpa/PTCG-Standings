import clsx from 'clsx';

import { paragraphClasses } from './paragraphClasses';

import type { FC } from 'react';
import type { ParagraphProps } from './types';

export const Paragraph: FC<ParagraphProps> = ({
  children,
  size = 'base',
  weight = 'normal',
  color = 'default',
  align = 'left',
}) => {
  return (
    <p
      className={clsx(
        paragraphClasses.base,
        paragraphClasses.size[size],
        paragraphClasses.weight[weight],
        paragraphClasses.color[color],
        paragraphClasses.align[align],
      )}
    >
      {children}
    </p>
  );
};
