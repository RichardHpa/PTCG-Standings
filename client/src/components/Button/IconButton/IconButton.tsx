import { cloneElement } from 'react';
import clsx from 'clsx';

import { iconButtonClasses } from './iconButtonClasses';
import { buttonClasses } from '../buttonClasses';

import type { FC } from 'react';
import type { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  alt,
  icon,
  noPadding,
  size = 'base',
  disabled = false,
  ...props
}) => {
  const RenderedIcon = cloneElement(icon, {
    className: clsx(iconButtonClasses.icon.base),
    'aria-hidden': true,
    fill: 'currentColor',
  });

  return (
    <button
      type="button"
      {...props}
      className={clsx(
        iconButtonClasses.base,
        buttonClasses.variant[variant]['base'],
        buttonClasses.variant[variant][color].light,
        buttonClasses.variant[variant][color].dark,
        iconButtonClasses.icon.size[size],
        noPadding && iconButtonClasses.noPadding,
        disabled && buttonClasses.disabled,
      )}
    >
      {RenderedIcon}
      <span className="sr-only">{alt}</span>
    </button>
  );
};
