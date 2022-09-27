import React, { Fragment, useState } from 'react';

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

  const onClickToggleMenu = () => {
    setShow(!show);
  };

  const renderMenu = () => {
    if (show) {
      return (
        <div style={{ position: 'absolute' }}>
          <h1>hello 123</h1>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`${css_prefix}main`}>
      <div className={`${css_prefix}wrapper`}>
        <input type='checkbox' checked={show} onChange={onClickToggleMenu} />

        <div className={`${css_prefix}bun`}>
          <div className={`${css_prefix}burger`} />
        </div>
      </div>

      {/* {renderMenu()} */}
    </div>
  );
};

export const HamburgerIcon = HamburgerIconComponent;
