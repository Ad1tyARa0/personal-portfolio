const React = require('react');
const ThemeProvider = require('./src/context/ThemeContext');

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
