import React, { FC } from 'react';
import { PageContainer } from '../components/layout/container/PageContainer';

interface ContactMeInterface {}

const ContactMe: FC<ContactMeInterface> = () => {
  return (
    <PageContainer>
      <div>
        <h1>My Contact me Page</h1>
      </div>
    </PageContainer>
  );
};

export default ContactMe;
