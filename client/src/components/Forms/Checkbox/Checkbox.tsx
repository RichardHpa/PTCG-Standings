import { useCallback } from 'react';

import type { CheckboxProps } from './types';
import type { FC } from 'react';

export const Checkbox: FC<CheckboxProps> = ({
  label,
  hideLabel = false,
  name,
  required = false,
  onChange,
  checked,
  value,
}) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.blur();
      onChange(e);
    },
    [onChange],
  );

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        required={required}
        onChange={handleOnChange}
        value={value}
        checked={checked}
        className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
      />
      {!hideLabel && (
        <label
          htmlFor={name}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      )}
    </div>
  );
};
