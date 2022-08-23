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
  const { darkMode } = React.useContext(ThemeContext) as ThemeContextInterface;

  return (
    <ThemeProvider>
      <Header title='Ãditya S Rao' />

      <main>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};
