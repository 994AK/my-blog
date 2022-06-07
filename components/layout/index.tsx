import type { NextPage } from 'next';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const Layout: NextPage = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
