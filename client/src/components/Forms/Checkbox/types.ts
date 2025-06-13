import type { ChangeEvent } from 'react';

import type { BaseInputProps } from '../types';

export interface CheckboxProps
  extends BaseInputProps<ChangeEvent<HTMLInputElement>> {
  checked: boolean;
}
