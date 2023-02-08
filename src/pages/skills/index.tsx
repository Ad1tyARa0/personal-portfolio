import React, { useContext, useState } from "react";
import { navigate } from "gatsby";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";
import {
  cssLogo,
  gatsbyLogo,
  htmlLogo,
  javascriptLogo,
  pyhonLogo,
  reactLogo,
  reactNativeLogo,
  typescriptLogo,
} from "../../assets/svg";
import { Button } from "../../components/common/button/Button";
import { ThemeContext } from "../../context/ThemeContext";
import { SKILLS_CATEGORY_MAPPING } from "../../utils/constants/skills";

// Pages -- skills
const css_prefix = "p--s__";

interface SkillsInterface {}

const Skills: React.FC<SkillsInterface> = () => {
  const { theme } = useContext(ThemeContext);

  const [tab, setTab] = useState<string>("programming_languages");

  interface SkillsItemInterface {
    title: string;
    icon: JSX.Element;
  }

  const handleClickSelectTab = (payload: string) => {
    setTab(payload);
  };

  interface SkillsCategoryInterface {
    [m: string]: SkillsItemInterface[];
  }

  const SKILLS: SkillsCategoryInterface = {
    programming_languages: [
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
        icon: <img src={cssLogo} alt="CSS" className={`${css_prefix}image`} />,
      },

      {
        title: "Python",
        icon: (
          <img src={pyhonLogo} alt="Python" className={`${css_prefix}image`} />
        ),
      },
    ],

    frameworks_libraries: [
      {
        title: "React",
        icon: (
          <img src={reactLogo} alt="React" className={`${css_prefix}image`} />
        ),
      },

      {
        title: "React Native",
        icon: (
          <img
            src={reactNativeLogo}
            alt="React Native"
            className={`${css_prefix}image`}
          />
        ),
      },

      {
        title: "Gatsby",
        icon: (
          <img src={gatsbyLogo} alt="Gatsby" className={`${css_prefix}image`} />
        ),
      },

      {
        title: "NextJS",
        icon: (
          <img
            src={typescriptLogo}
            alt="NextJS"
            className={`${css_prefix}image`}
          />
        ),
      },
    ],
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Skills</div>

        <div className={`${css_prefix}skills-main`}>
          <div className={`${css_prefix}skills-tabs`}>
            {Object.keys(SKILLS).map(e => {
              return (
                <Button
                  key={e}
                  handleClick={() => handleClickSelectTab(e)}
                  theme={theme}
                  title={SKILLS_CATEGORY_MAPPING[e]}
                />
              );
            })}
          </div>

          <div className={`${css_prefix}skills-icons`}>
            {SKILLS[tab].map(e => {
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
