import React, { FC } from 'react';
import { navigate } from 'gatsby';
import { BiWorld } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

// Components.
import { HamburgerIcon } from '../../common/hamburger-icon/HamburgerIcon';

// Contexts
import { ThemeContext } from '../../../context/ThemeContext';

// SCSS.
import './Header.scss';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  title: string;
  theme: string;
  switchTheme: (payload: string) => void;
}

const HeaderComponent: FC<HeaderProps> = ({ title, theme, switchTheme }) => {
  const _renderLanguageIcon = () => {
    return (
      <div className={`${css_prefix}lang-main`}>
        <BiWorld className={`${css_prefix}icon`} />

        <div className={`${css_prefix}text`}>EN</div>
      </div>
    );
  };

  const _renderToggleThemeButton = () => {
    return (
      <div className={`${css_prefix}toggle-theme-container`}>
        {theme === 'light' ? (
          <div
            className={`${css_prefix}button`}
            onClick={() => switchTheme('dark')}
          >
            <MdDarkMode />
          </div>
        ) : (
          <div
            className={`${css_prefix}button`}
            onClick={() => switchTheme('light')}
          >
            <MdLightMode />
          </div>
        )}
      </div>
    );
  };

  const _renderHeaderLink = () => {
    return (
      <div className={`${css_prefix}title-main`}>
        <div
          className={`${css_prefix}title`}
          onClick={() => navigate('/contact-me')}
        >
          {title}
        </div>

        <BsArrowUpRight className={`${css_prefix}link`} />

        <div className={`${css_prefix}menu-wrapper`}>
          <HamburgerIcon />
        </div>
      </div>
    );
  };

  return (
    <header
      className={`${css_prefix}main ${
        theme === 'dark' ? css_prefix + 'main-dark' : ''
      }  `}
    >
      <div className={`${css_prefix}inner-main`}>
        {_renderLanguageIcon()}

        {_renderToggleThemeButton()}

        {_renderHeaderLink()}
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
