import React, { useState } from "react";
import { Resend } from "resend";

// SCSS.
import "./Contact.scss";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

import { developmentIllustration, uiUxIllustration } from "../../assets/svg";
import { Heading } from "../common/heading/Heading";
import { useThemeContext } from "../../context/ThemeContext";
import { Button } from "../common/button/Button";

const css_prefix = "c-c__";

// Component props.
interface ContactProps {}

const ContactComponent: React.FunctionComponent<ContactProps> = () => {
  const { ref } = useSectionInView("Contact");

  const { theme } = useThemeContext();

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const resend = new Resend(process.env.GATSBY_API_KEY);

  const handleClick = async () => {
    try {
      const response = await resend.apiKeys.create({ name: "Development" });
      console.log(response);
      // const response = await resend.emails.send({
      //   from: email,
      //   to: "aditya.s.rao12@gmail.com",
      //   subject: "Portfolio message!",
      //   html: `<p>${message}</p>`,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${css_prefix}main`} ref={ref} id="Contact">
      <div className={`${css_prefix}title`}>
        <Heading text="Contact Me" />
      </div>

      <div
        className={`${css_prefix}form-container ${
          theme === "dark" ? css_prefix + "form-container-dark" : ""
        }`}
      >
        <input
          className={`${css_prefix}input ${
            theme === "dark" ? css_prefix + "dark-input" : ""
          }`}
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />

        <textarea
          className={`${css_prefix}input ${
            theme === "dark" ? css_prefix + "dark-input" : ""
          }`}
          placeholder="Your Message"
          style={{ minHeight: "200px" }}
          value={message}
          onChange={({ currentTarget }) => setMessage(currentTarget.value)}
        />

        <div className={`${css_prefix}button`}>
          <Button handleClick={handleClick} appearence="primary" title="Send" />
        </div>
      </div>
    </div>
  );
};

export const Contact = ContactComponent;
