import React from 'react';
import { Link } from 'gatsby';
import { PageContainer } from '../components/layout/container/PageContainer';

const Index = () => {
  return (
    <PageContainer>
      <>
        <h1>My landing page</h1>
        <p>This is my landing page</p>
        <Link to='/about'>About Me</Link>
      </>
    </PageContainer>
  );
};

export default Index;
