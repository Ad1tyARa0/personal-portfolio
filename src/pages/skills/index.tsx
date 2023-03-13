import React, { useContext, useState } from "react";
import { graphql, navigate } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";
import { Button } from "../../components/common/button/Button";
import { ThemeContext } from "../../context/ThemeContext";
import { SkillsType } from "../../utils/types/skills";

import { RiArrowRightSLine } from "react-icons/ri";
import { SKILLS_TABS_MAPPING } from "../../utils/constants/tabs";
import Scrollbars from "react-custom-scrollbars-2";

// Pages -- skills
const css_prefix = "p--s__";

interface SkillsInterface {
  data: any;
}

const Skills: React.FC<SkillsInterface> = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const tabRef = React.useRef<HTMLDivElement | null>(null);

  const [skills, setSkills] = useState<SkillsType[]>(
    data.allPrismicSkills.nodes.map((e: any) => e.data)
  );

  const [tab, setTab] = useState<string>(skills[0].category.text);

  const onClickSetTab = (payload: string) => {
    setTab(payload);
  };

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
                  SKILLS_TABS_MAPPING[tab]
                } ${
                  theme === "dark" ? css_prefix + "active-tab-line-dark" : ""
                }`}
              ></div>
            </div>

            <div className={`${css_prefix}tabs`} ref={tabRef}>
              {skills.map(e => {
                return (
                  <div
                    className={`${css_prefix}tab ${
                      tab === e.category.text ? css_prefix + "tab-active" : ""
                    } ${theme === "dark" ? css_prefix + "tab-dark" : ""}`}
                    key={e.category.text}
                    onClick={() => onClickSetTab(e.category.text)}
                  >
                    <div className={`${css_prefix}tab-title`}>
                      {e.category.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {skills.map(e => {
            if (e.category.text === tab) {
              return (
                <div
                  key={e.category.text}
                  className={`${css_prefix}skills-inner-main ${
                    theme == "dark" ? css_prefix + "skills-inner-main-dark" : ""
                  }`}
                >
                  <Scrollbars autoHide={true}>
                    {/* <div className={`${css_prefix}category-text`}>
                    {e.category.text}
                  </div> */}

                    <div className={`${css_prefix}items-main`}>
                      {e.category_items.map(c => {
                        return (
                          <div
                            className={`${css_prefix}skills-item-main`}
                            key={c.image.url}
                          >
                            <img
                              alt={c.image.alt}
                              src={c.image.url}
                              className={`${css_prefix}skills-item-icon`}
                            />

                            <div className={`${css_prefix}skills-item-title`}>
                              {c.title.text}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Scrollbars>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </PageContainer>
  );
};

export default Skills;

export const query = graphql`
  {
    allPrismicSkills {
      nodes {
        data {
          category {
            text
          }
          category_items {
            image {
              url
              alt
            }
            title {
              text
            }
          }
        }
      }
    }
  }
`;
