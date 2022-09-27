import React, { createContext, useMemo, useReducer, useState } from 'react';
import {
  SET_THEME,
  ThemeReducer,
  ThemeReducerActionType,
  THEME_REDUCER_INITIAL_STATE,
} from './ThemeReducer';

export interface ThemeContextInterface {
  theme: string;
  // switchTheme: () => void;
}

const defaultState: ThemeContextInterface = {
  theme: 'light',
  // switchTheme: () => {},
};

const defaultDispatchValue = () => {};

export const ThemeDispatchContext =
  createContext<React.Dispatch<ThemeReducerActionType>>(defaultDispatchValue);

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(
    ThemeReducer,
    THEME_REDUCER_INITIAL_STATE
  );

  // const theme = state.theme;

  // const switchTheme = () => {
  //   console.log('124');
  //   dispatch({
  //     type: SET_THEME,
  //   });
  // };

  const memoizedValues: ThemeContextInterface = useMemo(() => state, []);

  return (
    <ThemeContext.Provider value={memoizedValues}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
