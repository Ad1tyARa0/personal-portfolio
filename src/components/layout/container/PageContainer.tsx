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
  const { darkMode, setDarkMode } = React.useContext(ThemeContext);

  console.log(setDarkMode, darkMode);

  const onClick = () => {
    console.log('clicked');

    setDarkMode(true);
  };

  return (
    <ThemeProvider>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        title='Ãditya S Rao'
      />

      <button onClick={onClick}>toggle</button>

      <span>{darkMode ? 'true' : 'false'}</span>

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};
