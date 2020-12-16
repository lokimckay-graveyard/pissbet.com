import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.homeLink}>
          <img src="/pissbet.png" alt="Pissbet Logo" className={styles.logo} />
        </a>
      </Link>
    </div>
  );
};

export default Header;
