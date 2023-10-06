import React, { FC, Fragment } from "react";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import ThemeProvider, { ThemeContext } from "../../../context/ThemeContext";
import { Scrollbars } from "react-custom-scrollbars-2";
import { graphql } from "gatsby";

import "./PageContainer.scss";

interface PageContainerProps {
  children: JSX.Element;
}

// Components -- layout -- container -- page - container
const css_prefix = "c--l--c--p-c__";

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider>
      <main
        className={`${css_prefix}main ${
          theme === "dark"
            ? css_prefix + "main-dark"
            : css_prefix + "main-light"
        }`}
      >
        <Header theme={theme} switchTheme={switchTheme} />

        <div className={`${css_prefix}container`}>
          <Scrollbars>{children}</Scrollbars>
        </div>

        <Footer theme={theme} />
      </main>
    </ThemeProvider>
  );
};
