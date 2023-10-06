import React from "react";

// SCSS.
import "./Nav.scss";
import Scrollbars from "react-custom-scrollbars-2";

const css_prefix = "c--n__";

// Component props.
interface NavProps {}

const NavComponent: React.FunctionComponent<NavProps> = () => {
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
  return (
    <div className={`${css_prefix}main`}>
      {TABS.map(e => {
        return (
          <div className={`${css_prefix}tab`} key={e.id}>
            {e.title}
          </div>
        );
      })}
    </div>
  );
};

export const Nav = NavComponent;
