// src/components/layout.js
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
