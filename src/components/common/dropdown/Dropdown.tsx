import React, { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "gatsby";

// Icons.
import {
  FaUser,
  FaCode,
  FaHome,
  FaToolbox,
  FaUserTie,
  FaClipboardList,
  FaPhoneSquareAlt,
} from "react-icons/fa";

// Custom hooks.
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

// SCSS.
import "./Dropdown.scss";

// Components -- common -- dropdown
const css_prefix = "c--c--d__";

// Component props.
interface DropdownProps {
  theme: string;
  showDropdown: boolean;
  onClickHideDropdown: () => void;
}

const DropdownComponent: React.FunctionComponent<DropdownProps> = ({
  theme,
  showDropdown,
  onClickHideDropdown,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const ITEMS = [
    {
      id: 1,
      title: "Home",
      icon: <FaHome />,
      to: "/",
    },

    {
      id: 2,
      title: "Skills",
      icon: <FaToolbox />,
      to: "/skills",
    },

    {
      id: 3,
      title: "Projects",
      icon: <FaCode />,
      to: "/projects",
    },

    {
      id: 4,
      title: "Experience",
      icon: <FaUserTie />,
      to: "/experience",
    },

    {
      id: 5,
      title: "Contact Me",
      icon: <FaPhoneSquareAlt />,
      to: "/contact-me",
    },
  ];

  // useOnClickOutside(dropdownRef, onClickHideDropdown);

  return (
    <div
      className={`${css_prefix}main       
      ${
        showDropdown ? css_prefix + "main-active" : css_prefix + "main-inactive"
      }
      ${theme === "dark" ? css_prefix + "dark" : css_prefix + "light"}`}
      ref={dropdownRef}
    >
      <div className={`${css_prefix}body`}>
        {ITEMS.map(e => {
          return (
            <Link to={e.to} key={e.id} className={`${css_prefix}link-main`}>
              <div
                className={`${css_prefix}item-main ${
                  theme === "dark"
                    ? css_prefix + "dark-item"
                    : css_prefix + "light-item"
                }`}
              >
                <div className={`${css_prefix}item-icon`}>{e.icon}</div>

                <div className={`${css_prefix}item-title`}>{e.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const Dropdown = DropdownComponent;
