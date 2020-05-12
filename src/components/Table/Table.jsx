import React from "react";
import ProjectSearch from "../ProjectSearch/ProjectSearch";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./Table.module.css";
import EmptyList from "../EmptyList/EmptyList";

const Table = ({ projects }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <ProjectSearch />
      </div>
      <div className={styles.listWrapper}>
        {projects.length > 0 ? (
          <ProjectList projects={projects} />
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
};

export default Table;
