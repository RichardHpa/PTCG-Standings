import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import { SETTINGS_KEY } from 'constants/localStorageKeys';

import type { Settings } from './types';

const initialSettings: Settings = {
  standingsTableCompact: false,
};

const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem(SETTINGS_KEY);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      settings = {
        ...initialSettings,
        ...parsedData,
      };
    } else {
      settings = {
        ...initialSettings,
      };
    }
  } catch (err) {
    console.error(err);
    // If stored data is not a stringified JSON this will fail,
    // that's why we catch the error
  }
  return settings;
};

export const storeSettings = (settings: Settings) => {
  window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

interface SettingsContextType {
  settings: Settings;
  saveSettings: (settings: Settings) => void;
  saveSetting: (key: string, value: unknown) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: initialSettings,
  saveSettings: () => {},
  saveSetting: () => {},
});

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error(
      'useSettingsContext must be used within a SettingsContextProvider',
    );
  }
  return context;
};

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = useCallback((updatedSettings: Settings) => {
    setSettings(updatedSettings);
    storeSettings(updatedSettings);
  }, []);

  const saveSetting = useCallback(
    (key: string, value: unknown) => {
      const updatedSettings = { ...settings, [key]: value };
      setSettings(updatedSettings);
      storeSettings(updatedSettings);
    },
    [settings],
  );

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
        saveSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
