import useSWR from "swr";
import { useState } from "react";
import { fetcher } from "../api";
import Layout from "../components/layouts/page";
import Leaderboard from "../components/leaderboard";
import Pirate from "../components/pirate";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);

  const { data, error } = useSWR(
    `/api/participants?count=${perPage}&offset=${page * perPage}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  return (
    <Layout>
      <div className={styles.container}>
        <Pirate data={data} error={error} />
        <Leaderboard
          data={data}
          error={error}
          page={page}
          setPage={setPage}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      </div>
    </Layout>
  );
};

export default Home;
