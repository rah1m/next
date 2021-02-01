import Meta from "./Meta";
import Navbar from "./Navbar";

import styles from "../styles/Layout.module.scss";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
};

export default Layout;
