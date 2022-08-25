import React, { FC, Fragment } from 'react';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import ThemeProvider, {
  ThemeContext,
  ThemeContextInterface,
} from '../../../context/ThemeContext';

interface PageContainerProps {
  children: JSX.Element;
  // darkMode: boolean;
  // setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Components -- layout -- container -- page - container
const css_prefix = 'c--l--c--p-c__';

export const PageContainer: FC<PageContainerProps> = ({
  children,
  // darkMode,
  // setDarkMode,
}) => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode, setDarkMode }) => (
          <Fragment>
            {/* <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        title='Ãditya S Rao'
      /> */}

            <main>{children}</main>

            <Footer />
          </Fragment>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};
