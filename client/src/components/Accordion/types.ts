import type { ReactNode } from 'react';

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
}
