import { navigate } from 'gatsby';
import React, { FC, useContext } from 'react';
import { Logo } from '../../../assets';
import { BsArrowUpRight } from 'react-icons/bs';
import { GrLanguage } from 'react-icons/gr';

import { HamburgerIcon } from '../../common/hamburger-icon/HamburgerIcon';

// SCSS.
import './Header.scss';
import {
  ThemeContext,
  ThemeDispatchContext,
  // ThemeDispatchContext,
} from '../../../context/ThemeContext';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  title: string;
}

const HeaderComponent: FC<HeaderProps> = ({ title }) => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useContext(ThemeDispatchContext);

  const switchTheme = () => {
    dispatch({
      type: 'SET_THEME',
    });
  };

  console.log(dispatch);

  return (
    <header className={`${css_prefix}main`}>
      <div className={`${css_prefix}lang-main`}>
        <GrLanguage className={`${css_prefix}icon`} />

        <div className={`${css_prefix}text`}>EN</div>
      </div>

      <div style={{ display: 'flex' }}>
        <button onClick={switchTheme}>Toggle</button>

        <div>{theme}</div>
      </div>

      <div className={`${css_prefix}title-main`}>
        <p className={`${css_prefix}title`} onClick={() => navigate('/')}>
          {title}
        </p>

        <BsArrowUpRight className={`${css_prefix}link`} />

        <div className={`${css_prefix}menu-wrapper`}>
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
};

export const Header = HeaderComponent;
