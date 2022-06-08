import * as React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

interface NodeChild {
  children: React.ReactNode;
}

const Layout = ({ children }: NodeChild) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
