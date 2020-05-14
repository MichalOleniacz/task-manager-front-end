import React from "react";

import HeartIcon from "../../assets/icons/svg/heart.svg";

import styles from "./LikeBtn.module.css";

const LikeBtn = () => {
  return (
    <div className={styles.wrapper}>
      <img src={HeartIcon} className={styles.icon} alt="LikeIcon" />
    </div>
  );
};

export default LikeBtn;
