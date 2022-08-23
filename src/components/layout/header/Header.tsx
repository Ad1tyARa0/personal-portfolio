import { Link } from 'gatsby';
import React, { FC } from 'react';
import { Logo } from '../../../assets';
import { TbSun, TbMoon } from 'react-icons/tb';

// SCSS.
import './Header.scss';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  title: string;
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const HeaderComponent: FC<HeaderProps> = ({
  title,
  toggleDarkMode,
  darkMode,
}) => {
  return (
    <header className={`${css_prefix}main`}>
      <Link to='/'>
        <p className={`${css_prefix}title`}>{title}</p>
      </Link>

      <Link to='/'>
        <img
          alt='logo'
          src={Logo}
          width={50}
          height={50}
          className={`${css_prefix}logo`}
        />
      </Link>

      <div className={`${css_prefix}header-button`} onClick={toggleDarkMode}>
        <div
          className={`${css_prefix}icon ${
            darkMode ? css_prefix + 'icon-selected' : ''
          }`}
        >
          <TbMoon />
        </div>

        <div
          className={`${css_prefix}icon  ${
            darkMode ? css_prefix + 'icon-selected' : ''
          }`}
        >
          <TbSun />
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
