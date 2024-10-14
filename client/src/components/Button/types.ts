import type { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'alternative';
  variant?: 'contained' | 'outlined' | 'ghost';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}
