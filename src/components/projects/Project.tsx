import React, { useRef, useState } from "react";

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
import { Carousel } from "../carousel/Carousel";

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

  const images = payload.data.images.map(e => {
    return {
      alt: e.project_image.alt,
      url: e.project_image.url,
    };
  });

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

      <div className={`${css_prefix}project-images-description`}>
        {payload.data.description.text}
      </div>

      <div className={`${css_prefix}project-images-container`}>
        <Carousel images={images} />
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
          {payload.data.features.text.split(".").map(e => {
            if (e.length !== 0) {
              return (
                <div className={`${css_prefix}project-features-container-item`}>
                  <div
                    className={`${css_prefix}project-features-container-icon`}
                  >
                    <PiDotOutlineBold />
                  </div>

                  <div
                    className={`${css_prefix}project-features-container-text`}
                    key={e}
                  >
                    {e}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};

export const Project = ProjectComponent;
