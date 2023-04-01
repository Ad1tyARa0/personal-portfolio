import React, { useState } from "react";
import { graphql } from "gatsby";

// Components.
import { UiUx } from "../assets/icons/about-page/UiUx";
import { WebDevelopment } from "../assets/icons/about-page/WebDevelopment";
import { AppDevelopment } from "../assets/icons/about-page/AppDevelopment";
import { PageContainer } from "./../components/layout/container/PageContainer";

// Types and interfaces.
import { AboutType } from "../utils/types/about";
import { ThemeContext } from "../context/ThemeContext";

// SCSS.
import "./index.scss";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {
  data: AboutType;
}

const Index: React.FC<IndexInterface> = ({ data }) => {
  const { theme } = React.useContext(ThemeContext);

  const bioData = data.allPrismicAbout.nodes[0].data;

  const MAIN_SKILLS = [
    {
      id: 1,
      icon: <WebDevelopment theme={theme} width="160px" height="100px" />,
      title: "Web Development",
    },

    {
      id: 2,
      icon: <AppDevelopment theme={theme} width="140px" height="100px" />,
      title: "App Development",
    },

    {
      id: 3,
      icon: <UiUx theme={theme} width="140px" height="100px" />,
      title: "UI and UX",
    },
  ];

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}body`}>
          <div className={`${css_prefix}title`}>
            {data.site.siteMetadata.name}
          </div>

          <div className={`${css_prefix}role`}>
            {data.site.siteMetadata.role}
          </div>

          <div
            className={`${css_prefix}card ${
              theme === "light" ? css_prefix + "card-light" : ""
            }`}
          >
            <img
              src={bioData.profile_picture.url}
              alt={bioData.profile_picture.alt}
              className={`${css_prefix}image`}
            />

            <div className={`${css_prefix}description`}>{bioData.bio.text}</div>
          </div>
        </div>

        <div className={`${css_prefix}expertise`}>
          {MAIN_SKILLS.map(e => {
            return (
              <div
                key={e.id}
                className={`${css_prefix}item-main ${
                  theme === "light" ? css_prefix + "item-main-light" : ""
                }`}
              >
                <div className={`${css_prefix}title`}>{e.title}</div>

                <div className={`${css_prefix}image`}>{e.icon}</div>
              </div>
            );
          })}
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

    allPrismicAbout {
      nodes {
        data {
          bio {
            text
          }
          profile_picture {
            alt
            url
          }
        }
      }
    }
  }
`;
