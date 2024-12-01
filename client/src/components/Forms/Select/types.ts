import type { ChangeEvent } from 'react';

interface BaseSelectProps {
  label: string;
  name: string;
  hideLabel?: boolean;
  value: string;
  required?: boolean;
}

export interface OptionProp {
  value: string;
  label: string;
}

export interface StyledOptionProps extends OptionProp {
  render: JSX.Element;
}

export interface SelectProps extends BaseSelectProps {
  options: OptionProp[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface StyledSelectProps extends BaseSelectProps {
  options: StyledOptionProps[];
  onChange: (value: StyledOptionProps) => void;
}
