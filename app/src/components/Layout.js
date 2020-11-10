import React from 'react';
import Header from './Navbar';

const Layout = ({ children }) => {
  return (
    <main>
      <Header username="Vikram" />
      {children}
      <footer className="fixed-bottom p-4 bg-dark text-white">
        &copy; 2020 Comapany Inc .Privacy .Terms
      </footer>
    </main>
  );
};

export default Layout;
