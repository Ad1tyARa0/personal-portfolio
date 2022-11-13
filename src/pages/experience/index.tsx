import React from "react";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./experience.scss";

// Pages -- experience
const css_prefix = "p--e__";

const Experience = () => {
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>
      </div>
    </PageContainer>
  );
};

export default Experience;
