import React, { useState } from "react";

import BasicList from "../../utils/BasicList/BasicList";

import styles from "./Priorities.module.css";
const Priorities = ({ projects }) => {
  const [type, setType] = useState("priorityProjects");

  return (
    <div className={styles.wrapper}>
      <h3>Your Priorities</h3>
      <div className={styles.listWrapper}>
        <BasicList data={projects} type={type} allProjects={projects} />
      </div>
      <div className={styles.selection}>
        <h4
          className={type === "priorityProjects" ? styles.active : null}
          onClick={() => setType("priorityProjects")}>
          Projects
        </h4>
        <h4
          className={type === "priorityTasks" ? styles.active : null}
          onClick={() => setType("priorityTasks")}>
          Tasks
        </h4>
      </div>
    </div>
  );
};

export default Priorities;
