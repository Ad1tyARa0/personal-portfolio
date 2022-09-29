import React, { FC } from 'react';
import { gatsbyLogo } from '../../../assets/svg';

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
      <div className={`${css_prefix}body`}>
        <div className={`${css_prefix}text`}>Built With</div>

        <div className={`${css_prefix}body-logo`}>
          <img src={gatsbyLogo} alt='Gatsby' />
        </div>
      </div>
    </footer>
  );
};

export const Footer = FooterComponent;
