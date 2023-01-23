import React from "react";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- projects
const css_prefix = "p--p__";

const Projects = () => {
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Projects</div>
      </div>
    </PageContainer>
  );
};

export default Projects;
