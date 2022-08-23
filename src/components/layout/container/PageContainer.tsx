import React, { FC } from 'react';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import ThemeProvider, {
  ThemeContext,
  ThemeContextInterface,
} from '../../../context/ThemeContext';

interface PageContainerProps {
  children: JSX.Element;
}

// Components -- layout -- container -- page - container
const css_prefix = 'c--l--c--p-c__';

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  const { darkMode, toggleDarkMode } = React.useContext(
    ThemeContext
  ) as ThemeContextInterface;

  return (
    <ThemeProvider>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        title='Ãditya S Rao'
      />

      <button onClick={toggleDarkMode}>toggle</button>

      <span>{darkMode ? 'true' : 'false'}</span>

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};
