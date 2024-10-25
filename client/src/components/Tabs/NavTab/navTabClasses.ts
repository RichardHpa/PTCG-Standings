import { tw } from 'utils/tailwindClassName';

export const navTabClasses = {
  base: tw`inline-block rounded-t-lg p-4`,
  active: tw`active cursor-default bg-gray-100 text-primary hover:text-primary dark:bg-gray-700 dark:text-blue-500 dark:text-white`,
  inactive: tw`hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-blue-500`,
};
