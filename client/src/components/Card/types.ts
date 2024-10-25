import type { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  growHeight?: boolean;
  title?: string;
  action?: ReactNode;
}
