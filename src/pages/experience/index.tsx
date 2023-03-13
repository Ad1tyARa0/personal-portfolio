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
import { EMP_HISTORY_NAME_MAPPING } from "../../utils/constants/tabs";
import { LinkedIn } from "../../assets/icons/linkedin/LinkedIn";

// Pages -- experience
const css_prefix = "p--e__";

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  const tabRef = React.useRef<HTMLDivElement | null>(null);

  let employmentItems: EmploymentHistoryType[] =
    data.allPrismicNewEmploymentHistory.nodes.map((e: any) => e.data);

  const [tab, setTab] = useState<string>(employmentItems[0].company_name.text);

  const onClickSetTab = (payload: string) => {
    setTab(payload);
  };

  console.log([1, 2, 3].map(e => e + 1).reduce((prev, curr) => prev + curr));

  console.log(employmentItems);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}inner-main`}>
            <div
              className={`${css_prefix}tab-line`}
              style={{ height: tabRef.current?.getBoundingClientRect().height }}
            >
              <div
                className={`${css_prefix}active-tab-line ${css_prefix}${
                  EMP_HISTORY_NAME_MAPPING[tab]
                } ${
                  theme === "dark" ? css_prefix + "active-tab-line-dark" : ""
                }`}
              ></div>
            </div>

            <div className={`${css_prefix}tabs`} ref={tabRef}>
              {employmentItems.map(e => {
                return (
                  <div
                    className={`${css_prefix}tab ${
                      tab === e.company_name.text
                        ? css_prefix + "tab-active"
                        : ""
                    } ${theme === "dark" ? css_prefix + "tab-dark" : ""}`}
                    key={e.company_name.text}
                    onClick={() => onClickSetTab(e.company_name.text)}
                  >
                    <div className={`${css_prefix}tab-title`}>
                      {e.company_name.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${css_prefix}employment-main`}>
            {employmentItems.map((e, idx) => {
              return (
                <div
                  key={idx}
                  className={`${
                    theme == "dark"
                      ? css_prefix + "employment-item-main-dark"
                      : ""
                  }
                  ${
                    tab === e.company_name.text
                      ? css_prefix + "employment-item-main-shown"
                      : css_prefix + "employment-item-main"
                  }

                  `}
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

                  <div className={`${css_prefix}footer-container`}>
                    <div className={`${css_prefix}links`}>
                      {/* <LinkedIn theme={theme} /> */}
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
