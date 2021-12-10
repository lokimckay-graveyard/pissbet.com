import useSWR from "swr";
import { fetcher } from "../api";
import { refreshInterval } from "../config";
import Icon from "../components/icon";
import Layout from "../components/layouts/page";
import styles from "../styles/pages/Backing.module.scss";

function BackedPlayer({ tag, betTotal }) {
  return (
    <div className={styles.backing}>
      <span className={styles.tag}>{tag}:</span>
      <div className={styles.coins}>
        <Icon name="coins" display="inline" colour="#FFCC00" />
        <span>{betTotal}</span>
      </div>
    </div>
  );
}

export default function Backing() {

  const { data, isValidating } =
    useSWR(`/api/backing`, fetcher, {
      refreshInterval,
    }) || {};

  const { currentOpenMatch } = data || {}

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>Backing</h2>
          <p className={styles.description}>
            {currentOpenMatch
              ? `The current amount of Pisscoin™ staked on these two players to win their upcoming match!`
              : currentOpenMatch === null
                ? `There's no currently open match :(`
                : `Loading...`
            }
          </p>
          {!data && isValidating && <p className={styles.loading}>{isValidating && "loading"}</p>}
        </div>
        <div className={styles.forms}>
          {currentOpenMatch && (
            <>
              <BackedPlayer tag={currentOpenMatch.player1Tag} betTotal={currentOpenMatch.player1BetTotal} />
              <BackedPlayer tag={currentOpenMatch.player2Tag} betTotal={currentOpenMatch.player2BetTotal} />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
