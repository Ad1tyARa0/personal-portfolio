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
import { Services } from "../components/services/Services";
import { Contact } from "../components/contact/Contact";

const css_prefix = "p--h__";

interface IndexInterface {}

const Index: React.FC<IndexInterface> = () => {
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

        <Contact />

        <PageBreak />
      </div>
    </Layout>
  );
};

export default Index;
