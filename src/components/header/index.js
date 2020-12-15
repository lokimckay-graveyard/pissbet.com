import Nav from "../nav";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="/pissbet.png" alt="Pissbet Logo" className={styles.logo} />
      </div>
      <Nav />
    </>
  );
};

export default Header;
