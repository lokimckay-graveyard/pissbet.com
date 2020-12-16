import Icon from "../components/icon";
import Layout from "../components/layouts/page";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Leaderboard</h2>
        <img src="/pirate.gif" alt="Pirate dancing" className={styles.pirate} />
      </div>
    </Layout>
  );
};

export default Home;
