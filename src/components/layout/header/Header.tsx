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
import { Location } from "@reach/router";

// SCSS.
import "./Header.scss";
import { ItemsArrayType } from "../../../utils/types/common";
import { navigate } from "gatsby";
import { BsArrowRightCircle } from "react-icons/bs";
import { Button } from "../../common/button/Button";
import { ThemeContext } from "../../../context/ThemeContext";

// Components -- layout -- header
const css_prefix = "c--l--h__";

// Component props.
interface HeaderProps {
  theme: string;
  switchTheme: (payload: string) => void;
  location: any;
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

  interface LinkProps {
    items: {
      id: number;
      title: string;
      icon: JSX.Element;
      to: string;
    }[];

    locationProps: any;
  }

  const Links: React.FC<LinkProps> = ({ items, locationProps }) => {
    const { theme } = React.useContext(ThemeContext);
    return (
      <>
        {items.map(e => {
          return (
            <div
              className={`${css_prefix}link-item`}
              key={e.id}
              onClick={() => navigate(e.to)}
            >
              <div
                className={`${css_prefix}link-item-title ${
                  theme === "dark" ? css_prefix + "link-item-title-dark" : ""
                }`}
              >
                {e.title}
              </div>
            </div>
          );
        })}
      </>
    );
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

    // {
    //   id: 4,
    //   title: "Work",
    //   icon: <BsArrowRightCircle />,
    //   to: "/work",
    // },

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
          {/* <ThemeButton theme={theme} switchTheme={switchTheme} /> */}

          <div className={`${css_prefix}toggle-theme-title`}>invert colors</div>
        </div>

        <div className={`${css_prefix}links`}>
          <Location>
            {locationProps => (
              <Links items={ITEMS} locationProps={locationProps} />
            )}
          </Location>
        </div>

        <div className={`${css_prefix}resume-button`}>
          <a
            href="https://drive.google.com/file/d/1-xJ2PE6sJrNVByeTWWDRSxGWr-OHtYqJ/view?usp=sharing"
            className={`${css_prefix}button-link`}
            target="_blank"
          >
            <Button handleClick={console.log} theme={theme} title="Resume" />
          </a>
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
