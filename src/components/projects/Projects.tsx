import React from "react";
import { motion } from "framer-motion";

// Components.
import { Heading } from "../common/heading/Heading";

// Hooks.
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// SCSS.
import "./Projects.scss";

const css_prefix = "c--p__";

// Component props.
interface ProjectsProps {}

const ProjectsComponent: React.FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects");

  return (
    <div ref={ref} id="Projects">
      <motion.div
        className={`${css_prefix}main`}
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
