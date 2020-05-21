import React from "react";

import HeartIcon from "../../assets/icons/svg/heart.svg";
import HeartFullIcon from "../../assets/icons/svg/heartFull.svg";

import styles from "./PrioritizeBtn.module.css";

const PrioritizeBtn = ({ priority }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={priority ? HeartFullIcon : HeartIcon}
        className={styles.icon}
        alt="LikeIcon"
      />
    </div>
  );
};

export default PrioritizeBtn;
