import Row from "./row";
import Icon from "../icon";
import Dropdown from "../dropdown";
import styles from "./leaderboard.module.scss";
import DropdownItem from "../dropdown/item";

const spawnEmptyRows = (count) => {
  let emptyRows = [];
  for (let i = 0; i < count; i++) {
    emptyRows.push({});
  }
  return emptyRows;
};

const Leaderboard = ({ perPage = 30, setPerPage, data, error }) => {
  const { totalParticipants, participants } = data || {};
  const hasParticipants = totalParticipants && totalParticipants > 0;
  const emptyRows =
    totalParticipants < perPage
      ? spawnEmptyRows(perPage - totalParticipants)
      : [];

  return error ? (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  ) : hasParticipants ? (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>
          <Icon
            name="trophy"
            size="18px"
            fontSize="18px"
            className={styles.icon}
            display="inline"
          />{" "}
          Leaderboard
        </h2>
        <PerPageSelector perPage={perPage} setPerPage={setPerPage} />
      </div>

      <div className={styles.grid}>
        {[...participants, ...emptyRows]
          .slice(0, perPage)
          .map((participant, index) => (
            <Row key={index} position={index + 1} participant={participant} />
          ))}
      </div>
    </div>
  ) : null;
};

const PerPageSelector = ({ perPage, setPerPage }) => {
  const options = [10, 20, 30, 40, 50, 100];
  return (
    <Dropdown
      label={`${perPage} per page`}
      icon={{ name: "chevron-down", position: "right" }}
      style={{ float: "right" }}
      align="right"
    >
      {options.map((option, index) => (
        <DropdownItem
          key={index}
          onClick={() => {
            typeof setPerPage === "function" && setPerPage(option);
          }}
        >
          {option}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default Leaderboard;
