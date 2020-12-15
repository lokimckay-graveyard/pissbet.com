import Button from "../button";
import styles from "./nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button label="Dashboard" styling="nav" />
      </div>
      <div>
        <Button label="About" styling="nav" />
      </div>
    </div>
  );
};

export default Nav;
