import { pissbetDiscord } from "../../config";
import Nav from "../nav";
import Button from "../button";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div>
          <Button
            label="Pissbet Discord"
            href={pissbetDiscord}
            icon={{ name: ["fab", "discord"], fontSize: "16px", size: "16px" }}
            styling="link"
            className={styles.social}
          />
        </div>
        <div>
          <Button
            label="@sneyed"
            href="https://twitter.com/sneyed"
            icon={{
              name: ["fab", "twitter"],
              fontSize: "16px",
              size: "16px",
            }}
            styling="link"
            className={styles.social}
          />
          <Button
            label="@nairiell"
            href="https://twitter.com/nairiell"
            icon={{ name: ["fab", "twitter"], fontSize: "16px", size: "16px" }}
            styling="link"
            className={styles.social}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
