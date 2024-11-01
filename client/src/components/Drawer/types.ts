import type { ReactNode } from 'react';

export interface DrawerProps {
  drawerId: string;
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}
