import React, { useState } from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "../components/layout/container/PageContainer";

// Types and interfaces.
import { AboutType } from "../utils/types/about";
import ThemeProvider, { ThemeContext } from "../context/ThemeContext";

import { motion } from "framer-motion";

// SCSS.
import "./index.scss";
import Experience from "./experience";
import { Intro } from "../components/intro/Intro";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";
import { Nav } from "../components/nav/Nav";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {
  data: AboutType;
}

const Index: React.FC<IndexInterface> = ({
  // data
  data,
}) => {
  // const { theme } = React.useContext(ThemeContext);
  const { theme, switchTheme } = React.useContext(ThemeContext);

  const payload = data.allPrismicAbout.nodes[0].data;

  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const introRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);

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

        <Intro
          imageUrl={payload.profile_picture.url}
          title={payload.bio.text}
          name={data.site.siteMetadata.name}
          role={data.site.siteMetadata.role}
          theme={theme}
        />

        <About theme={theme} aboutRef={aboutRef} />

        <Projects theme={theme} projectsRef={projectsRef} />

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

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }

    allPrismicAbout {
      nodes {
        data {
          bio {
            text
          }
          profile_picture {
            alt
            url
          }
        }
      }
    }
  }
`;
