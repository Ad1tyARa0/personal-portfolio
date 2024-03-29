import React from "react";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";

// Components.
import { Heading } from "../common/heading/Heading";

// Hooks.
import { useSectionInView } from "../../hooks/useIntersectionObserver";

// SCSS.
import "./Skills.scss";
import { useThemeContext } from "../../context/ThemeContext";

const css_prefix = "c--s__";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Component props.
interface SkillsProps {}

const SkillsComponent: React.FunctionComponent<SkillsProps> = () => {
  const { ref } = useSectionInView("Skills");

  const { theme } = useThemeContext();

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

  interface SkillInterface {
    image: {
      url: string;
      alt: string;
    };
    title: { text: string };
  }

  const skills = React.useMemo(
    () =>
      data.allPrismicSkills.nodes
        .map((e: any) => e.data.category_items.map((c: any) => c))
        .flat(1)
        .sort((a: SkillInterface, b: SkillInterface) =>
          a.title.text.toLowerCase().localeCompare(b.title.text.toLowerCase())
        ),
    [data.allPrismicSkills.nodes]
  );

  return (
    <div ref={ref} id="Skills">
      <motion.div
        className={`${css_prefix}main`}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <Heading text="My Skills" />

        <div
          style={{ maxWidth: "800px" }}
          className={`${css_prefix}skills-main`}
        >
          {skills.map((e: SkillInterface, index: number) => {
            return (
              <motion.li
                className={`${css_prefix}skills-item-main ${
                  theme === "dark" ? css_prefix + "skills-item-main-dark" : ""
                }`}
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <img
                  className={`${css_prefix}skills-item-image`}
                  src={e.image.url}
                  alt={e.image.alt}
                />

                <div className={`${css_prefix}skills-item-title`}>
                  {e.title.text}
                </div>
              </motion.li>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export const Skills = SkillsComponent;
