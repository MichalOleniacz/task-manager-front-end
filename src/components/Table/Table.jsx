import React from "react";
import Sorting from "../Sorting/Sorting";
import ProjectList from "../ProjectList/ProjectList";
import styles from "./Table.module.css";
import EmptyList from "../EmptyList/EmptyList";

const Table = ({
  projects,
  onSearch,
  onSortByStatus,
  currentStatus,
  onPrioritySort,
  prioritySort,
  displayedIfNull,
  allProjects,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sortingWrapper}>
        <Sorting
          handleSearch={(query) => onSearch(query)}
          currentStatus={currentStatus}
          handleSortByStatus={(status) => onSortByStatus(status)}
          handlePrioritySort={() => onPrioritySort()}
          prioritySort={prioritySort}
          projects={allProjects}
        />
      </div>
      <div className={styles.listWrapper}>
        {projects.length > 0 ? (
          <ProjectList projects={projects} />
        ) : (
          <EmptyList displayed={displayedIfNull} />
        )}
      </div>
    </div>
  );
};

export default Table;
