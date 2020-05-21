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
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
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
      <div className={styles.infoWrapper}>
        <Counters projects={projects} />
      </div>
    </div>
  );
};

export default Sorting;
