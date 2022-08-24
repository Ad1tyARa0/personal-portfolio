import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export interface ThemeContextInterface {
  darkMode: boolean;
  setDarkMode: any;
}

// Dispatch<SetStateAction<boolean>>

const defaultState: ThemeContextInterface = {
  darkMode: false,
  setDarkMode: console.log('234'),
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
