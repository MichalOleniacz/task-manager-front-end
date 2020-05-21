import React from "react";

import AddIcon from "../../assets/icons/svg/add.svg";

import styles from "./AddBtn.module.css";

const DeleteBtn = () => {
  return (
    <div className={styles.wrapper}>
      <img src={AddIcon} className={styles.icon} alt="AddIcon" />
    </div>
  );
};

export default DeleteBtn;
