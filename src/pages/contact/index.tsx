import React, { FC, useState } from "react";
import { SiLinkedin, SiGithub, SiMinutemailer } from "react-icons/si";

// Components.
import { PageContainer } from "../../components/layout/container/PageContainer";

// Context.
import { ThemeContext } from "../../context/ThemeContext";

interface ContactInterface {}

// SCSS.
import "./index.scss";

const css_prefix = "p--c-m__";

interface ContactInterface {}

const Contact: FC<ContactInterface> = () => {
  const { theme } = React.useContext(ThemeContext);

  const renderContainer = (
    title: string,
    icon: JSX.Element,
    key: number,
    link: string
  ) => {
    return (
      <div
        className={`${css_prefix}card ${
          theme === "dark" ? css_prefix + "card-dark" : ""
        }`}
        key={key}
      >
        <a href={link} className={`${css_prefix}link`} target="_blank">
          <div
            className={`${css_prefix}card-title ${
              theme === "dark" ? css_prefix + "card-title-dark" : ""
            }`}
          >
            {title}
          </div>

          <div
            className={`${css_prefix}card-icon ${
              theme === "dark" ? css_prefix + "card-title-dark" : ""
            }`}
          >
            {icon}
          </div>
        </a>
      </div>
    );
  };

  let contactList = [
    {
      id: 1,
      title: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/aditya-sathish-rao/",
    },

    {
      id: 2,
      title: "GitHub",
      icon: <SiGithub />,
      link: "https://www.github.com/Ad1tyARa0/",
    },

    {
      id: 3,
      title: "Email",
      icon: <SiMinutemailer />,
      link: "mailto: aditya.s.rao1995@outlook.com",
    },
  ];

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>
          Follow me and hit me up for future projects. Or just to chat
        </div>

        <div className={`${css_prefix}inner-main`}>
          {contactList.map(e => renderContainer(e.title, e.icon, e.id, e.link))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
