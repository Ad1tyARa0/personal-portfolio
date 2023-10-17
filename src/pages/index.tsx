import React from "react";

// Components.
import { Layout } from "../layout/Layout";
import { Intro } from "../components/intro/Intro";
import { About } from "../components/about/About";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";
import { PageBreak } from "../components/common/page-break/PageBreak";

interface IndexInterface {}

const Index: React.FC<IndexInterface> = ({}) => {
  return (
    <Layout>
      <>
        <Intro />

        <PageBreak />

        <About />

        <PageBreak />

        <Projects />

        <PageBreak />

        <Skills />

        <PageBreak />
      </>
    </Layout>
  );
};

export default Index;
