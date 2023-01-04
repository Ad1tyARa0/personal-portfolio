import React from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";

// Pages -- experience
const css_prefix = "p--e__";

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  // const {
  //   prismicIcebreaker: {
  //     data: { hobbies },
  //   },
  // } = data;

  console.log(data);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>
      </div>
    </PageContainer>
  );
};

export default Experience;

export const query = graphql`
  query hobbies {
    prismicIcebreaker {
      data {
        hobbies {
          hobby {
            text
          }
        }
      }
    }
  }
`;
