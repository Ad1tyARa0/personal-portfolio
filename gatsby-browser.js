import './src/sass/globals.scss';

import ThemeProvider from './src/context/ThemeContext';
import React from 'react';

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
