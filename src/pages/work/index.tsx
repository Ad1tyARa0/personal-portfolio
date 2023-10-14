import React, { FC } from "react";

// Components.
// import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- projects
const css_prefix = "p--p__";

interface WorkInterface {}

const Work: FC<WorkInterface> = () => {
  return (
    // <PageContainer>
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}title`}>Work</div>
    </div>
  );
};

export default Work;
