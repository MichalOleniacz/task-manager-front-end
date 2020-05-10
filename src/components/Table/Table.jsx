import React from "react";
import ProjectSearch from "../ProjectSearch/ProjectSearch";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./Table.module.css";

const Table = ({ projects }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <ProjectSearch />
      </div>
      <div className={styles.listWrapper}>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Table;
