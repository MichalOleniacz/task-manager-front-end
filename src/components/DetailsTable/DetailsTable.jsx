import React from "react";

import styles from "./DetailsTable.module.css";
import Sorting from "../Sorting/Sorting";
import TasksList from "../TasksList/TasksList";
import TextEditor from "../TextEditor/TextEditor";

const DetailsTable = ({
  tasks,
  onSearch,
  onSortByStatus,
  currentStatus,
  onPrioritySort,
  prioritySort,
  displayedIfNull,
  allProjects,
  editorState,
  handleEditorChange,
}) => {
  const onSave = (change) => handleEditorChange(change);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div className={styles.editorWrapper}>
          <TextEditor
            mainState={editorState}
            onSave={(change) => onSave(change)}
          />
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.sortingWrapper}>
          <Sorting
            projects={tasks}
            handleSearch={(query) => onSearch(query)}
            currentStatus={currentStatus}
            handleSortByStatus={(status) => onSortByStatus(status)}
            handlePrioritySort={() => onPrioritySort()}
            prioritySort={prioritySort}
            showStats={false}
          />
        </div>
        <div className={styles.listWrapper}></div>
        <TasksList
          tasks={tasks}
          handleSearch={(query) => onSearch(query)}
          currentStatus={currentStatus}
          handleSortByStatus={(status) => onSortByStatus(status)}
          handlePrioritySort={() => onPrioritySort()}
          prioritySort={prioritySort}
          projects={allProjects}
        />
      </div>
    </div>
  );
};

export default DetailsTable;
