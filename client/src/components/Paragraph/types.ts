import type { ReactNode } from 'react';

export interface ParagraphProps {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'white' | 'default';
}
