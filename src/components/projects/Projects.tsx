import React from "react";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";

// Components.
import { Project } from "./Project";
import { Heading } from "../common/heading/Heading";

// Hooks.
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// Types.
import { ProjectsType } from "../../utils/types/projects";

// SCSS.
import "./Projects.scss";

const css_prefix = "c--p__";

// Component props.
interface ProjectsProps {}

const ProjectsComponent: React.FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  const data: ProjectsType = useStaticQuery(graphql`
    query {
      allPrismicProjects {
        nodes {
          data {
            title {
              text
            }

            description {
              text
            }

            features {
              text
            }

            title {
              text
            }

            project_image {
              alt
              url
            }

            source_code {
              url
            }

            website {
              url
            }

            tech_stack {
              stack {
                text
              }

              stack_image {
                alt
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div ref={ref} id="Projects">
      <motion.div
        className={`${css_prefix}main`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Heading text="Projects" />

        <div className={`${css_prefix}inner-main`}>
          {data.allPrismicProjects.nodes.map(e => {
            return <Project payload={e} key={e.data.title.text} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = ProjectsComponent;
