import React from "react";

import styles from "./Counters.module.css";

const Counters = ({ projects }) => {
  const getValue = (status) => {
    let output = projects.filter((c) => c.status === status);
    return output.length;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inProgress}>
        <h4 className={styles.statusName}>In Progress:</h4>
        <h3 className={styles.value}>{getValue("inProgress")}</h3>
      </div>
      <div className={styles.finished}>
        <h4 className={styles.statusName}>Finished:</h4>
        <h3 className={styles.value}>{getValue("Finished")}</h3>
      </div>
      <div className={styles.behindSchedule}>
        <h4 className={styles.statusName}>Behind Schedule:</h4>
        <h3 className={styles.value}>{getValue("behindSchedule")}</h3>
      </div>
      <div className={styles.toDo}>
        <h4 className={styles.statusName}>To do:</h4>
        <h3 className={styles.value}>{getValue("toDo")}</h3>
      </div>
    </div>
  );
};

export default Counters;
