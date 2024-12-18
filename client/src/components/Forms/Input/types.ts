import type {
  ChangeEvent,
  ReactElement,
  ComponentPropsWithoutRef,
} from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hideLabel?: boolean;
  required?: boolean;
  icon?: ReactElement;
  value?: string;
}
