import Nav from "../nav";
import Button from "../button";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Button
          label="@sneyed"
          href="https://twitter.com/sneyed"
          icon={{ name: "fab fa-twitter", fontSize: "16px", size: "16px" }}
          styling="link"
          className={styles.social}
        />
        <Button
          label="@nairiell"
          href="https://twitter.com/nairiell"
          icon={{ name: "fab fa-twitter", fontSize: "16px", size: "16px" }}
          styling="link"
          className={styles.social}
        />
      </div>
    </>
  );
};

export default Footer;
