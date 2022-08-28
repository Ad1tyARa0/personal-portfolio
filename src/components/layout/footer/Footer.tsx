import React, { FC } from 'react';

// SCSS.
import './Footer.scss';

// Components -- layout -- footer
const css_prefix = 'c--l--f__';

// Component props.
interface FooterProps {}

const FooterComponent: FC<FooterProps> = () => {
  return (
    <footer className={`${css_prefix}main`}>
      <p>footer</p>
    </footer>
  );
};

export const Footer = FooterComponent;
