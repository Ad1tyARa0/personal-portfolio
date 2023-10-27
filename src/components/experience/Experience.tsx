import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { graphql, useStaticQuery } from "gatsby";
import { EmploymentHistoryType } from "../../utils/types/employment-history";

// SCSS.
import "./Experience.scss";
import { useSectionInView } from "../../hooks/useIntersectionObserver";
import { Heading } from "../common/heading/Heading";
import { useThemeContext } from "../../context/ThemeContext";
import { DateTime } from "luxon";
import { PiBriefcaseLight } from "react-icons/pi";

const css_prefix = "c--e__";

// Component props.
interface ExperienceProps {}

const ExperienceComponent: React.FunctionComponent<ExperienceProps> = () => {
  const { ref } = useSectionInView("Experience");
  const { theme } = useThemeContext();

  const data = useStaticQuery(graphql`
    query {
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
  `);

  let employmentData: EmploymentHistoryType[] =
    data.allPrismicNewEmploymentHistory.nodes.map((e: any) => e.data);

  console.log(data);

  return (
    <div ref={ref} id="Experience">
      <div className={`${css_prefix}main`}>
        <Heading text="My Experience" />

        <VerticalTimeline lineColor="">
          {employmentData.map((e, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(56, 55, 55, 0.4)"
                      : "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                contentArrowStyle={{
                  display: "none",
                }}
                date={
                  e.is_current
                    ? DateTime.fromJSDate(new Date(e.from_date)).toLocaleString(
                        DateTime.DATE_MED
                      ) +
                      " - " +
                      "Current"
                    : DateTime.fromJSDate(new Date(e.from_date)).toLocaleString(
                        DateTime.DATE_MED
                      ) +
                      " - " +
                      DateTime.fromJSDate(new Date(e.to_date)).toLocaleString(
                        DateTime.DATE_MED
                      )
                }
                icon={<PiBriefcaseLight />}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                  marginTop: "5px",
                }}
              >
                <div
                  key={index}
                  className={`${css_prefix}employment-item-main ${
                    theme == "dark"
                      ? css_prefix + "employment-item-main-dark"
                      : css_prefix + "employment-item-main-light"
                  }`}
                >
                  <div className={`${css_prefix}container`}>
                    <div className={`${css_prefix}text`}>
                      <Heading
                        variant="subheading2"
                        text={e.designation.text}
                      />
                    </div>

                    <img
                      src={e.company_logo.url}
                      alt={e.company_logo.alt}
                      className={`${css_prefix}logo`}
                    />
                  </div>

                  <div className={`${css_prefix}container-alt`}>
                    {e.technologies.map(e => {
                      return (
                        <img
                          src={e.technology_image.url}
                          alt={e.technology_image.alt}
                          key={e.technology_image.alt}
                          className={`${css_prefix}image`}
                        />
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
                          {e.responsibility_text.text}
                        </div>
                      );
                    })}
                  </div>

                  <div className={`${css_prefix}footer-container`}>
                    <div className={`${css_prefix}company-logo`}></div>
                  </div>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export const Experience = ExperienceComponent;
