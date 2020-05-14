import React from "react";

import styles from "./RecentChanges.module.css";
import BasicList from "../BasicList/BasicList";

const RecentChanges = ({ projects, reminders }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Recent changes</h3>
      <div className={styles.listWrapper}>
        <BasicList data={projects} reminders={reminders} type="reminders" />
      </div>
    </div>
  );
};

export default RecentChanges;
