import React from "react";
import { motion } from "framer-motion";

import {
  PiHandWavingDuotone,
  PiArrowLineDownBold,
  PiArrowRightBold,
} from "react-icons/pi";

// SCSS.
import "./Intro.scss";
import { Github } from "../../assets/icons/github/Github";
import { LinkedIn } from "../../assets/icons/linkedin/LinkedIn";
import { Button } from "../common/button/Button";
import { graphql, useStaticQuery } from "gatsby";
import { useSectionInView } from "../../hooks/useIntersectionObserver";
import { useThemeContext } from "../../context/ThemeContext";

const css_prefix = "c--i__";

// Component props.
interface IntroProps {
  // theme: string;
}

const IntroComponent: React.FunctionComponent<IntroProps> = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { theme } = useThemeContext();

  console.log(theme);

  const data = useStaticQuery(graphql`
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
  `);

  const payload = data.allPrismicAbout.nodes[0].data;
  const imageUrl = payload.profile_picture.url;
  const title = payload.bio.text;
  const name = data.site.siteMetadata.name;
  const role = data.site.siteMetadata.role;

  return (
    <div
      id="Home"
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }`}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className={`${css_prefix}image-container`}
      >
        <img src={imageUrl} className={`${css_prefix}image`} />

        <motion.span
          className={`${css_prefix}icon-wrapper`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <PiHandWavingDuotone className={`${css_prefix}icon`} />
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${css_prefix}intro-text-container ${
          theme === "dark" ? css_prefix + "intro-text-container-dark" : ""
        }`}
      >
        <div className={`${css_prefix}text`}>Hello,</div>
        <div className={`${css_prefix}bold-text`}>
          I'm{" "}
          <span
            className={`${css_prefix}color-text ${
              theme === "dark" ? css_prefix + "color-text-dark" : ""
            }`}
          >
            {name}.
          </span>
        </div>
        <div className={`${css_prefix}bold-text`}>{role}</div>
        <div className={`${css_prefix}title`}>
          {title}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          veritatis exercitationem vitae ratione, iusto animi sequi odit quam!
          Impedit recusandae possimus nihil corporis deserunt amet assumenda
          modi. Quis, ullam modi.
        </div>
      </motion.div>

      <motion.div
        className={`${css_prefix}button-container`}
        // className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className={`${css_prefix}button`}>
          <Button
            theme={theme}
            title="Contact Me"
            handleClick={console.log}
            icon={<PiArrowRightBold />}
            appearence="primary"
          />
        </div>

        <div className={`${css_prefix}button`}>
          <Button
            theme={theme}
            title="Download CV"
            handleClick={console.log}
            icon={<PiArrowLineDownBold />}
            appearence="secondary"
          />
        </div>

        <div className={`${css_prefix}button`}>
          <Button
            theme={theme}
            handleClick={console.log}
            icon={<LinkedIn theme={theme} link="/" />}
            appearence="secondary"
          />
        </div>

        <div className={`${css_prefix}button`}>
          <Button
            theme={theme}
            handleClick={console.log}
            icon={<Github theme={theme} link="/" />}
            appearence="secondary"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Intro = IntroComponent;
