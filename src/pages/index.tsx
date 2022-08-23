import React from 'react';
import { Link } from 'gatsby';
import { PageContainer } from '../components/layout/container/PageContainer';
import { ThemeContext, ThemeContextInterface } from '../context/ThemeContext';

const Index = () => {
  return (
    <PageContainer>
      <>
        <h1>My landing page</h1>
        <p>This is my landing page</p>S<Link to='/about'>About Me</Link>
      </>
    </PageContainer>
  );
};

export default Index;
