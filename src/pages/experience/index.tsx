import React from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// Context.
import { ThemeContext } from "../../context/ThemeContext";

// Types.
import { EmploymentHistoryType } from "../../utils/types/employment-history";

// SCSS.
import "./index.scss";

// Pages -- experience
const css_prefix = "p--e__";

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  let employmentItems: EmploymentHistoryType[] =
    data.allPrismicNewEmploymentHistory.nodes.map((e: any) => e.data);

  console.log(employmentItems);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>

        <div>
          {employmentItems.map((e, idx) => {
            return (
              <div key={idx}>
                <div>{e.company_name.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default Experience;

export const query = graphql`
  query MyQuery {
    allPrismicNewEmploymentHistory {
      nodes {
        data {
          company_name {
            text
          }
          company_description {
            text
          }
          company_logo {
            alt
            url
          }
          designation {
            text
          }
          from_date
          is_current
          location {
            latitude
            longitude
          }
          responsibilities {
            responsibility_text {
              text
            }
          }
          technologies {
            technology_title {
              text
            }
            technology_image {
              url
              alt
            }
          }
          timestamp
          to_date
        }
      }
    }
  }
`;
