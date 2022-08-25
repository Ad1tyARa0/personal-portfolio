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
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Dispatch<SetStateAction<boolean>>

const defaultState: ThemeContextInterface = {
  darkMode: false,
  setDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
