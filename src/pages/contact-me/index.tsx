import React, { FC, useState } from "react";
import { SiLinkedin, SiGithub, SiMinutemailer } from "react-icons/si";
// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// Context.
import { ThemeContext } from "../../context/ThemeContext";

interface ContactMeInterface {}

// SCSS.
import "./contact-me.scss";

const css_prefix = "c-m__";

interface ContactMeInterface {}

const ContactMe: FC<ContactMeInterface> = () => {
  const { theme } = React.useContext(ThemeContext);

  const renderContainer = (title: string, icon: JSX.Element) => {
    return (
      <div
        className={`${css_prefix}card ${
          theme === "dark" ? css_prefix + "card-dark" : ""
        }`}
      >
        <div className={`${css_prefix}card-title`}>{title}</div>

        <div className={`${css_prefix}card-icon`}>{icon}</div>
      </div>
    );
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Contact Me</div>

        <div className={`${css_prefix}inner-main`}>
          {renderContainer("LinkedIn", <SiLinkedin />)}

          {renderContainer("GitHub", <SiGithub />)}

          {renderContainer("Email", <SiMinutemailer />)}
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactMe;
