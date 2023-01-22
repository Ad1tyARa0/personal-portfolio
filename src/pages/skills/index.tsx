import React from "react";
import { navigate } from "gatsby";
import { Arrow } from "../../components/common/arrow/Arrow";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- skills
const css_prefix = "p--s__";

const Skills = () => {
  const handleRightArrowClick = () => {
    navigate("/projects");
  };

  const handleLeftArrowClick = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>

        <Arrow orientation="left" onClick={handleLeftArrowClick} />
        <Arrow orientation="right" onClick={handleRightArrowClick} />
      </div>
    </PageContainer>
  );
};

export default Skills;
