import React, { useRef } from "react";
import { Link } from "gatsby";

// Custom hooks.
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

// SCSS.
import "./Dropdown.scss";
import { ItemsArrayType } from "../../../utils/types/common";

// Components -- common -- dropdown
const css_prefix = "c--c--d__";

// Component props.
interface DropdownProps {
  theme: string;
  showDropdown: boolean;
  onClickHideDropdown: () => void;
  items: ItemsArrayType[];
}

const DropdownComponent: React.FunctionComponent<DropdownProps> = ({
  theme,
  showDropdown,
  onClickHideDropdown,
  items,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        {items.map(e => {
          return (
            <Link to={e.to} key={e.id} className={`${css_prefix}link-main`}>
              <div
                className={`${css_prefix}item-main ${
                  theme === "dark"
                    ? css_prefix + "dark-item"
                    : css_prefix + "light-item"
                }`}
              >
                <div className={`${css_prefix}item-title`}>{e.title}</div>
                <div className={`${css_prefix}item-icon`}>{e.icon}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const Dropdown = DropdownComponent;
