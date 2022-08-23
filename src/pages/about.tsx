import React, { FC } from 'react';
import { PageContainer } from '../components/layout/container/PageContainer';

interface AboutInterface {}

const About: FC<AboutInterface> = () => {
  return (
    <PageContainer>
      <div>
        <h1>My About Page</h1>
        <p>This is a sentence about me.</p>
      </div>
    </PageContainer>
  );
};

export default About;
