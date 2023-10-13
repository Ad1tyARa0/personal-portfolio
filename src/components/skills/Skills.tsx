import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../common/heading/Heading";
import { graphql, navigate, useStaticQuery } from "gatsby";

// SCSS.
import "./Skills.scss";

const css_prefix = "c--s__";

// Component props.
interface SkillsProps {
  skillsRef: React.Ref<HTMLDivElement> | undefined;
  theme: string;
}

const SkillsComponent: React.FunctionComponent<SkillsProps> = ({
  skillsRef,
  theme,
}) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSkills {
        nodes {
          data {
            category {
              text
            }
            category_items {
              image {
                url
                alt
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <div ref={skillsRef}>
      <motion.div
        className={`${css_prefix}main ${
          theme === "dark" ? css_prefix + "main-dark" : ""
        }`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Heading text="Skills" />

        <div style={{ maxWidth: "800px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque
          alias unde veniam eos? Impedit corporis facere quia veritatis nobis
          aut aperiam recusandae doloribus illum perferendis ea neque, quod
          voluptatibus.
        </div>
      </motion.div>
    </div>
  );
};

export const Skills = SkillsComponent;
