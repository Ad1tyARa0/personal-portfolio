import React, { useRef } from "react";
import { PiArrowSquareOutBold } from "react-icons/pi";
import { useScroll, useTransform, motion } from "framer-motion";

// Componennts.
import { Heading } from "../common/heading/Heading";
import { Button } from "../common/button/Button";
import { Github } from "../../assets/icons/github/Github";

// Hooks
import { useThemeContext } from "../../context/ThemeContext";

// Types.
import { ProjectType } from "../../utils/types/projects";

// SCSS.
import "./Projects.scss";

const css_prefix = "c--p__";

// Component props.
interface ProjectProps {
  payload: ProjectType;
}

const ProjectComponent: React.FunctionComponent<ProjectProps> = ({
  payload,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { theme } = useThemeContext();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className={`${css_prefix}project-main ${
        theme === "dark" ? css_prefix + "project-main-dark" : ""
      }`}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      key={payload.data.title.text}
    >
      <div className={`${css_prefix}project-header`}>
        <Heading text={payload.data.title.text} variant="subheading" />

        <div className={`${css_prefix}project-header-button-main`}>
          <div className={`${css_prefix}project-header-button`}>
            <Button
              handleClick={console.log}
              icon={
                <Github
                  link={payload.data.source_code.url}
                  title="View Source"
                />
              }
              appearence="secondary"
            />
          </div>

          {payload.data.website.url && (
            <div className={`${css_prefix}project-header-button`}>
              <a
                href={payload.data.website.url}
                target="_blank"
                className={`${css_prefix}link`}
              >
                <Button
                  handleClick={console.log}
                  icon={<PiArrowSquareOutBold />}
                  appearence="primary"
                />
              </a>
            </div>
          )}
        </div>
      </div>

      <div className={`${css_prefix}project-description`}>
        {payload.data.description.text}
      </div>

      <div className={`${css_prefix}project-ts-container`}>
        {payload.data.tech_stack.map(e => {
          return (
            <div key={e.stack.text} className={`${css_prefix}project-ts-item`}>
              <img
                src={e.stack_image.url}
                alt={e.stack_image.alt}
                className={`${css_prefix}project-ts-item-icon`}
              />

              <div className={`${css_prefix}project-ts-item-title`}>
                {e.stack.text}
              </div>
            </div>
          );
        })}
      </div>

      <img
        className={`${css_prefix}project-image`}
        src={payload.data.project_image.url}
        alt={payload.data.project_image.alt}
      />

      <div className={`${css_prefix}project-footer`}>
        {payload.data.features.text.split(".").map(e => {
          return (
            <div className={`${css_prefix}feature`} key={e}>
              {e}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export const Project = ProjectComponent;
