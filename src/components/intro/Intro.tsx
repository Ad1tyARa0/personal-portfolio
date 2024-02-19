import React from "react";
import { motion } from "framer-motion";
import { graphql, navigate, useStaticQuery } from "gatsby";

// Icons.
import {
  PiArrowRightBold,
  PiHandWavingDuotone,
  PiArrowLineDownBold,
} from "react-icons/pi";

// Componennts.
import { Button } from "../common/button/Button";
import { Github } from "../../assets/icons/github/Github";
import { LinkedIn } from "../../assets/icons/linkedin/LinkedIn";

// Hooks.
import { useThemeContext } from "../../context/ThemeContext";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// SCSS.
import "./Intro.scss";
import {
  GITHUB_PROFILE_PERSONAL_LINK,
  LINKED_IN_PERSONAL_LINK,
  RESUME_LINK,
} from "../../utils/constants/links";
import { useActiveSectionContext } from "../../context/ActiveSessionContext";

const css_prefix = "c--i__";

// Component props.
interface IntroProps {}

const IntroComponent: React.FunctionComponent<IntroProps> = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useThemeContext();

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
      allPrismicResume {
        nodes {
          data {
            resume {
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
  const resumeUrl = data.allPrismicResume.nodes[0].data.resume.url;

  const handleDownload = () => {
    if (typeof window === undefined) {
      return;
    }

    window.open(resumeUrl, '_blank');
  };

  return (
    <div id="Home" className={`${css_prefix}main`} ref={ref}>
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
        className={`${css_prefix}intro-text-container`}
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
        <div className={`${css_prefix}title`}>{title}</div>
      </motion.div>

      <motion.div
        className={`${css_prefix}button-container`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className={`${css_prefix}button`}>
          {/* <a
            style={{ all: "unset" }}
            href={"https://1drv.ms/b/s!Ag98EnUm4trDiU0q2N-jd_mk9Zpb?e=E2XcSx"}
            target="_blank"
            type="application/pdf"
            rel="alternate"
          > */}
            <Button
              title="Download CV"
              handleClick={handleDownload}
              icon={<PiArrowLineDownBold />}
              appearence="primary"
            />
          {/* </a> */}
        </div>

        {/* <div className={`${css_prefix}button`}>
          <a
            style={{ all: "unset" }}
            href={"https://1drv.ms/b/s!Ag98EnUm4trDiU0q2N-jd_mk9Zpb?e=E2XcSx"}
            target="_blank"
            type="application/pdf"
            rel="alternate"
          >
            <Button
              title="Download CV"
              handleClick={console.log}
              icon={<PiArrowLineDownBold />}
              appearence="secondary"
            />
          </a>
        </div> */}

        <div className={`${css_prefix}button`}>
          <Button
            handleClick={console.log}
            icon={<LinkedIn link={LINKED_IN_PERSONAL_LINK} />}
            appearence="secondary"
          />
        </div>

        <div className={`${css_prefix}button`}>
          <Button
            handleClick={console.log}
            icon={<Github link={GITHUB_PROFILE_PERSONAL_LINK} />}
            appearence="secondary"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Intro = IntroComponent;
