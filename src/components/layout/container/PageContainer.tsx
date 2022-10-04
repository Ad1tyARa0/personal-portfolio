import React, { FC, Fragment } from 'react';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import ThemeProvider, { ThemeContext } from '../../../context/ThemeContext';

import './PageContainer.scss';

interface PageContainerProps {
  children: JSX.Element;
}

// Components -- layout -- container -- page - container
const css_prefix = 'c--l--c--p-c__';

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider>
      <Fragment>
        <div className={`${css_prefix}container`}>
          <Header title='CONTACT ME' theme={theme} switchTheme={switchTheme} />

          <main
            className={`${css_prefix}main ${
              theme === 'dark'
                ? css_prefix + 'main-dark'
                : css_prefix + 'main-light'
            }`}
          >
            <div className={`${css_prefix}inner-main`}>{children}</div>
          </main>

          <Footer theme={theme} />
        </div>
      </Fragment>
    </ThemeProvider>
  );
};
