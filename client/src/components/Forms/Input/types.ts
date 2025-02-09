import type { ChangeEvent } from 'react';

import type { BaseInputProps } from '../types';
import type { Icon } from 'types/icons';

export interface InputProps
  extends BaseInputProps<ChangeEvent<HTMLInputElement>> {
  placeholder?: string;
  icon?: Icon;
}
