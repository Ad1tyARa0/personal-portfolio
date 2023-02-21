import React, { FC, useRef, useState } from "react";

// Icons.
import {
  IoPrismOutline,
  IoFolderOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

// Components.
import { Sidebar } from "../../common/sidebar/Sidebar";
import { ThemeButton } from "../../common/theme-button/ThemeButton";
import { HamburgerIcon } from "../../common/hamburger-icon/HamburgerIcon";

// SCSS.
import "./Header.scss";
import { ItemsArrayType } from "../../../utils/types/common";
import { navigate } from "gatsby";
import { BsArrowRightCircle } from "react-icons/bs";
import { Button } from "../../common/button/Button";

// Components -- layout -- header
const css_prefix = "c--l--h__";

// Component props.
interface HeaderProps {
  theme: string;
  switchTheme: (payload: string) => void;
}

const HeaderComponent: FC<HeaderProps> = ({ theme, switchTheme }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const onClickToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const onClickHideSidebar = () => {
    setShowSidebar(false);
  };

  const ITEMS: ItemsArrayType[] = [
    {
      id: 1,
      title: "About",
      icon: <BsArrowRightCircle />,
      to: "/",
    },

    {
      id: 2,
      title: "Experience",
      icon: <BsArrowRightCircle />,
      to: "/experience",
    },

    {
      id: 3,
      title: "Skills",
      icon: <BsArrowRightCircle />,
      to: "/skills",
    },

    {
      id: 4,
      title: "Work",
      icon: <BsArrowRightCircle />,
      to: "/work",
    },

    {
      id: 5,
      title: "Contact",
      icon: <BsArrowRightCircle />,
      to: "/contact",
    },
  ];

  return (
    <header
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }  `}
    >
      <div className={`${css_prefix}inner-main`}>
        <div className={`${css_prefix}toggle-theme-main`}>
          <ThemeButton theme={theme} switchTheme={switchTheme} />

          <div className={`${css_prefix}toggle-theme-title`}>invert colors</div>
        </div>

        <div className={`${css_prefix}links`}>
          {ITEMS.map(e => {
            return (
              <div
                className={`${css_prefix}link-item`}
                key={e.id}
                onClick={() => navigate(e.to)}
              >
                <div className={`${css_prefix}link-item-title`}>{e.title}</div>
              </div>
            );
          })}
        </div>

        <div className={`${css_prefix}resume-button`}>
          <Button handleClick={console.log} theme={theme} title="Resume" />
        </div>

        <div className={`${css_prefix}menu`}>
          <div ref={sidebarRef}>
            <HamburgerIcon
              show={showSidebar}
              onClickToggleMenu={onClickToggleSidebar}
            />
          </div>

          <Sidebar
            sidebarRef={sidebarRef}
            theme={theme}
            items={ITEMS}
            onClickHideSidebar={onClickHideSidebar}
            showSidebar={showSidebar}
          />
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
