import clsx from 'clsx';

import { buttonClasses } from './buttonClasses';

import type { FC } from 'react';
import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'base',
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        buttonClasses.base,
        buttonClasses.size[size],
        buttonClasses.variant[variant]['base'],
        buttonClasses.variant[variant][color].light,
        buttonClasses.variant[variant][color].dark,
      )}
    >
      {children}
    </button>
  );
};
