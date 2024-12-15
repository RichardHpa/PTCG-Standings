import { cloneElement } from 'react';
import clsx from 'clsx';

import { iconButtonClasses } from './iconButtonClasses';
import { buttonClasses } from '../buttonClasses';

import type { FC } from 'react';
import type { IconButtonProps } from './types';

const viewBoxMap = {
  xs: '0 0 16 16',
  sm: '0 0 16 16',
  base: '0 0 24 24',
  lg: '0 0 24 24',
  xl: '0 0 24 24',
};

export const IconButton: FC<IconButtonProps> = ({
  color = 'primary',
  variant = 'contained',
  alt,
  icon,
  size = 'base',
  disabled = false,
  ...props
}) => {
  const RenderedIcon = cloneElement(icon, {
    className: clsx(iconButtonClasses.icon.size[size]),
    'aria-hidden': true,
    fill: 'currentColor',
    viewbox: viewBoxMap[size],
  });

  return (
    <button
      type="button"
      disabled={disabled}
      {...props}
      className={clsx(
        buttonClasses.base,
        iconButtonClasses.base,
        buttonClasses.variant[variant]['base'],
        buttonClasses.variant[variant][color].light,
        buttonClasses.variant[variant][color].dark,
        iconButtonClasses.size[size],
        disabled && buttonClasses.disabled,
      )}
    >
      {RenderedIcon}
      <span className="sr-only">{alt}</span>
    </button>
  );
};
