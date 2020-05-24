import React from "react";

import PlusIcon from "../../assets/icons/svg/plus.svg";

import styles from "./AddProjectCell.module.css";

const AddProjectCell = ({ type }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img src={PlusIcon} alt="PlusIcon" />
      </div>
      <h3>Start a new {type}!</h3>
    </div>
  );
};

export default AddProjectCell;
