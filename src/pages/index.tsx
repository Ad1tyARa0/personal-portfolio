import React from 'react';
import { Link } from 'gatsby';
import { PageContainer } from '../components/layout/container/PageContainer';
import ThemeProvider, { ThemeContext } from '../context/ThemeContext';

const Index = () => {
  return (
    <PageContainer>
      <div>
        <div>My landing page</div>

        <p>This is my landing page</p>

        {/* <button onClick={() => setDarkMode(true)}>Toggle Theme</button> */}

        <Link to='/about'>About Me</Link>
      </div>
    </PageContainer>
  );
};

export default Index;
