import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
