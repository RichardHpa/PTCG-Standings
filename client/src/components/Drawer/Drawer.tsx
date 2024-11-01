import { useEffect } from 'react';
import clsx from 'clsx';
import OutsideClickHandler from 'react-outside-click-handler';

import type { FC } from 'react';
import type { DrawerProps } from './types';

export const Drawer: FC<DrawerProps> = ({
  drawerId,
  children,
  title,
  open,
  onClose,
}) => {
  // Disable scrolling when the drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 left-0 top-0 z-30 h-screen w-screen bg-gray-900/50 dark:bg-gray-900/80" />
      )}

      <OutsideClickHandler disabled={!open} onOutsideClick={onClose}>
        <div
          id={drawerId}
          className={clsx(
            'fixed right-0 top-0 z-50 flex h-screen w-96 flex-col gap-4 overflow-auto border-l border-gray-500 bg-white p-4 transition-transform dark:border-gray-400 dark:bg-gray-800',
            {
              'translate-x-full': !open,
            },
          )}
          aria-labelledby={drawerId}
        >
          <h5
            id={drawerId}
            className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            {title}
          </h5>
          <button
            type="button"
            onClick={onClose}
            data-drawer-hide={drawerId}
            aria-controls={drawerId}
            className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          {children}
        </div>
      </OutsideClickHandler>
    </>
  );
};
