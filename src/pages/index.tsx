import React from "react";

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

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {}

const Index: React.FC<IndexInterface> = ({}) => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const introRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const skillsRef = React.useRef<HTMLDivElement | null>(null);

  const handleClickNavigateToPage = (pageId: string) => {
    if (pageId === "1") {
      introRef?.current!.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    } else if (pageId === "2") {
      aboutRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    } else if (pageId === "3") {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    } else if (pageId === "4") {
      skillsRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  };

  return (
    <ThemeProvider>
      <main
        className={`${css_prefix}main ${
          theme === "dark" ? css_prefix + "main-dark" : ""
        }`}
        ref={introRef}
      >
        <Nav
          handleClickNavigateToPage={handleClickNavigateToPage}
          theme={theme}
        />

        <Intro theme={theme} />

        <About theme={theme} aboutRef={aboutRef} />

        <Projects theme={theme} projectsRef={projectsRef} />

        <Skills theme={theme} skillsRef={skillsRef} />

        <div
          className={`${css_prefix}theme-button ${
            theme === "dark" ? css_prefix + "theme-button-dark" : ""
          }`}
        >
          <ThemeButton theme={theme} switchTheme={switchTheme} />
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Index;
