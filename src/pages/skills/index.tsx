import React from "react";
import { navigate } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";
import {
  cssLogo,
  htmlLogo,
  javascriptLogo,
  pyhonLogo,
  typescriptLogo,
} from "../../assets/svg";

// Pages -- skills
const css_prefix = "p--s__";

interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  interface SkillsItemInterface {
    title: string;
    icon: JSX.Element;
  }

  interface SkillsCategoryInterface {
    [m: string]: {
      category: string;
      items: SkillsItemInterface[];
    };
  }

  const SKILLS: SkillsCategoryInterface = {
    "Programming Languages": {
      category: "Programming Languages",
      items: [
        {
          title: "TypeScript",
          icon: (
            <img
              src={typescriptLogo}
              alt="TypeScript"
              className={`${css_prefix}image`}
            />
          ),
        },

        {
          title: "JavaScript",
          icon: (
            <img
              src={javascriptLogo}
              alt="JavaScript"
              className={`${css_prefix}image`}
            />
          ),
        },

        {
          title: "HTML",
          icon: (
            <img src={htmlLogo} alt="HTML" className={`${css_prefix}image`} />
          ),
        },

        {
          title: "CSS",
          icon: (
            <img src={cssLogo} alt="CSS" className={`${css_prefix}image`} />
          ),
        },

        {
          title: "Python",
          icon: (
            <img
              src={pyhonLogo}
              alt="Python"
              className={`${css_prefix}image`}
            />
          ),
        },
      ],
    },
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>

        <div className={`${css_prefix}skills-main`}>
          <div className={`${css_prefix}skills-category`}>
            {SKILLS["Programming Languages"].category}
          </div>

          <div className={`${css_prefix}skills-icons`}>
            {SKILLS["Programming Languages"].items.map(e => {
              return (
                <div className={`${css_prefix}skills-icon-item-main`}>
                  <div className={`${css_prefix}skills-icon-item-title`}>
                    {e.title}
                  </div>

                  <div className={`${css_prefix}skills-icon-item-icon`}>
                    {e.icon}
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

export default Skills;
