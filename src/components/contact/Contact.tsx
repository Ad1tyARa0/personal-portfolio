import React from "react";

// SCSS.
import "./Contact.scss";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

import { developmentIllustration, uiUxIllustration } from "../../assets/svg";
import { Heading } from "../common/heading/Heading";
import { useThemeContext } from "../../context/ThemeContext";

const css_prefix = "c--se__";

// Component props.
interface ContactProps {}

const ContactComponent: React.FunctionComponent<ContactProps> = () => {
  const { ref } = useSectionInView("Contact");

  const { theme } = useThemeContext();

  const illustrations = [
    {
      id: 1,
      img: developmentIllustration,
      label: "Web & Mobile Development",
    },

    {
      id: 2,
      img: uiUxIllustration,
      label: "UX UI",
    },
  ];

  return (
    <div className={`${css_prefix}main`} ref={ref} id="Contact">
      <Heading text="My Services" />

      {illustrations.map(e => {
        return (
          <div className={`${css_prefix}container`}>
            <div className={`${css_prefix}service-label`}>
              <Heading variant="subheading2" text={e.label} />
            </div>

            <div
              key={e.id}
              className={`${css_prefix}service-item-main ${
                theme === "dark" ? css_prefix + "service-item-main-dark" : ""
              }`}
            >
              <img
                className={`${css_prefix}service-image`}
                src={e.img}
                alt={e.label}
              />
            </div>
          </div>
        );
      })}

      {/* <img
        src={webDevelopmentIllustration}
        className={`${css_prefix}service-image`}
      /> */}
    </div>
  );
};

export const Contact = ContactComponent;
