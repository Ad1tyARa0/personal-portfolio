import React, { createContext, FC, useState } from 'react';

export interface ThemeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultState: ThemeContextInterface = {
  darkMode: false,
  toggleDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
