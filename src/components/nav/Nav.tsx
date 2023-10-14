import React from "react";

import { motion } from "framer-motion";
// SCSS.
import "./Nav.scss";
import Scrollbars from "react-custom-scrollbars-2";
import { LINKS } from "../../utils/constants/links";
import { useActiveSectionContext } from "../../context/ActiveSessionContext";
import { SectionName } from "../../utils/types/tabs";
import { ThemeContext, useThemeContext } from "../../context/ThemeContext";
import { Link, navigate } from "gatsby";

const css_prefix = "c--n__";

// Component props.
interface NavProps {
  theme: string;
}

const NavComponent: React.FunctionComponent<NavProps> = ({ theme }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.div
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {LINKS.map((e: any) => {
        return (
          <Link to={e.hash} className={`${css_prefix}link`}>
            <motion.li
              className={`${css_prefix}tab`}
              key={e.hash}
              onClick={() => {
                setActiveSection(e.name);
                setTimeOfLastClick(Date.now());
                navigate(e.hash);
                document
                  .getElementById(`${e.name}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {e.name}

              {activeSection === e.name && (
                <motion.span
                  className={`${css_prefix}selected-tab ${
                    theme === "dark" ? css_prefix + "selected-tab-dark" : ""
                  }`}
                  // className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </motion.li>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const Nav = NavComponent;
