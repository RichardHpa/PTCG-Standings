import type { ReactNode } from 'react';

export interface ParagraphProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
}
