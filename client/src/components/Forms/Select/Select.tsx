import type { FC } from 'react';
import type { SelectProps } from './types';

export const Select: FC<SelectProps> = ({
  label,
  name,
  hideLabel = false,
  options,
  required = false,
  onChange,
  value,
}) => {
  return (
    <div className="w-full">
      {!hideLabel && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <select
        id={name}
        required={required}
        value={value}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
