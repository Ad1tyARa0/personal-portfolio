import React from "react";
import { motion } from "framer-motion";

// SCSS.
import "./Projects.scss";
import { Heading } from "../common/heading/Heading";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

const css_prefix = "c--p__";

// Component props.
interface ProjectsProps {
  theme: string;
}

const ProjectsComponent: React.FunctionComponent<ProjectsProps> = ({
  theme,
}) => {
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref}>
      <motion.div
        className={`${css_prefix}main ${
          theme === "dark" ? css_prefix + "main-dark" : ""
        }`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Heading text="Projects" />

        <div style={{ maxWidth: "800px" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
            alias unde veniam eos? Impedit corporis facere quia veritatis nobis
            aut aperiam recusandae doloribus illum perferendis ea neque, quod
            voluptatibus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
            alias unde veniam eos? Impedit corporis facere quia veritatis nobis
            aut aperiam recusandae doloribus illum perferendis ea neque, quod
            voluptatibus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
            alias unde veniam eos? Impedit corporis facere quia veritatis nobis
            aut aperiam recusandae doloribus illum perferendis ea neque, quod
            voluptatibus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
            alias unde veniam eos? Impedit corporis facere quia veritatis nobis
            aut aperiam recusandae doloribus illum perferendis ea neque, quod
            voluptatibus.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = ProjectsComponent;
