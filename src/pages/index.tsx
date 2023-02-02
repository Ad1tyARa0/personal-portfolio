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

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>
          {data.site.siteMetadata.name}
        </div>

        <div className={`${css_prefix}role`}>{data.site.siteMetadata.role}</div>

        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}inner-body`}>
            {/* <Button
              theme={theme}
              title="About Me"
              handleClick={handleClickToggleDescription}
            >
              <div
                className={`${css_prefix}button ${
                  showDescription ? css_prefix + "active" : ""
                }`}
              >
                <IoIosArrowUp />
              </div>
            </Button> */}

            {/* <div
              className={`${css_prefix}card ${
                showDescription
                  ? css_prefix + "card-shown"
                  : css_prefix + "card-hidden"
              } ${
                theme === "dark"
                  ? css_prefix + "card-dark"
                  : theme === "light"
                  ? css_prefix + "card-light"
                  : ""
              }`}
            > */}
            <div className={`${css_prefix}card-images`}>
              <AppDevelopment theme={theme} />
            </div>

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
          </div>

          {/* <div className={`${css_prefix}tech`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea iste
            repellendus itaque aut possimus dolorum consectetur, distinctio ad
            voluptatibus sed blanditiis, corporis culpa aperiam eius. Ut eaque
            omnis eum accusamus.
          </div> */}
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
