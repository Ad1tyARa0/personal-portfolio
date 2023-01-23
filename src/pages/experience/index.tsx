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
    data.allPrismicNewEmploymentHistory.nodes[0].data.employment_item;

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
  query EmpHistory {
    allPrismicNewEmploymentHistory {
      nodes {
        data {
          employment_item {
            company_name {
              text
            }
            company_description {
              text
            }
            company_logo {
              url
            }
            location {
              longitude
              latitude
            }
            technologies_used {
              text
            }
            core_responsibilities {
              text
            }
            from_date
            to_date
            is_current
            timestamp
          }
        }
      }
    }
  }
`;
