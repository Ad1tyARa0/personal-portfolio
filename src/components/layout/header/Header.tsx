import React, { FC, useState } from "react";

// Icons.
import {
  IoPrismOutline,
  IoFolderOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

// Components.
import { Dropdown } from "../../common/dropdown/Dropdown";
import { ThemeButton } from "../../common/theme-button/ThemeButton";
import { HamburgerIcon } from "../../common/hamburger-icon/HamburgerIcon";

// SCSS.
import "./Header.scss";
import { ItemsArrayType } from "../../../utils/types/common";
import { navigate } from "gatsby";

// Components -- layout -- header
const css_prefix = "c--l--h__";

// Component props.
interface HeaderProps {
  theme: string;
  switchTheme: (payload: string) => void;
}

const HeaderComponent: FC<HeaderProps> = ({ theme, switchTheme }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const onClickToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onClickHideDropdown = () => {
    setShowDropdown(false);
  };

  const ITEMS: ItemsArrayType[] = [
    {
      id: 1,
      title: "About",
      icon: <AiOutlineUser />,
      to: "/",
    },

    {
      id: 2,
      title: "Experience",
      icon: <IoBriefcaseOutline />,
      to: "/experience",
    },

    {
      id: 3,
      title: "Skills",
      icon: (
        <div style={{ rotate: "220deg" }}>
          <IoPrismOutline />
        </div>
      ),
      to: "/skills",
    },

    {
      id: 4,
      title: "Projects",
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
                <div
                  className={`${css_prefix}link-item-number ${
                    theme === "dark" ? css_prefix + "link-item-number-dark" : ""
                  }`}
                >
                  {e.id}.
                </div>

                <div className={`${css_prefix}link-item-title`}>{e.title}</div>
              </div>
            );
          })}
        </div>

        <div className={`${css_prefix}menu`}>
          <HamburgerIcon
            show={showDropdown}
            onClickToggleMenu={onClickToggleDropdown}
          />

          <Dropdown
            theme={theme}
            items={ITEMS}
            onClickHideDropdown={onClickHideDropdown}
            showDropdown={showDropdown}
          />
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
