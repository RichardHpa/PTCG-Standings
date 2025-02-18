import { tw } from 'utils/tailwindClassName';

// TODO: These should probably also copy the button classes
export const navLinkClasses = {
  base: tw`block px-3 py-2 font-medium text-gray-700 text-gray-900 dark:text-gray-400 dark:text-white lg:rounded-lg`,
  isInactive: tw`hover:rounded hover:bg-gray-100 hover:underline dark:hover:bg-gray-700 dark:hover:text-white`,
  isActive: tw`rounded bg-primary lg:bg-transparent lg:underline`,
  isPending: tw`opacity-50`,
};
