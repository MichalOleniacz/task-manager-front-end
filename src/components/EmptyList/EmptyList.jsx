import React from "react";

import styles from "./EmptyList.module.css";
import AddProjectCell from "../AddProjectCell/AddProjectCell";

const EmptyList = ({ displayed, type }) => {
  return (
    <div className={styles.wrapper}>
      {/* <h4>{displayed}</h4> */}
      <div className={styles.cellWrapper}>
        <AddProjectCell type={type} />
      </div>
    </div>
  );
};

export default EmptyList;
