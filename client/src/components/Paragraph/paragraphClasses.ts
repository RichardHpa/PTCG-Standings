import { tw } from 'utils/tailwindClassName';

export const paragraphClasses = {
  base: tw``,
  size: {
    xs: tw`text-xs`,
    sm: tw`text-sm`,
    base: tw`text-base`,
    lg: tw`text-lg`,
    xl: tw`text-xl`,
    xxl: tw`text-2xl`,
  },
  weight: {
    light: tw`font-light`,
    normal: tw`font-normal`,
    medium: tw`font-medium`,
    semibold: tw`font-semibold`,
    bold: tw`font-bold`,
  },
  color: {
    white: tw``,
    default: tw`text-gray-500 dark:text-gray-400`,
  },
  align: {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
  },
};
