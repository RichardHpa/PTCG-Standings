import type { ChangeEvent } from 'react';
import type { BaseInputProps } from '../types';

export interface OptionProp {
  value: string;
  label: string;
}

export interface StyledOptionProps extends OptionProp {
  render: JSX.Element;
  renderSelected?: JSX.Element;
}

export interface SelectProps
  extends BaseInputProps<ChangeEvent<HTMLSelectElement>> {
  options: OptionProp[];
}

export interface StyledSelectProps extends BaseInputProps<StyledOptionProps> {
  options: StyledOptionProps[];
  onChange: (value: StyledOptionProps) => void;
}
