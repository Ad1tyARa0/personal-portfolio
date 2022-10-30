import React, { Fragment, useState } from 'react';

// SCSS.
import './HamburgerIcon.scss';

// Components -- common -- hamburger - icon
const css_prefix = 'c--c--h-i__';

// Component props.
interface HamburgerIconProps {
  show: boolean;
  onClickToggleMenu: () => void;
}

const HamburgerIconComponent: React.FunctionComponent<HamburgerIconProps> = ({
  show,
  onClickToggleMenu,
}) => {
  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}wrapper`}>
        <input type='checkbox' checked={show} onChange={onClickToggleMenu} />

        <div className={`${css_prefix}bun`}>
          <div className={`${css_prefix}burger`} />
        </div>
      </div>
    </div>
  );
};

export const HamburgerIcon = HamburgerIconComponent;
