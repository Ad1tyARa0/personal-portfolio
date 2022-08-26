import React, { FC, Fragment } from 'react';

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

import './PageContainer.scss';

interface PageContainerProps {
  children: JSX.Element;
}

// Components -- layout -- container -- page - container
const css_prefix = 'c--l--c--p-c__';

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className={`${css_prefix}container`}>
      <Header title='ADITYA S RAO' />

      <main className={`${css_prefix}main`}>{children}</main>

      <Footer />
    </div>
  );
};
