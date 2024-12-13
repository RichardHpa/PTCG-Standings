import type { ReactNode } from 'react';

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
  disabled?: boolean;
  action?: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
}
