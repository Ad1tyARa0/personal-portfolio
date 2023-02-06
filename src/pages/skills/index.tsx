import React from "react";
import { navigate } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- skills
const css_prefix = "p--s__";

const Skills = () => {
  const SKILLS = [
    {
      id: 1,
      title: "TypeScript",
      icon: <></>,
    },
  ];

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>
      </div>
    </PageContainer>
  );
};

export default Skills;
