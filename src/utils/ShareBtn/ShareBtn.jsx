import React from "react";

import ShareIcon from "../../assets/icons/svg/share.svg";

import styles from "./ShareBtn.module.css";

const ShareBtn = () => {
  return (
    <div className={styles.wrapper}>
      <img src={ShareIcon} className={styles.icon} />
    </div>
  );
};

export default ShareBtn;
