import { tw } from 'utils/tailwindClassName';

export const buttonClasses = {
  base: tw`inline-flex rounded-lg text-center font-medium`,
  variant: {
    contained: {
      base: tw``,
      primary: {
        light: tw`bg-primary text-white hover:bg-primary-hover`,
        dark: tw`text-white dark:bg-primary-dark dark:hover:bg-primary-hoverDark`,
      },
      secondary: {
        light: tw`bg-secondary text-white hover:bg-secondary-hover`,
        dark: tw`text-white dark:bg-secondary-dark dark:hover:bg-secondary-hoverDark`,
      },
      alternative: {
        light: tw`bg-white text-gray-900 hover:bg-gray-100`,
        dark: tw`dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
      },
    },
    outlined: {
      base: tw`outline outline-1 hover:text-white`,
      primary: {
        light: tw`text-primary outline-primary hover:bg-primary hover:outline-primary`,
        dark: tw`dark:text-primary-dark dark:outline-primary-dark hover:dark:bg-primary-dark`,
      },
      secondary: {
        light: tw`text-secondary outline-secondary hover:bg-secondary hover:outline-secondary`,
        dark: tw`dark:text-secondary-dark dark:outline-secondary-dark hover:dark:bg-secondary-dark`,
      },
      alternative: {
        light: tw`text-gray-900 outline-gray-900 hover:bg-gray-900 hover:text-white`,
        dark: tw`dark:text-gray-400 dark:outline-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`,
      },
    },
    ghost: {
      base: tw``,
      primary: {
        light: tw`text-primary hover:bg-primary-hoverLight hover:text-primary`,
        dark: tw`dark:text-primary-dark dark:hover:bg-primary-hover dark:hover:bg-primary-hoverDark dark:hover:text-white`,
      },
      secondary: {
        light: tw`text-secondary hover:bg-secondary-hoverLight hover:text-secondary`,
        dark: tw`dark:text-secondary-dark dark:hover:bg-secondary-hover dark:hover:bg-secondary-hoverDark dark:hover:text-white`,
      },
      alternative: {
        light: tw`text-gray-900 hover:bg-gray-100`,
        dark: tw`dark:text-gray-400 dark:hover:bg-gray-700`,
      },
    },
  },
  size: {
    xs: tw`px-3 py-2 text-xs`,
    sm: tw`px-3 py-2 text-sm`,
    base: tw`px-5 py-2.5 text-sm`,
    lg: tw`px-5 py-3 text-base`,
    xl: tw`px-6 py-3.5 text-base`,
  },
};
