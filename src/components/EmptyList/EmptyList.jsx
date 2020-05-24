import React from "react";

import styles from "./EmptyList.module.css";
import AddProjectCell from "../AddProjectCell/AddProjectCell";

const EmptyList = ({ displayed, type }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{displayed}</h2>
      <div className={styles.addProjectCell}>
        <AddProjectCell type={type} />
      </div>
    </div>
  );
};

export default EmptyList;
