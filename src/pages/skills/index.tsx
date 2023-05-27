import React, { useContext, useState, useEffect } from "react";
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
import { Tab } from "../../components/common/tab/Tab";

// Pages -- skills
const css_prefix = "p--s__";

interface SkillsInterface {
  data: any;
}

const Skills: React.FC<SkillsInterface> = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const tabRef = React.useRef<HTMLDivElement | null>(null);

  let skillItems: SkillsType[] = data.allPrismicSkills.nodes.map(
    (e: any) => e.data
  );

  const [tabs, setTabs] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    if (skillItems.length !== 0) {
      const result = skillItems.map((e, idx) => ({
        id: idx,
        title: e.category.text,
      }));

      setTabs(result);

      setTab(result[0].id);
    }
  }, []);

  const [skills, setSkills] = useState<SkillsType[]>(
    data.allPrismicSkills.nodes.map((e: any) => e.data)
  );

  const [tab, setTab] = useState<number>(0);

  const onClickSetTab = (payload: number) => {
    setTab(payload);
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}tab-main`}>
            <Tab
              tabs={tabs}
              selectedTab={tab}
              handleClickSelectTab={onClickSetTab}
              theme={theme}
            />
          </div>

          <div className={`${css_prefix}item-main`}>
            {skills.map((e, idx) => {
              if (idx === tab) {
                return (
                  <div
                    key={e.category.text}
                    className={`${css_prefix}skills-inner-main ${
                      theme == "dark"
                        ? css_prefix + "skills-inner-main-dark"
                        : ""
                    }`}
                  >
                    {/* <Scrollbars> */}
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
                    {/* </Scrollbars> */}
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
