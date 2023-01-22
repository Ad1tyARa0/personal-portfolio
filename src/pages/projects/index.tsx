import React from "react";
import { navigate } from "gatsby";

// Components.
import { Arrow } from "../../components/common/arrow/Arrow";
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- projects
const css_prefix = "p--p__";

const Projects = () => {
  const handleRightArrowClick = () => {
    navigate("/experience");
  };

  const handleLeftArrowClick = () => {
    navigate("/skills");
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Projects</div>

        <Arrow orientation="left" onClick={handleLeftArrowClick} />
        <Arrow orientation="right" onClick={handleRightArrowClick} />
      </div>
    </PageContainer>
  );
};

export default Projects;
