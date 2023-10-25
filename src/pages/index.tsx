import React from "react";

import "./index.scss";

// Components.
import { Layout } from "../layout/Layout";
import { Intro } from "../components/intro/Intro";
import { About } from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";
import { PageBreak } from "../components/common/page-break/PageBreak";
import { Experience } from "../components/experience/Experience";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";

const css_prefix = "p--h__";

interface IndexInterface {}

const Index: React.FC<IndexInterface> = ({}) => {
  return (
    <Layout>
      <div className={`${css_prefix}main`}>
        <Intro />

        <PageBreak />

        <About />

        <PageBreak />

        <Projects />

        <PageBreak />

        <Skills />

        <PageBreak />

        <Experience />

        <PageBreak />

        <div className={`${css_prefix}theme-button`}>
          <ThemeButton />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
