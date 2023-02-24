import React from "react";
import { graphql } from "gatsby";
import { DateTime } from "luxon";

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

  // TOOD
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>

        <div className={`${css_prefix}employment-main`}>
          {employmentItems.map((e, idx) => {
            return (
              <div key={idx} className={`${css_prefix}employment-item-main`}>
                <div className={`${css_prefix}heading-container`}>
                  <div className={`${css_prefix}designation`}>
                    {e.designation.text}
                  </div>

                  <div className={`${css_prefix}date-container`}>
                    (
                    <div>
                      {DateTime.fromJSDate(
                        new Date(e.from_date)
                      ).toLocaleString(DateTime.DATE_MED)}
                    </div>
                    <div className={`${css_prefix}hypen`}>-</div>
                    {e.is_current ? (
                      <div>Current</div>
                    ) : (
                      <div>
                        {DateTime.fromJSDate(
                          new Date(e.to_date)
                        ).toLocaleString(DateTime.DATE_MED)}
                      </div>
                    )}
                    )
                  </div>
                </div>

                <div className={`${css_prefix}designation-container`}>
                  <div className={`${css_prefix}company-name`}>
                    {e.company_name.text}
                  </div>
                  <div className={`${css_prefix}company-logo`}>
                    <img
                      src={e.company_logo.url}
                      alt={e.company_logo.alt}
                      className={`${css_prefix}logo`}
                    />
                  </div>
                </div>
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
