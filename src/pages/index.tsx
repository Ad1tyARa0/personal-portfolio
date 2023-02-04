import React, { useState } from "react";
import { graphql } from "gatsby";

// Components.
import { Arrow } from "../components/common/arrow/Arrow";
import { PageContainer } from "./../components/layout/container/PageContainer";

// SCSS.
import "./index.scss";
import { Button } from "../components/common/button/Button";
import { ThemeContext } from "../context/ThemeContext";
import { IoIosArrowUp } from "react-icons/io";
import { ProfileImage } from "../assets/images";
import { appDevelopmentSvg } from "../assets/svg";
import { AppDevelopment } from "../assets/icons/about-page/AppDevelopment";
import { WebDevelopment } from "../assets/icons/about-page/WebDevelopment";
import { SiAltiumdesigner } from "react-icons/si";
import { UiUx } from "../assets/icons/about-page/UiUx";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {
  data: {
    site: {
      siteMetadata: {
        name: string;
        role: string;
      };
    };
  };
}

const Index: React.FC<IndexInterface> = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  const [showDescription, setShowDescription] = useState<boolean>(true);

  const handleClickToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const {
    site: {
      siteMetadata: { name, role },
    },
  } = data;

  const MAIN_SKILLS = [
    {
      id: 1,
      icon: <WebDevelopment theme={theme} />,
      title: "Web Development",
    },

    {
      id: 2,
      icon: <AppDevelopment theme={theme} />,
      title: "App Development",
    },

    {
      id: 3,
      icon: <UiUx theme={theme} />,
      title: "UI / UX",
    },
  ];

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>
          {data.site.siteMetadata.name}
        </div>

        <div className={`${css_prefix}role`}>{data.site.siteMetadata.role}</div>

        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}inner-body`}>
            <div className={`${css_prefix}card`}>
              <div className={`${css_prefix}description`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                vero vitae unde, ducimus doloremque ipsam totam assumenda
                consequatur nemo error repellendus cum magni repellat deserunt
                fugit provident dignissimos animi odit! Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Numquam dolores cum expedita
                saepe culpa laborum nisi quasi perspiciatis ratione amet
                possimus a enim corporis quidem quaerat nobis commodi, fugiat
                inventore? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolorem debitis, temporibus ipsa architecto porro,
                inventore esse ipsum itaque deserunt consequatur ducimus eum
                veritatis nihil voluptate alias delectus amet nostrum dicta.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                non repudiandae facilis placeat optio eos, odio quaerat
                distinctio aliquid illo illum officia, quod adipisci, hic
                voluptate saepe esse deleniti. Voluptatibus.
              </div>

              <img
                src={ProfileImage}
                alt="pic"
                className={`${css_prefix}image`}
              />
            </div>

            <div className={`${css_prefix}expertise`}>
              {MAIN_SKILLS.map(e => {
                return (
                  <div key={e.id} className={`${css_prefix}item-main`}>
                    <div className={`${css_prefix}image`}>{e.icon}</div>

                    <div className={`${css_prefix}title`}>{e.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        name
        role
      }
    }
  }
`;
