import React, { createContext, useMemo, useReducer, useState } from "react";

export interface ThemeContextInterface {
  theme: string;
  switchTheme: (payload: string) => void;
}

const defaultState: ThemeContextInterface = {
  theme: "light",
  switchTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<string>("light");

  const switchTheme = (payload: string) => {
    setTheme(payload);
  };

  const value: ThemeContextInterface = {
    theme,
    switchTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
