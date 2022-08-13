import React from 'react';
import { navigate } from 'gatsby';

const triggerNavigation = () => {
  navigate('/about');
};

const SomePage = () => {
  return (
    <div>
      <button onClick={triggerNavigation}>about</button>
    </div>
  );
};

export default SomePage;
