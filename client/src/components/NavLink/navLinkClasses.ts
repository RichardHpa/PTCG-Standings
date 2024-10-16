import { tw } from 'utils/tailwindClassName';

export const navLinkClasses = {
  base: tw`block px-3 py-2 font-medium text-gray-900 hover:underline dark:text-white`,
  colors: {
    primary: tw`hover:text-primary dark:hover:text-primary-dark`,
    secondary: tw`hover:text-secondary dark:hover:text-secondary-dark`,
    alternative: tw`hover:text-gray-100 dark:hover:text-gray-400`,
  },
};
