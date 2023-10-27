import React from "react";
import { motion } from "framer-motion";

// Components.
import { Heading } from "../common/heading/Heading";

// Hooks.
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// SCSS.
import "./Projects.scss";
import { graphql, useStaticQuery } from "gatsby";
import { ProjectsType } from "../../utils/types/projects";
import { Project } from "./Project";
import { useThemeContext } from "../../context/ThemeContext";

const css_prefix = "c--p__";

// Component props.
interface ProjectsProps {}

const ProjectsComponent: React.FunctionComponent<ProjectsProps> = () => {
  const { ref } = useSectionInView("Projects");

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

  console.log(data);

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
            return <Project payload={e} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export const Projects = ProjectsComponent;
