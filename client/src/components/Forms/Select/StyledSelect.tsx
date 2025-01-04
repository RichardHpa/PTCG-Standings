import { useState, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import OutsideClickHandler from 'react-outside-click-handler';

import type { FC } from 'react';
import type { StyledSelectProps } from './types';

export const StyledSelect: FC<StyledSelectProps> = ({
  label,
  name,
  hideLabel = false,
  options,
  required = false,
  onChange,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onSelect = useCallback((value: string) => {
    setSelected(value);
    setIsOpen(false);
  }, []);

  const handleOnChange = useCallback(
    (value: string) => {
      onSelect(value);
      const fullValue = options.find(option => option.value === value);
      if (!fullValue) return;
      onChange(fullValue);
    },
    [onChange, onSelect, options],
  );

  return (
    <OutsideClickHandler disabled={!open} onOutsideClick={onClose}>
      <input type="hidden" name={name} value={selected} required={required} />
      <div className="relative">
        {!hideLabel && (
          <label
            htmlFor={name}
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}

        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className="z-10 inline-flex w-full flex-shrink-0 items-center justify-between rounded-lg border border-gray-300 bg-gray-100 p-2 px-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {options.find(option => option.value === selected)
              ?.renderSelected ??
              options.find(option => option.value === selected)?.render}
          </span>
          <svg
            className="ms-2.5 h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdown-states"
          className={clsx(
            'absolute z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700',
            {
              hidden: !isOpen,
            },
          )}
        >
          <ul
            className="max-h-60 overflow-y-auto py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="states-button"
          >
            {options.map(option => {
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleOnChange(option.value)}
                  >
                    {option.render}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
