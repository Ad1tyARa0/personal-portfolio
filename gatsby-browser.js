import './src/sass/globals.scss';

const React = require('react');
const ThemeProvider = require('./src/context/ThemeContext');

export const WrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
