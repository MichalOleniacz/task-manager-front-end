import React from "react";

import getStatusIcon from "../../utilFunc/getStatusIcon";

import styles from "./StatusSort.module.css";

const StatusSort = ({ current, onSortByStatus }) => {
  let statusList = getStatusIcon();

  return (
    <div className={styles.wrapper}>
      <button className={styles.dropdownBtn}>
        {" "}
        <img src={current} className={styles.icon} alt="current" />
      </button>
      <div className={styles.dropdownContent}>
        {statusList.map((el) => {
          return (
            <div
              className={styles.optionWrapper}
              key={el.status}
              onClick={() => onSortByStatus(el.status)}>
              <img
                src={el.icon}
                className={styles.option}
                status={el.status}
                alt="AddIcon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusSort;
