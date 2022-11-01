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

  // const [firstName, setFirstName] = useState<string>('');
  // const [lastName, setLastName] = useState<string>('');
  // const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>('');

  // const onChangeFirstName = (payload: string) => {
  //   setFirstName(payload);
  // };

  // const onChangeLastName = (payload: string) => {
  //   setLastName(payload);
  // };

  // const onChangePhoneNumber = (payload: string) => {
  //   setPhoneNumber(payload);
  // };

  const onChangeEmail = (payload: string) => {
    setEmail(payload);
  };

  const _renderInputComponent = (
    title: string,
    value: string,
    onChange: (payload: string) => void
  ) => {
    return (
      <div className={`${css_prefix}input-main`}>
        <div className={`${css_prefix}input-title`}>{title}</div>

        <div className={`${css_prefix}input-value`}>
          <input
            placeholder='Name'
            value={value}
            onChange={({ currentTarget }) => onChange(currentTarget.value)}
            type='text'
          />
        </div>
      </div>
    );
  };

  return (
    <PageContainer>
      <div
        className={`${css_prefix}main ${
          theme === 'dark' ? css_prefix + 'main-dark' : ''
        }`}
      >
        <div className={`${css_prefix}container`}>
          <div className={`${css_prefix}container-heading`}>Contact Me</div>

          <div className={`${css_prefix}container-line-1`}>
            {_renderInputComponent('Name', email, onChangeEmail)}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactMe;
