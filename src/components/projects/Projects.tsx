import React from "react";

// SCSS.
import "./Projects.scss";
import { Heading } from "../common/heading/Heading";

const css_prefix = "c--p__";

// Component props.
interface ProjectsProps {}

const ProjectsComponent: React.FunctionComponent<ProjectsProps> = () => {
  return (
    <section className={`${css_prefix}main`}>
      <Heading text="Projects" />

      <div style={{ maxWidth: "800px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
        alias unde veniam eos? Impedit corporis facere quia veritatis nobis aut
        aperiam recusandae doloribus illum perferendis ea neque, quod
        voluptatibus.
      </div>
    </section>
  );
};

export const Projects = ProjectsComponent;
