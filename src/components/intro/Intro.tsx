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

const css_prefix = "c--i__";

// Component props.
interface IntroProps {
  imageUrl: string;
  title: string;
  name: string;
  role: string;
  theme: string;
  //   introRef: React.Ref<HTMLElement> | undefined;
}

const IntroComponent: React.FunctionComponent<IntroProps> = ({
  imageUrl,
  title,
  name,
  role,
  theme,
  //   introRef,
}) => {
  return (
    <div className={`${css_prefix}main`}>
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
        <div className={`${css_prefix}title`}>{title}</div>
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
