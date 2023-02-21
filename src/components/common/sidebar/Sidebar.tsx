import React, { useRef } from "react";
import { Link } from "gatsby";

// Custom hooks.
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

// SCSS.
import "./Sidebar.scss";
import { ItemsArrayType } from "../../../utils/types/common";
import { Button } from "../button/Button";

// Components -- common -- sidebar
const css_prefix = "c--c--s__";

// Component props.
interface SidebarProps {
  theme: string;
  showSidebar: boolean;
  onClickHideSidebar: () => void;
  items: ItemsArrayType[];
  sidebarRef: React.RefObject<HTMLDivElement>;
}

const SidebarComponent: React.FunctionComponent<SidebarProps> = ({
  theme,
  showSidebar,
  onClickHideSidebar,
  items,
  sidebarRef,
}) => {
  // useOnClickOutside(sidebarRef, onClickHideSidebar);

  return (
    <div
      className={`${css_prefix}main
      ${showSidebar ? css_prefix + "main-active" : css_prefix + "main-inactive"}
      ${theme === "dark" ? css_prefix + "dark" : css_prefix + "light"}`}
      ref={sidebarRef}
    >
      <div className={`${css_prefix}body`}>
        <div className={`${css_prefix}links`}>
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

        <div className={`${css_prefix}button`}>
          <Button
            handleClick={() => {}}
            theme={theme}
            title="Resume"
            withShadow={true}
          />
        </div>
      </div>
    </div>
  );
};

export const Sidebar = SidebarComponent;
