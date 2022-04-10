import React, { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from "./Filter.module.scss";

const Filter = () => {
  const [state, setState] = useState("");
  const initial = useRef(true);
  const { setSearchTerm } = useContext(GlobalContext)!;

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 700);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__input}>
        <input
          value={state}
          type="text"
          placeholder="Search by name, at least 3 characters"
          onChange={(event) => setState(event.currentTarget.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
