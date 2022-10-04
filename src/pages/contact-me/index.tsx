import React, { FC } from 'react';
import { PageContainer } from '../../components/layout/container/PageContainer';

interface ContactMeInterface {}

// SCSS.
import './contact-me.scss';

const css_prefix = 'c-m__';

interface ContactMeInterface {}

const ContactMe: FC<ContactMeInterface> = () => {
  return (
    <PageContainer>
      <div className={`${css_prefix}main`}>
        <div className={`${css_prefix}container`}>
          <div>Name</div>

          <div>EMail</div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactMe;
