import React from "react";

// Components.
import { PageContainer } from "./../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- home
const css_prefix = "p--h__";

const Index = () => {
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Home</div>
      </div>
    </PageContainer>
  );
};

export default Index;
