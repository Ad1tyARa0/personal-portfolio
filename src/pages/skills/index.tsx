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

// Pages -- skills
const css_prefix = "p--s__";

interface SkillsInterface {
  data: any;
}

const Skills: React.FC<SkillsInterface> = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  const [skills, setSkills] = useState<SkillsType[]>(
    data.allPrismicSkills.nodes.map((e: any) => e.data)
  );

  console.log(skills);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>

        <div className={`${css_prefix}skills-main`}>
          {skills.map(e => {
            return (
              <div
                key={e.category.text}
                className={`${css_prefix}skills-inner-main`}
              >
                <div className={`${css_prefix}category-text`}>
                  {e.category.text}
                </div>

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
              </div>
            );
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
