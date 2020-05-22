import React, { useState } from "react";

import styles from "./StatsPieChart.module.css";
import DonutChart from "../charts/DonutChart/DonutChart";

const StatsPieChart = ({ projects }) => {
  const [type, setType] = useState("projects");
  return (
    <div className={styles.wrapper}>
      <h3>Overview</h3>
      <div className={styles.chartWrapper}>
        <div className={styles.chartLimit}>
          <DonutChart data={projects} type={type} />
        </div>
      </div>
      <div className={styles.selection}>
        <h4
          className={type === "projects" ? styles.active : null}
          onClick={() => setType("projects")}>
          Projects
        </h4>
        <h4
          className={type === "tasks" ? styles.active : null}
          onClick={() => setType("tasks")}>
          Tasks
        </h4>
      </div>
    </div>
  );
};

export default StatsPieChart;
