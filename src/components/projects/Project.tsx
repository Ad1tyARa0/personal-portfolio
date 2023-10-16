import React, { useRef } from "react";

// SCSS.
import "./Projects.scss";
import { ProjectType } from "../../utils/types/projects";
import { useScroll, useTransform, motion } from "framer-motion";

import {
  PiArrowSquareOutBold,
  PiDotOutlineBold,
  PiCircleDuotone,
} from "react-icons/pi";
import { Heading } from "../common/heading/Heading";

const css_prefix = "c--p__";

// Component props.
interface ProjectProps {
  payload: ProjectType;
}

const ProjectComponent: React.FunctionComponent<ProjectProps> = ({
  payload,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className={`${css_prefix}project-main`}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div className={`${css_prefix}project-header`}>
        <Heading text={payload.data.title.text} variant="subheading" />

        <div className={`${css_prefix}project-header-icon`}>
          <PiArrowSquareOutBold />
        </div>
      </div>

      <div className={`${css_prefix}project-images-container`}>
        <div className={`${css_prefix}project-images`}>
          {payload.data.images.map(e => {
            return (
              <img
                key={e.project_image.url}
                className={`${css_prefix}project-image`}
                src={e.project_image.url}
                alt={e.project_image.alt}
                id={e.project_image.alt}
              />
            );
          })}
        </div>

        <div className={`${css_prefix}slider-nav`}>
          {new Array(payload.data.images.length).fill(0).map((e, i) => {
            return (
              <a
                href="javascript:;"
                onClick={() => {
                  window.location.href = `#${payload.data.images[i].project_image.alt}`;
                }}
                key={i}
              >
                <PiCircleDuotone />
              </a>
            );
          })}
        </div>
      </div>

      <div className={`${css_prefix}project-footer`}>
        <div className={`${css_prefix}project-ts-container`}>
          {payload.data.tech_stack.map(e => {
            return (
              <div
                key={e.stack.text}
                className={`${css_prefix}project-ts-item`}
              >
                <img
                  src={e.stack_image.url}
                  alt={e.stack_image.alt}
                  className={`${css_prefix}project-ts-item-icon`}
                />

                <div className={`${css_prefix}project-ts-item-text`}>
                  {e.stack.text}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`${css_prefix}project-features-container`}>
          {payload.data.features.map(e => {
            return (
              <div className={`${css_prefix}project-features-container-item`}>
                <div className={`${css_prefix}project-features-container-icon`}>
                  <PiDotOutlineBold />
                </div>

                <div
                  className={`${css_prefix}project-features-container-text`}
                  key={e.feature.text}
                >
                  {e.feature.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export const Project = ProjectComponent;
