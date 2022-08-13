import React, { FC } from 'react';

interface AboutInterface {}

const About: FC<AboutInterface> = () => {
  return (
    <div>
      <h1>My About Page</h1>
      <p>This is a sentence about me.</p>
    </div>
  );
};

export default About;
