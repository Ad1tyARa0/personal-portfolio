import React, { FC } from 'react';

// SCSS.
import './Header.scss';

// Components -- layout -- header
const css_prefix = 'c--l--h__';

// Component props.
interface HeaderProps {
  title: string;
}

const HeaderComponent: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={`${css_prefix}main`}>
      <p className={`${css_prefix}title`}>{title}</p>
    </header>
  );
};

export const Header = HeaderComponent;
