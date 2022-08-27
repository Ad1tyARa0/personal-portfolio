import React, { useState } from 'react';

// SCSS.
import './HamburgerIcon.scss';

// Components -- common -- hamburger - icon
const css_prefix = 'c--c--h-i__';

// Component props.
interface HamburgerIconProps {}

const HamburgerIconComponent: React.FunctionComponent<
  HamburgerIconProps
> = () => {
  const [show, setShow] = useState<boolean>(false);

  console.log(show);

  return (
    <div className={`${css_prefix}menu-icon`}>
      <input
        className={`${css_prefix}menu-icon-checkbox ${
          show ? css_prefix + 'menu-icon-checkbox-active' : ''
        }`}
        type='checkbox'
        checked={show}
        onChange={() => setShow(!show)}
      />
      <div className={`${css_prefix}menu-item-main`}>
        <span className={`${css_prefix}menu-item`}></span>
        <span className={`${css_prefix}menu-item`}></span>
      </div>
    </div>
  );
};

export const HamburgerIcon = HamburgerIconComponent;
