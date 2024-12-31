import type { ChangeEvent, ReactElement } from 'react';

import type { BaseInputProps } from '../types';

export interface InputProps
  extends BaseInputProps<ChangeEvent<HTMLInputElement>> {
  placeholder?: string;
  icon?: ReactElement;
}
