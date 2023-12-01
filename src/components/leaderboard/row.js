import Icon from "../icon";
import styles from "./row.module.scss";

const Row = ({ position, participant }) => {
  const { username, balance } = participant || {};
  const validParticipant = username && !!balance;
  return (
    <div
      className={styles.container}
      style={{
        filter: !validParticipant && "saturate(0)",
        opacity: !validParticipant && 0.5,
      }}
    >
      {validParticipant && (
        <>
          <span>
            {position}. <b>{username}</b>
          </span>
          <span>
            {balance} <Icon name="coins" display="inline" colour="#FFCC00" />
          </span>
        </>
      )}
    </div>
  );
};

export default Row;
