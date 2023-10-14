import React, { useEffect } from "react";

// Types and interfaces.
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";

// SCSS.
import "./index.scss";
import Experience from "./experience";
import { Intro } from "../components/intro/Intro";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";
import { Nav } from "../components/nav/Nav";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Skills } from "../components/skills/Skills";
import ActiveSectionContextProvider from "../context/ActiveSessionContext";
import { PageBreak } from "../components/common/page-break/PageBreak";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {}

const Index: React.FC<IndexInterface> = ({}) => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <ThemeProvider>
      <ActiveSectionContextProvider>
        <main
          className={`${css_prefix}main ${
            theme === "dark" ? css_prefix + "main-dark" : ""
          }`}
        >
          <Nav theme={theme} />

          <Intro theme={theme} />

          <PageBreak />

          <About theme={theme} />

          <PageBreak />

          <Projects theme={theme} />

          <PageBreak />

          <Skills theme={theme} />

          <PageBreak />

          <div
            className={`${css_prefix}theme-button ${
              theme === "dark" ? css_prefix + "theme-button-dark" : ""
            }`}
          >
            <ThemeButton theme={theme} switchTheme={switchTheme} />
          </div>
        </main>
      </ActiveSectionContextProvider>
    </ThemeProvider>
  );
};

export default Index;
