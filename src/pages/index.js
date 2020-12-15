import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pissbet</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/f4d12f48dc.js"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Leaderboard</h1>
      </main>
    </div>
  );
}
