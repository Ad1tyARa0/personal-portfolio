import React, { useState } from "react";
import { graphql } from "gatsby";

// Components.
import { PageContainer } from "../components/layout/container/PageContainer";

// Types and interfaces.
import { AboutType } from "../utils/types/about";
import { ThemeContext } from "../context/ThemeContext";

import { motion } from "framer-motion";

// SCSS.
import "./index.scss";
import Experience from "./experience";
import { Intro } from "../components/intro/Intro";
import { ThemeButton } from "../components/common/theme-button/ThemeButton";
import { Nav } from "../components/nav/Nav";

// Pages -- home
const css_prefix = "p--h__";

interface IndexInterface {
  data: AboutType;
}

const Index: React.FC<IndexInterface> = ({ data }) => {
  // const { theme } = React.useContext(ThemeContext);
  const { theme, switchTheme } = React.useContext(ThemeContext);

  const payload = data.allPrismicAbout.nodes[0].data;

  return (
    // <PageContainer>
    //   <div className={`${css_prefix}main`}>
    //     <div
    //       className={`${css_prefix}card ${
    //         theme === "light" ? css_prefix + "card-light" : "card-dark"
    //       }`}
    //     >
    //       <div className={`${css_prefix}card-header`}>
    //         {/* <img
    //           src={bioData.profile_picture.url}
    //           alt={bioData.profile_picture.alt}
    //           className={`${css_prefix}image`}
    //         /> */}

    //         <div
    //           className={`${css_prefix}title ${
    //             theme === "dark" ? css_prefix + "title-dark" : ""
    //           }`}
    //         >
    //           {data.site.siteMetadata.name}
    //         </div>

    //         <div
    //           className={`${css_prefix}role ${
    //             theme === "dark" ? css_prefix + "role-dark" : ""
    //           }`}
    //         >
    //           {data.site.siteMetadata.role}
    //         </div>
    //       </div>

    //       <motion.div
    //         className={`${css_prefix}description`}
    //         initial={{ opacity: 0, y: 100 }}
    //         animate={{ opacity: 1, y: 0 }}
    //       >
    //         {bioData.bio.text}
    //       </motion.div>
    //     </div>

    //     {/* <div className={`${css_prefix}expertise`}>
    //       <div className={`${css_prefix}title`}>Web and App Development</div>
    //       <div className={`${css_prefix}skill-image`}>
    //         <Dev
    //           bgColor={theme === "light" ? COLOR_LIGHT : COLOR_DARK}
    //           width="300px"
    //           height="200px"
    //         />
    //       </div>
    //     </div> */}
    //   </div>
    // </PageContainer>
    <div
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }`}
    >
      <div className={`${css_prefix}components-container`}>
        <Nav />

        <Intro
          imageUrl={payload.profile_picture.url}
          title={payload.bio.text}
          name={data.site.siteMetadata.name}
          role={data.site.siteMetadata.role}
          theme={theme}
        />

        <div className={`${css_prefix}theme-button`}>
          <ThemeButton theme={theme} switchTheme={switchTheme} />
        </div>
      </div>
    </div>
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
