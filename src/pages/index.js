import useSWR from "swr";
import { useState } from "react";
import { fetcher } from "../api";
import { getStats } from "../lib/stats";
import Layout from "../components/layouts/page";
import Leaderboard from "../components/leaderboard";
import Pirate from "../components/pirate";
import { refreshInterval } from "../config";
import styles from "../styles/pages/Home.module.scss";

const Home = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);

  const { data: sData, error: sError } = useSWR(`/api/stats`, fetcher, {
    refreshInterval,
  });

  const { data: pData, error: pError } = useSWR(
    `/api/participants?count=1000&offset=${page * perPage}`,
    fetcher,
    {
      refreshInterval,
    }
  );

  const { overallWinner, overallLoser, largestWin, largestLoss } =
    getStats({ ...pData, ...sData }) || {};

  return (
    <Layout>
      <div className={styles.container}>
        <Pirate
          data={{
            ...pData,
            ...sData,
            overallWinner,
            overallLoser,
            largestWin,
            largestLoss,
          }}
          error={pError || sError}
        />
        <Leaderboard
          data={pData}
          error={pError}
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
