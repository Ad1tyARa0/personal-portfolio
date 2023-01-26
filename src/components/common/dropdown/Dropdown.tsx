import React, { useRef } from "react";
import { Link } from "gatsby";

// Icons.
import {
  IoCallOutline,
  IoPrismOutline,
  IoFolderOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";

// Custom hooks.
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

// SCSS.
import "./Dropdown.scss";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

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
      title: "About",
      icon: <AiOutlineUser />,
      to: "/",
    },

    {
      id: 4,
      title: "Experience",
      icon: <IoBriefcaseOutline />,
      to: "/experience",
    },

    {
      id: 2,
      title: "Skills",
      icon: (
        <div style={{ rotate: "220deg" }}>
          <IoPrismOutline />
        </div>
      ),
      to: "/skills",
    },

    {
      id: 3,
      title: "Work",
      icon: <IoFolderOutline />,
      to: "/projects",
    },

    {
      id: 5,
      title: "Contact Me",
      icon: <AiOutlinePhone />,
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
