import React, { FC } from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

interface PageContainerProps {
  children: JSX.Element;
}

// Components -- layout -- container -- page - container
const css_prefix = 'c--l--c--p-c__';

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div>
      <Header title='Aditya S Rao' />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
