import React, { FC, useState } from "react";

// Components.
import { Dropdown } from "../../common/dropdown/Dropdown";
import { ThemeButton } from "../../common/theme-button/ThemeButton";
import { HamburgerIcon } from "../../common/hamburger-icon/HamburgerIcon";

// SCSS.
import "./Header.scss";

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

        <div className={`${css_prefix}menu`}>
          <HamburgerIcon
            show={showDropdown}
            onClickToggleMenu={onClickToggleDropdown}
          />

          {/* {showDropdown ? ( */}
          <Dropdown
            theme={theme}
            onClickHideDropdown={onClickHideDropdown}
            showDropdown={showDropdown}
          />
          {/* ) : null} */}
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
