import React from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";
// import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXRenderer } from "gatsby-plugin-mdx";

// SCSS.
// import "./index.scss";

// Pages -- test
const css_prefix = "p--t__";

interface TestInterface {
  data: any;
}

const Test: React.FC<TestInterface> = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data;

  console.log(html);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>test</div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </PageContainer>
  );
};

export default Test;

export const query = graphql`
  {
    markdownRemark(frontmatter: { type: { eq: "bio" } }) {
      html
    }
  }
`;
