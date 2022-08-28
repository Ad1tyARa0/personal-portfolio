import { navigate } from 'gatsby';
import React, { FC } from 'react';
import { Logo } from '../../../assets';
import { BsArrowUpRight } from 'react-icons/bs';
import { VscMenu } from 'react-icons/vsc';

// SCSS.
import './Header.scss';
import { HamburgerIcon } from '../../common/hamburger-icon/HamburgerIcon';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  title: string;
}

const HeaderComponent: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={`${css_prefix}main`}>
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
