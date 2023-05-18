import React from "react";
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// pages -- resume
const css_prefix = "p--r__";

// Component props.
interface indexProps {}

const Resume: React.FC<indexProps> = () => {
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Resume</div>
      </div>
    </PageContainer>
  );
};

export default Resume;
