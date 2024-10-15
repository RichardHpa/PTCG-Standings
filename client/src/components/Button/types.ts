import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { Colors } from 'types/colors';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  color?: Colors;
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}
