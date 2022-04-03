import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative md:min-h-screen md:flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
