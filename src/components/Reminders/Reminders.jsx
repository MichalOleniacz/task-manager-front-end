import React from "react";

import styles from "./Reminders.module.css";
import BasicList from "../../utils/BasicList/BasicList";

const Reminders = ({ reminders }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Your reminders</h3>
      <div className={styles.listWrapper}>
        <BasicList reminders={reminders} type="reminders" />
      </div>
    </div>
  );
};

export default Reminders;
