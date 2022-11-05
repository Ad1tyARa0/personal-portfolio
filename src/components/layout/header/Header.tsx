import React, { FC, useState } from 'react';

// Components.
import { Dropdown } from '../../common/dropdown/Dropdown';
import { ThemeButton } from '../../common/theme-button/ThemeButton';
import { HamburgerIcon } from '../../common/hamburger-icon/HamburgerIcon';

// SCSS.
import './Header.scss';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  theme: string;
  switchTheme: (payload: string) => void;
}

const HeaderComponent: FC<HeaderProps> = ({ theme, switchTheme }) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(true);

  const onClickToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onClickHideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header
      className={`${css_prefix}main ${
        theme === 'dark' ? css_prefix + 'main-dark' : ''
      }  `}
    >
      <div className={`${css_prefix}inner-main`}>
        <ThemeButton theme={theme} switchTheme={switchTheme} />

        <HamburgerIcon
          show={showDropdown}
          onClickToggleMenu={onClickToggleDropdown}
        />

        {showDropdown ? (
          <Dropdown theme={theme} onClickHideDropdown={onClickHideDropdown} />
        ) : null}
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
