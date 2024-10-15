import { useCallback } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';

import { IconButton } from 'components/Button/IconButton';

import { useColorMode, Theme } from 'providers/ColorModeProvider';

export const ThemeToggle = () => {
  const [mode, setColorMode] = useColorMode();

  const handleToggleTheme = useCallback(() => {
    setColorMode(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
  }, [setColorMode]);

  return (
    <IconButton
      color="alternative"
      variant="ghost"
      onClick={handleToggleTheme}
      icon={mode === Theme.DARK ? <MoonIcon /> : <SunIcon />}
      alt={mode === Theme.DARK ? 'Switch to light mode' : 'Switch to dark mode'}
    />
  );
};
