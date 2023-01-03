import React from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "./../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {
  data: {
    site: {
      siteMetadata: {
        name: string;
        role: string;
      };
    };
  };
}

const Index: React.FC<IndexInterface> = ({ data }) => {
  console.log(data);
  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>
          {data.site.siteMetadata.name}
        </div>

        <div className={`${css_prefix}role`}>{data.site.siteMetadata.role}</div>
      </div>
    </PageContainer>
  );
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
`;
