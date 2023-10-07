import React from "react";

import { motion } from "framer-motion";
// SCSS.
import "./Nav.scss";
import Scrollbars from "react-custom-scrollbars-2";

const css_prefix = "c--n__";

// Component props.
interface NavProps {
  handleClickNavigateToPage: (pageId: string) => void;
}

const NavComponent: React.FunctionComponent<NavProps> = ({
  handleClickNavigateToPage,
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
      title: "Contact",
    },
  ];

  const [tab, seTab] = React.useState<string>("1");

  return (
    <motion.div
      className={`${css_prefix}main`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {TABS.map(e => {
        return (
          <motion.div
            className={`${css_prefix}tab ${
              tab === e.id ? css_prefix + "selected-tab" : ""
            }`}
            key={e.id}
            onClick={() => {
              seTab(e.id);
              handleClickNavigateToPage(e.id);
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {e.title}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export const Nav = NavComponent;
