import React from "react";

import { motion } from "framer-motion";
// SCSS.
import "./Nav.scss";
import Scrollbars from "react-custom-scrollbars-2";

const css_prefix = "c--n__";

// Component props.
interface NavProps {
  handleClickNavigateToPage: (pageId: string) => void;
  theme: string;
}

const NavComponent: React.FunctionComponent<NavProps> = ({
  handleClickNavigateToPage,
  theme,
}) => {
  const TABS = [
    {
      id: "1",
      title: "Home",
    },

    {
      id: "2",
      title: "About",
    },

    {
      id: "3",
      title: "Projects",
    },

    {
      id: "4",
      title: "Skills",
    },

    {
      id: "5",
      title: "Experience",
    },

    {
      id: "6",
      title: "Services",
    },

    {
      id: "7",
      title: "Contact",
    },
  ];

  const [tab, seTab] = React.useState<string>("1");

  // ${
  //   tab === e.id ? css_prefix + "selected-tab" : ""
  // }

  return (
    <motion.div
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {TABS.map(e => {
        return (
          <motion.li
            className={`${css_prefix}tab`}
            key={e.id}
            onClick={() => {
              seTab(e.id);
              handleClickNavigateToPage(e.id);
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {e.title}

            {tab === e.id && (
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
        );
      })}
    </motion.div>
  );
};

export const Nav = NavComponent;
