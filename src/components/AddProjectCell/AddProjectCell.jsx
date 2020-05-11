import React from "react";

import PlusIcon from "../../assets/icons/svg/plus.svg";

import styles from "./AddProjectCell.module.css";

const AddProjectCell = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img src={PlusIcon} />
      </div>
      <h3>Start a new project!</h3>
    </div>
  );
};

export default AddProjectCell;
