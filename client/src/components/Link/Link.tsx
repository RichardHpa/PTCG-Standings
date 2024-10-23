import type { FC } from 'react';
import type { LinkProps } from './types';

export const Link: FC<LinkProps> = ({ children, href }) => (
  <a
    href={href}
    className="font-medium text-primary hover:underline dark:text-primary-dark"
    target="_blank"
  >
    {children}
  </a>
);
