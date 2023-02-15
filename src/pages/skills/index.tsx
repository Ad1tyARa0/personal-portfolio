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

  const [toggleDropdown, setToggleDropdown] = useState<number[]>([0, 1]);

  const [skills, setSkills] = useState<SkillsType[]>(
    data.allPrismicSkills.nodes.map((e: any) => e.data)
  );

  const handleClickToggleDropdown = (payload: number) => {
    if (toggleDropdown.includes(payload)) {
      setToggleDropdown(toggleDropdown.filter(e => e !== payload));
    } else {
      setToggleDropdown([...toggleDropdown, payload]);
    }
  };

  console.log(toggleDropdown);

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>

        <div className={`${css_prefix}skills-main`}>
          {skills.map((e, idx) => {
            return (
              <div key={e.category.text}>
                <div
                  className={`${css_prefix}skills-title`}
                  onClick={() => handleClickToggleDropdown(idx)}
                >
                  <div className={`${css_prefix}category-text`}>
                    {e.category.text}
                  </div>

                  <div
                    className={`${css_prefix}category-button ${
                      toggleDropdown.includes(idx)
                        ? css_prefix + "category-button-active"
                        : ""
                    }`}
                  >
                    <RiArrowRightSLine />
                  </div>
                </div>

                <div
                  className={`${css_prefix}skills-items-hidden ${
                    toggleDropdown.includes(idx)
                      ? css_prefix + "skills-items-shown"
                      : ""
                  }`}
                >
                  {e.category_items.map(c => {
                    return (
                      <div
                        className={`${css_prefix}skills-item-main`}
                        key={c.image.url}
                      >
                        <div className={`${css_prefix}skills-item-title`}>
                          {c.title.text}
                        </div>

                        <img
                          alt={c.image.alt}
                          src={c.image.url}
                          className={`${css_prefix}skills-item-icon`}
                        />
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
