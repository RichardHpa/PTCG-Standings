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
    <div className="w-full">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400">
            <RenderIcon icon={icon} />
          </div>
        )}

        <input
          type="text"
          id={name}
          className={clsx(
            'focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400',
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
