import type { ReactNode } from 'react';
import type { Colors } from 'types/colors';

export interface NavLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  color?: Colors;
}
