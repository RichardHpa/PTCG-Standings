import clsx from 'clsx';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { navLinkClasses } from './navLinkClasses';

import type { FC } from 'react';
import type { NavLinkProps } from './types';

export const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  onClick,
  color = 'primary',
}) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive, isPending }) =>
        clsx(
          navLinkClasses.base,
          navLinkClasses.colors[color],
          isActive && 'underline',
          isPending && 'opacity-50',
        )
      }
    >
      {children}
    </RouterNavLink>
  );
};
