import React, { FC } from "react";
import { gatsbyLogo, githubLogo } from "../../../assets/svg";
import { SiTypescript } from "react-icons/si";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

// SCSS.
import "./Footer.scss";
import { Github } from "../../../assets/icons/github/Github";
import { LinkedIn } from "../../../assets/icons/linkedin/LinkedIn";
import { Twitter } from "../../../assets/icons/twitter/Twitter";
import { Email } from "../../../assets/icons/email/Email";

// Components -- layout -- footer
const css_prefix = "c--l--f__";

// Component props.
interface FooterProps {
  theme: string;
}

const FooterComponent: FC<FooterProps> = ({ theme }) => {
  return (
    <footer
      className={`${css_prefix}main ${
        theme === "dark" ? css_prefix + "main-dark" : ""
      }`}
    >
      <div className={`${css_prefix}body`}>
        <div className={`${css_prefix}copyright-container`}>
          <div className={`${css_prefix}copyright-icon`}>
            <AiOutlineCopyrightCircle />
          </div>

          <div className={`${css_prefix}copyright-text`}>
            2022 Developer Portoflio. All Rights Reserved
          </div>
        </div>

        <div className={`${css_prefix}icons`}>
          <Email theme={theme} />
        </div>

        <div className={`${css_prefix}icons`}>
          <LinkedIn theme={theme} />
        </div>

        <div className={`${css_prefix}icons`}>
          <Github theme={theme} />
        </div>

        <div className={`${css_prefix}icons`}>
          <Twitter theme={theme} />
        </div>
      </div>
    </footer>
  );
};

export const Footer = FooterComponent;
