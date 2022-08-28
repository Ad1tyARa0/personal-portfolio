import React from 'react';

// SCSS.
import './Menu.scss';

// Components -- common -- menu
const css_prefix = 'c--c--m__';

// Component props.
interface MenuProps {}

const MenuComponent: React.FunctionComponent<MenuProps> = () => {
  return (
    <div className={`${css_prefix}main`}>
      <div>Menu</div>
    </div>
  );
};

export const Menu = MenuComponent;
