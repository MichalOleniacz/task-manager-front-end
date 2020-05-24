import React from "react";

import SearchBar from "../../utils/SearchBar/SearchBar";
import AddBtn from "../../utils/AddBtn/AddBtn";
import Counters from "../Counters/Counters";

import styles from "./Sorting.module.css";
import StatusSort from "../../utils/StatusSort/StatusSort";
import PrioritySort from "../../utils/PrioritySort/PrioritySort";

const Sorting = ({
  handleSearch,
  handleSortByStatus,
  handlePrioritySort,
  currentStatus,
  prioritySort,
  projects,
  showStats,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={showStats ? styles.innerWrapper : styles.fullWrapper}>
        <SearchBar onSearch={(query) => handleSearch(query)} />
        <AddBtn />
        <PrioritySort
          prioritySort={prioritySort}
          handlePrioritySort={() => handlePrioritySort()}
        />
        <StatusSort
          current={currentStatus}
          onSortByStatus={(status) => handleSortByStatus(status)}
        />
      </div>

      {showStats ? (
        <div className={styles.infoWrapper}>
          <Counters projects={projects} />
        </div>
      ) : null}
    </div>
  );
};

export default Sorting;
