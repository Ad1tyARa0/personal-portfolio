import React, { FC } from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

// SCSS.
import "./Footer.scss";
import { Github } from "../../../assets/icons/github/Github";
import { LinkedIn } from "../../../assets/icons/linkedin/LinkedIn";
import { Twitter } from "../../../assets/icons/twitter/Twitter";
import { Email } from "../../../assets/icons/email/Email";
import {
  LINKED_IN_PERSONAL_LINK,
  EMAIL_ADDRESS_PERSONAL_LINK,
  GITHUB_PROFILE_PERSONAL_LINK,
  TWITTER_PROFILE_PERSONAL_LINK,
} from "../../../utils/constants/links";

// Components -- layout -- footer
const css_prefix = "c--l--f__";

// Component props.
interface FooterProps {
  theme: string;
}

const FooterComponent: FC<FooterProps> = ({ theme }) => {
  const ICONS = [
    {
      id: 1,
      icon: <Email theme={theme} link={EMAIL_ADDRESS_PERSONAL_LINK} />,
    },

    {
      id: 2,
      icon: <LinkedIn theme={theme} link={LINKED_IN_PERSONAL_LINK} />,
    },

    {
      id: 3,
      icon: <Github theme={theme} link={GITHUB_PROFILE_PERSONAL_LINK} />,
    },

    {
      id: 4,
      icon: <Twitter theme={theme} link={TWITTER_PROFILE_PERSONAL_LINK} />,
    },
  ];

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

        {ICONS.map(e => {
          return (
            <div key={e.id} className={`${css_prefix}icons`}>
              {e.icon}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export const Footer = FooterComponent;
