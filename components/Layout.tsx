import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      <div className="flex-grow pt-0">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;