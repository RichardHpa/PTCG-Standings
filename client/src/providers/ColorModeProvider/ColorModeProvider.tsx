import { useState, createContext, useEffect, useContext } from 'react';

import type { Dispatch, SetStateAction, ReactNode } from 'react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const themes: Array<Theme> = Object.values(Theme);

type ColorModeContextType = [Theme, Dispatch<SetStateAction<Theme>>];

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined,
);

const prefersDarkMQ = '(prefers-color-scheme: dark)';
const storageKey = 'PokemonTCGStandings:currentTheme';

const getPreferredTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem(storageKey) as Theme;
    if (storedTheme && themes.includes(storedTheme)) {
      return storedTheme;
    }
    return window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;
  }

  return Theme.LIGHT;
};

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setColorMode] = useState<Theme>(() => {
    return getPreferredTheme();
  });

  const checkTheme = (existing: Theme) => {
    const root = window.document.documentElement;
    const isDark = existing === Theme.DARK;

    root.classList.remove(isDark ? Theme.LIGHT : Theme.DARK);
    root.classList.add(existing);

    localStorage.setItem(storageKey, existing);
  };

  useEffect(() => {
    checkTheme(mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={[mode, setColorMode]}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
};

export { Theme, ColorModeProvider, useColorMode };
