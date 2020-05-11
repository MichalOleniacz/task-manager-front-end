import React from "react";

import GarbageIcon from "../../assets/icons/svg/garbage.svg";

import styles from "./DeleteBtn.module.css";

const DeleteBtn = () => {
  return (
    <div className={styles.wrapper}>
      <img src={GarbageIcon} className={styles.icon} />
    </div>
  );
};

export default DeleteBtn;
