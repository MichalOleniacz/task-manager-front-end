import React from "react";

import HeartIcon from "../../assets/icons/svg/heart.svg";
import HeartFullIcon from "../../assets/icons/svg/heartFull.svg";

import styles from "./PrioritySort.module.css";

const PrioritySort = ({ prioritySort, handlePrioritySort }) => {
  return (
    <div className={styles.wrapper} onClick={() => handlePrioritySort()}>
      <img
        src={prioritySort ? HeartFullIcon : HeartIcon}
        className={styles.icon}
        alt="AddIcon"
      />
    </div>
  );
};

export default PrioritySort;
