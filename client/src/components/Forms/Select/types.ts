import type { ChangeEvent } from 'react';

interface OptionProp {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  name: string;
  hideLabel?: boolean;
  options: OptionProp[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  required?: boolean;
}
