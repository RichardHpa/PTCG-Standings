import clsx from 'clsx';

import { paragraphClasses } from './paragraphClasses';

import type { FC } from 'react';
import type { ParagraphProps } from './types';

export const Paragraph: FC<ParagraphProps> = ({ children, size = 'base' }) => {
  return (
    <p className={clsx(paragraphClasses.base, paragraphClasses.size[size])}>
      {children}
    </p>
  );
};
