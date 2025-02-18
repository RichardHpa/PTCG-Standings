import { tw } from 'utils/tailwindClassName';

export const divisionTabClasses = {
  base: tw`inline-block w-full border-r border-gray-200 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-gray-700 md:px-10`,
  first: tw`rounded-s-lg`,
  last: tw`rounded-e-lg`,
  active: tw`active cursor-default border-r-0 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white`,
  inactive: tw`cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white`,
};
