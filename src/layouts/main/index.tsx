import React from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
