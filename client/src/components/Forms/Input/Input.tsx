import { cloneElement } from 'react';
import clsx from 'clsx';

import type { FC, ReactElement } from 'react';
import type { InputProps } from './types';

const RenderIcon = ({ icon }: { icon: ReactElement }) => {
  return cloneElement(icon, {
    className: 'h-5 w-5',
    'aria-hidden': true,
    fill: 'currentColor',
  });
};

export const Input: FC<InputProps> = ({
  label,
  hideLabel = false,
  name,
  placeholder,
  required = false,
  onChange,
  icon,
  value,
}) => {
  return (
    <div>
      {!hideLabel && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <RenderIcon icon={icon} />
          </div>
        )}

        <input
          type="text"
          id={name}
          className={clsx(
            'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            icon && 'pl-10',
          )}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};
