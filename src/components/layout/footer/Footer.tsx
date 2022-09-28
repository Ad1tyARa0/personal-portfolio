import React, { FC } from 'react';

// SCSS.
import './Footer.scss';

// Components -- layout -- footer
const css_prefix = 'c--l--f__';

// Component props.
interface FooterProps {
  theme: string;
}

const FooterComponent: FC<FooterProps> = ({ theme }) => {
  return (
    <footer
      className={`${css_prefix}main ${
        theme === 'dark' ? css_prefix + 'main-dark' : ''
      }`}
    >
      <div>footer</div>
    </footer>
  );
};

export const Footer = FooterComponent;
