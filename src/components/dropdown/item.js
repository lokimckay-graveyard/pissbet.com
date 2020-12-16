import React from "react";
import { cssJoin } from "../../lib/array";
import styles from "./styles.module.scss";

const DropdownItem = ({ label, url, onClick, children }) => {
  if (label && children)
    console.warn({
      component: "DropdownItem",
      message: 'Children will be ignored because "label" parameter is supplied',
    });

  return url ? (
    <a
      href={url}
      className={cssJoin([styles.item, styles.itemLink])}
      role="menuitem"
      onClick={onClick}
    >
      {label || children || "Item"}
    </a>
  ) : (
    <div className={styles.item} role="menuitem" onClick={onClick}>
      {label || children || "Item"}
    </div>
  );
};

export default DropdownItem;
