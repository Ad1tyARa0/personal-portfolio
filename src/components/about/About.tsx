import React from "react";
import { motion } from "framer-motion";

// Components.
import { Heading } from "../common/heading/Heading";

// Hooks.
import { useThemeContext } from "../../context/ThemeContext";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// SCSS.
import "./About.scss";

const css_prefix = "c--a__";

// Component props.
interface AboutProps {}

const AboutComponent: React.FunctionComponent<AboutProps> = () => {
  const { ref } = useSectionInView("About");

  const { theme } = useThemeContext();

  return (
    <div ref={ref} className={`${css_prefix}main`} id="About">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        //   animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className={`${css_prefix}inner-main`}
      >
        <Heading text="About Me" />

        <p className={`${css_prefix}about-text`}>
          While graduating with a degree in{" "}
          <span
            className={`${css_prefix}font-bold ${
              theme === "dark" ? css_prefix + "font-bold-dark" : ""
            }`}
          >
            Computer Science
          </span>{" "}
          my passion for programming and software development really took off.{" "}
          <span className={`${css_prefix}font-italic`}>
            My favorite part of programming
          </span>{" "}
          is the problem-solving aspect. I{" "}
          <span className={`${css_prefix}font-underline`}>love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span
            className={`${css_prefix}font-bold ${
              theme === "dark" ? css_prefix + "font-bold-dark" : ""
            }`}
          >
            React, GraphQL, Express / Apollo / Nest, Node, and PostgreSQL
          </span>
          . I use TypeScript with all my personal and professional projects. I
          am always looking to learn new technologies. I am currently looking
          for a{" "}
          <span
            className={`${css_prefix}font-bold ${
              theme === "dark" ? css_prefix + "font-bold-dark" : ""
            }`}
          >
            full-time position
          </span>{" "}
          as a software developer.
        </p>

        <p className={`${css_prefix}about-text`}>
          <span className={`${css_prefix}font-italic`}>
            When I'm not coding
          </span>
          , I enjoy playing soccer.
        </p>
      </motion.div>
    </div>
  );
};

export const About = AboutComponent;
