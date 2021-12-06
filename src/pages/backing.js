import useSWR from "swr";
import { fetcher } from "../api";
import { useEffect, useState } from "react";
import { refreshInterval } from "../config";
import Icon from "../components/icon";
import Input from "../components/input";
import Button from "../components/button";
import Layout from "../components/layouts/page";
import { getPlayerIdFromTag, getBacking } from "../lib/stats";
import styles from "../styles/pages/Backing.module.scss";

function Form({ index, data, setFetch }) {
  const [tag, setTag] = useState("");
  const [active, setActive] = useState(false);
  const tagValid = tag.length > 0 && tag !== "";
  const shouldFetch = tagValid && active;

  const { allPlayers, allBets, allMatches } = data || {};
  const playerId = getPlayerIdFromTag({ tag, allPlayers });
  const backing = getBacking({ playerId, allBets, allMatches });

  const isRegistered = typeof playerId !== "undefined";
  const hasBacking = typeof backing !== "undefined";

  useEffect(() => {
    setFetch(shouldFetch);
  }, [shouldFetch]);

  function onChange(event) {
    setActive(false);
    setTag(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setActive(true);
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input placeholder={`Player ${index} tag`} onChange={onChange} />
      <Button tabIndex={-1} label="Go" styling="small" type="submit" />
      {shouldFetch && (
        <div className={styles.backing}>
          {hasBacking ? (
            <div className={styles.coins}>
              <Icon name="coins" display="inline" colour="#FFCC00" />
              <span>{backing}</span>
            </div>
          ) : isRegistered ? (
            "Unexpected error"
          ) : (
            `"${tag}" is not registered as a player`
          )}
        </div>
      )}
    </form>
  );
}

export default function Backing() {
  const [fetchP1, setFetchP1] = useState(false);
  const [fetchP2, setFetchP2] = useState(false);
  const shouldFetch = fetchP1 || fetchP2;

  const { data, isValidating } =
    useSWR(shouldFetch ? `/api/backing` : null, fetcher, {
      refreshInterval,
    }) || {};

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>Backing</h2>
          <p className={styles.description}>
            Display the current amount of pisscoin staked on two players to win
            their next match
          </p>
          <p className={styles.loading}>{isValidating && "loading"}</p>
        </div>
        <div className={styles.forms}>
          <Form index={1} setFetch={setFetchP1} data={data} />
          <Form index={2} setFetch={setFetchP2} data={data} />
        </div>
        <h3>Registered players</h3>
        <ul className={styles.playerList}>
          {(data?.allPlayers || []).map((player, index) => (
            <li key={index}>{player.tag}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
