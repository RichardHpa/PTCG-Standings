import { ReactNode } from 'react';

export interface ColumnProps {
  key: string;
  size?: 'small' | 'medium';
  align?: 'left' | 'center' | 'right';
  children: ReactNode;
  classes?: string;
}
