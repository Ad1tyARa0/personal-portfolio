import React, { FC, useState } from 'react';

// Components.
import { PageContainer } from '../../components/layout/container/PageContainer';

// Context.
import { ThemeContext } from '../../context/ThemeContext';

interface ContactMeInterface {}

// SCSS.
import './contact-me.scss';

const css_prefix = 'c-m__';

interface ContactMeInterface {}

const ContactMe: FC<ContactMeInterface> = () => {
  const { theme } = React.useContext(ThemeContext);

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChangeFullName = (payload: string) => {
    setFullName(payload);
  };

  const onChangeMessage = (payload: string) => {
    setMessage(payload);
  };

  const onChangeEmail = (payload: string) => {
    setEmail(payload);
  };

  const _renderFormComponent = (
    title: string,
    value: string,
    onChange: (payload: string) => void,
    formType: 'textarea' | 'input',
    type: string
  ) => {
    return (
      <div className={`${css_prefix}input-main`}>
        <div className={`${css_prefix}input-title`}>{title}</div>

        {formType === 'input' ? (
          <input
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            type={type}
            className={`${css_prefix}input-value  ${
              theme === 'dark'
                ? css_prefix + 'input-dark'
                : css_prefix + 'input-light'
            }`}
          />
        ) : formType === 'textarea' ? (
          <textarea
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            className={`${css_prefix}textarea-value  ${
              theme === 'dark'
                ? css_prefix + 'input-dark'
                : css_prefix + 'input-light'
            }`}
          />
        ) : null}
      </div>
    );
  };

  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}title`}>Contact Me</div>

        <div className={`${css_prefix}inner-main`}>
          <div className={`${css_prefix}container`}>
            {_renderFormComponent(
              'Full Name',
              fullName,
              onChangeFullName,
              'input',
              'text'
            )}

            {_renderFormComponent(
              'Email Address',
              email,
              onChangeEmail,
              'input',
              'email'
            )}

            {_renderFormComponent(
              'Message',
              message,
              onChangeMessage,
              'textarea',
              'text'
            )}

            <div className={`${css_prefix}submit-button`}>
              <div className={`${css_prefix}submit-text`}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactMe;
