import React, { useCallback, useRef, useState } from "react";
import useOnClickOutside from "../../lib/hooks/useOnClickOutside";
import { cssJoin } from "../../lib/array";
import Button from "../button";
import DropdownItem from "./item";
import styles from "./styles.module.scss";

const Dropdown = ({
  label = "Dropdown",
  button,
  children,
  icon,
  align,
  items,
  width = 200,
}) => {
  if (items && children)
    console.warn({
      component: "Dropdown",
      message: 'Children will be ignored because "items" parameter is supplied',
    });

  const ref = useRef();
  useOnClickOutside(
    ref,
    useCallback(() => setExpanded(false), [])
  );

  const [expanded, setExpanded] = useState(false);
  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div ref={ref} aria-expanded={expanded} className={styles.container}>
      {button ? (
        <button className={styles.button} onClick={onClick}>
          {button}
        </button>
      ) : (
        <Button label={label} onClick={onClick} styling="small" icon={icon} />
      )}

      {expanded && (
        <div
          className={cssJoin([styles.items, align && styles[`align-${align}`]])}
          style={{ width }}
          onClick={onClick}
        >
          {items
            ? items.map((itemProps, index) => (
                <DropdownItem key={index} {...itemProps} />
              ))
            : children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
