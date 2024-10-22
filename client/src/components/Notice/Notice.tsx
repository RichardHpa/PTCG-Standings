import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/16/solid';

import { noticeClasses } from './noticeClasses';
import { IconButton } from 'components/Button';

import type { FC } from 'react';
import type { NoticeProps } from './types';

export const Notice: FC<NoticeProps> = ({
  children,
  status = 'info',
  dismissible,
  noticeId,
  onDismiss,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const handleDismiss = useCallback(() => {
    if (dismissible && noticeId && onDismiss) {
      onDismiss(noticeId);
    } else {
      setIsDismissed(true);
    }
  }, [dismissible, noticeId, onDismiss]);

  if (isDismissed) {
    return null;
  }

  return (
    <div
      id={noticeId}
      className={clsx(noticeClasses.base, noticeClasses.status[status])}
      role="alert"
    >
      <div className="flex gap-4">
        <svg
          className="inline h-4 w-4 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">{status}</span>
        <div>{children}</div>
      </div>

      {dismissible && (
        <IconButton
          icon={<XMarkIcon />}
          alt="Dismiss notice"
          variant="ghost"
          color="alternative"
          onClick={() => handleDismiss()}
          noPadding
        />
      )}
    </div>
  );
};
