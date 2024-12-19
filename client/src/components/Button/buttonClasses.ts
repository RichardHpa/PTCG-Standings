import { tw } from 'utils/tailwindClassName';

export const buttonClasses = {
  base: tw`border-1 inline-flex justify-center border text-center font-medium`,
  variant: {
    contained: {
      base: tw`border-transparent`,
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
      base: tw`hover:text-white`,
      primary: {
        light: tw`border-primary text-primary hover:border-primary hover:bg-primary`,
        dark: tw`dark:border-primary-dark dark:text-primary-dark hover:dark:bg-primary-dark`,
      },
      secondary: {
        light: tw`border-secondary text-secondary hover:border-secondary hover:bg-secondary`,
        dark: tw`dark:border-secondary-dark dark:text-secondary-dark hover:dark:bg-secondary-dark`,
      },
      alternative: {
        light: tw`border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white`,
        dark: tw`dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`,
      },
    },
    ghost: {
      base: tw`border-transparent`,
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
        dark: tw`dark:text-gray-300 dark:hover:bg-gray-600`,
      },
    },
  },
  size: {
    xs: tw`rounded-md px-2.5 py-1 text-sm`,
    sm: tw`rounded-md px-3 py-1.5 text-sm`,
    base: tw`rounded-md px-4 py-2 text-sm`,
    lg: tw`rounded-md px-5 py-2.5 text-base`,
    xl: tw`rounded-lg px-6 py-3.5 text-base`,
  },
  full: tw`w-full`,
  disabled: tw`disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`,
  // from material-tailwind, need to update to my own design system
  active: tw`active:bg-slate-700 active:shadow-none`,
  focus: tw`focus:bg-slate-700 focus:shadow-none`,
};
