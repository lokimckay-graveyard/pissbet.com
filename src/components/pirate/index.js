import Icon from "../icon";
import styles from "./pirate.module.scss";

const Pirate = ({ data, error }) => {
  const {
    totalParticipants,
    overallWinner: oW,
    overallLoser: oL,
    largestWin: lW,
    largestLoss: lL,
  } = data || {};
  const hasParticipants = totalParticipants && totalParticipants > 0;
  const green = { color: "#64AE64" };
  const red = { color: "#EA4335" };
  return (
    <div className={styles.container}>
      <img src="/pirate.gif" alt="Pirate dancing" className={styles.pirate} />
      <div className={styles.speech}>
        Yarr... Merry Pissmas!{" "}
        <p style={{ marginTop: "4px" }}>
          <small>
            Here be scrawlings o'{" "}
            <b>
              <u>digital fortunes only</u>
            </b>{" "}
            <br />
            Don't forget about ye' cold hard coin
          </small>
        </p>
        <ul>
          <li>
            Thar be{" "}
            {hasParticipants ? (
              <span className={styles.count}>{totalParticipants}</span>
            ) : (
              "no"
            )}{" "}
            punters {hasParticipants ? "aboard in total" : "about"}
          </li>
          <li>
            {oW?.username || "Nobody"} 'as <span style={green}>gained</span> the
            most pisscoin overall:{" "}
            <span style={green}>+{oW?.amount || "0"}</span>{" "}
            <Icon name="coins" display="inline" colour="#FFCC00" />
          </li>
          <li>
            {oL?.username || "Nobody"} 'as <span style={red}>lost</span> the
            most pisscoin overall: <span style={red}>-{oL?.amount || "0"}</span>{" "}
            <Icon name="coins" display="inline" colour="#FFCC00" />
          </li>
          <li>
            {lW?.username || "Nobody"} 'as the biggest{" "}
            <span style={green}>haul</span> in one sittin':{" "}
            <span style={green}>+{lW?.amount || "0"}</span>{" "}
            <Icon name="coins" display="inline" colour="#FFCC00" />
          </li>
          <li>
            {lL?.username || "Nobody"} 'as the biggest{" "}
            <span style={red}>blunder</span> in one sittin':{" "}
            <span style={red}>-{lL?.amount || "0"}</span>{" "}
            <Icon name="coins" display="inline" colour="#FFCC00" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pirate;
