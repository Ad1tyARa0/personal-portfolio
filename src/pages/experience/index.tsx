import React, { useState } from "react";
import { graphql } from "gatsby";
import { DateTime } from "luxon";
import { IoMdArrowDropright } from "react-icons/io";
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

  const [tab, setTab] = useState<string>(employmentItems[0].company_name.text);

  const onClickSetTab = (payload: string) => {
    setTab(payload);
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Experience</div>

        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}tabs`}>
            {employmentItems.map(e => {
              return (
                <div
                  className={`${css_prefix}tab ${
                    tab === e.company_name.text ? css_prefix + "tab-active" : ""
                  }`}
                  key={e.company_name.text}
                  onClick={() => onClickSetTab(e.company_name.text)}
                >
                  {e.company_name.text}
                </div>
              );
            })}
          </div>

          <div className={`${css_prefix}employment-main`}>
            {employmentItems.map((e, idx) => {
              if (e.company_name.text === tab) {
                return (
                  <div
                    key={idx}
                    className={`${css_prefix}employment-item-main ${
                      theme == "dark"
                        ? css_prefix + "employment-item-main-dark"
                        : ""
                    }`}
                  >
                    <div className={`${css_prefix}container`}>
                      <div className={`${css_prefix}designation`}>
                        {e.designation.text}
                      </div>
                    </div>

                    <div className={`${css_prefix}container`}>
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

                    <div className={`${css_prefix}container`}>
                      {e.technologies.map(e => {
                        return (
                          <div
                            key={e.technology_image.url}
                            className={`${css_prefix}container`}
                          >
                            <img
                              src={e.technology_image.url}
                              alt={e.technology_image.alt}
                              className={`${css_prefix}image`}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      {e.responsibilities.map(e => {
                        return (
                          <div
                            key={e.responsibility_text.text}
                            className={`${css_prefix}role`}
                          >
                            <div className={`${css_prefix}role-icon`}>
                              <IoMdArrowDropright />
                            </div>
                            <div className={`${css_prefix}role-text`}>
                              {e.responsibility_text.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className={`${css_prefix}company-logo`}>
                      <img
                        src={e.company_logo.url}
                        alt={e.company_logo.alt}
                        className={`${css_prefix}logo`}
                      />
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
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
