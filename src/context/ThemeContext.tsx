import React, { createContext, useMemo, useReducer, useState } from "react";
import { getInitialColorMode } from "../utils/functions/getInitialColorMode";

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
  const [theme, setTheme] = useState<string>(getInitialColorMode);

  const switchTheme = (payload: string) => {
    setTheme(payload);

    // if (window !== undefined) {
    //   window.localStorage.setItem("color-mode", payload);
    // }
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
