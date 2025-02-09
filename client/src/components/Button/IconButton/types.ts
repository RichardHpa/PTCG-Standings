import type { ButtonProps } from '../types';
import type { Icon } from 'types/icons';

export interface IconButtonProps extends Omit<ButtonProps, 'children'> {
  alt: string;
  icon: Icon;
}
