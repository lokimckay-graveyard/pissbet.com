import Button from "../button";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Button styling="nav" label="Dashboard" href="/" />
      <Button styling="nav" label="About" href="/about" />
    </div>
  );
};

export default Nav;
