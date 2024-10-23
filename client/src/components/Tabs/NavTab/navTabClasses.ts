import { tw } from 'utils/tailwindClassName';

export const navTabClasses = {
  base: tw`inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300`,
  active: tw`active dark:hover:primary-hoverDark cursor-default bg-gray-100 text-primary hover:text-primary dark:bg-gray-800 dark:text-blue-500`,
};
