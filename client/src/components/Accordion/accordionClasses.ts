import { tw } from 'utils/tailwindClassName';

export const accordionClasses = {
  item: tw`flex w-full items-center justify-between gap-3 border border-b-0 border-gray-200 p-5 font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400`,
  // notLast: 'border-b-0',
  lastItem: '!border-b',
  firstItem: tw`rounded-t-xl`,
  isActive: tw`bg-gray-100 dark:bg-gray-800`,
  hover: tw`hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800`,
  disabled: tw`cursor-default`,
};
