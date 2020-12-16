import Icon from "../components/icon";
import Layout from "../components/layouts/page";
import styles from "../styles/pages/About.module.scss";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>What is this?</h2>
          <p className={styles.description}>
            Pissbet is a <i>fake currency</i> bet tracker for the{" "}
            <i>non-profit</i> SSBU tournament{" "}
            <a
              href="https://smash.gg/tournament/pissmas-2/details"
              className={styles.icon}
            >
              {" "}
              Pissmas 2{" "}
              <Icon
                name="fas fa-external-link-alt"
                display="inline"
                size="12px"
                fontSize="12px"
              />
            </a>
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>How can I participate?</h2>
          <p className={styles.description}>
            Registration for Pissmas 2 on smash.gg is now closed.
            <br />
            If you have already registered, you{" "}
            <strong>
              <i>must</i>
            </strong>{" "}
            join{" "}
            <a href="https://discord.com/invite/p2pdbNc5d4">
              the Pissbet discord{" "}
              <Icon
                name="fas fa-external-link-alt"
                display="inline"
                size="12px"
                fontSize="12px"
              />
            </a>{" "}
            to participate
          </p>
          <p>
            Once you have joined, you will be able to place bets through the
            Pissbet discord bot
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.title}>Bot commands</h2>
          <p>(Add bot commands here)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
