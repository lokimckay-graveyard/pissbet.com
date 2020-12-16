import Head from "next/head";
import Header from "../../header";
import Footer from "../../footer";
import styles from "./page.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <script
          src="https://kit.fontawesome.com/f4d12f48dc.js"
          crossOrigin="anonymous"
        />
        <title>Pissbet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
