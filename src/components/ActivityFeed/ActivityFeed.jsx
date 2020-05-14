import React from "react";

import styles from "./ActivityFeed.module.css";
import ActivityChart from "../charts/ActivityChart/ActivityChart";

const ActivityFeed = ({ activity }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Activity Feed</h3>
      <div className={styles.chartWrapper}>
        <ActivityChart activity={activity} />
      </div>
    </div>
  );
};

export default ActivityFeed;
