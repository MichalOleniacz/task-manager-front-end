import React from "react";

import styles from "./CurrentPage.module.css";
const CurrentPage = ({ pageName }) => {
  console.log(pageName);
  return (
    <div className={styles.nameWrapper}>
      <h1>{pageName}</h1>
    </div>
  );
};

export default CurrentPage;
