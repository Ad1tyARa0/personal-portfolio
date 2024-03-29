import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';

// SCSS.
import "./Contact.scss";
import { useSectionInView } from "../../hooks/useIntersectionObserver";

import { developmentIllustration, uiUxIllustration } from "../../assets/svg";
import { Heading } from "../common/heading/Heading";
import { useThemeContext } from "../../context/ThemeContext";
import { Button } from "../common/button/Button";

const css_prefix = "c-c__";

const successToast = () => toast.success('Your Message Has Been Sent!', {
  icon: '👏',
  id: new Date().getTime().toString(),
});

const failedToast = () => toast.error('Unable to Send Your Message!', {
  icon: '❌',
  id: new Date().getTime().toString(),
});

// Component props.
interface ContactProps { }

const ContactComponent: React.FunctionComponent<ContactProps> = () => {
  const { ref } = useSectionInView("Contact");

  const { theme } = useThemeContext();
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [state, handleSubmit] = useForm("mnqenaqn");


  const onSubmit = async () => {
    try {
      await handleSubmit({
        email,
        message,
      });

      if (state.succeeded) {
        successToast();

        setEmail('');
        setMessage('');
      } else {
        failedToast();
      };
    } catch (error) {
      failedToast();
    }
  }

  return (
    <div className={`${css_prefix}main`} ref={ref} id="Contact">
      <div className={`${css_prefix}title`}>
        <Heading text="Contact Me" />
      </div>
      <div className={`${css_prefix}form-container ${theme === "dark" ? css_prefix + "form-container-dark" : ""
        }`}>
        <input
          className={`${css_prefix}input ${theme === "dark" ? css_prefix + "dark-input" : ""
            }`}
          id='email'
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />

        <textarea
          className={`${css_prefix}input ${theme === "dark" ? css_prefix + "dark-input" : ""
            }`}
          placeholder="Your Message"
          style={{ minHeight: "200px" }}
          id='message'
          name='message'
          value={message}
          onChange={({ currentTarget }) => setMessage(currentTarget.value)}
        />
        
        <Button
          handleClick={onSubmit}
          title="Submit"
          appearence="primary"
        />
      </div>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            color: '#fff',
            background: '#141414',
            opacity: 0.7,
            border: '1px solid #95f071',
          }
        }}
      />
    </div>
  );
};

export const Contact = ContactComponent;
