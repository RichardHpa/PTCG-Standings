import type { ChangeEvent, ReactElement } from 'react';

export interface InputProps {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hideLabel?: boolean;
  required?: boolean;
  icon?: ReactElement;
  value?: string;
}
