import React from "react";

import styles from "./DetailsTable.module.css";
import Sorting from "../Sorting/Sorting";
import TasksList from "../TasksList/TasksList";
import TextEditor from "../TextEditor/TextEditor";
import TaskInfo from "../TaskInfo/TaskInfo";

const DetailsTable = ({
  tasks,
  onSearch,
  onSortByStatus,
  currentStatus,
  onPrioritySort,
  prioritySort,
  displayedIfNull,
  currentProjectID,
  allProjects,
  editorState,
  handleEditorChange,
  screen,
  currentTask,
}) => {
  const onSave = (change) => handleEditorChange(change);

  console.log(screen);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <div
          className={
            screen === "project"
              ? styles.editorWrapper
              : styles.taskEditorWrapper
          }>
          <TextEditor
            screen={screen}
            mainState={editorState}
            onSave={(change) => onSave(change)}
          />
        </div>
        {screen === "task" && (
          <div className={styles.taskInfoWrapper}>
            <TaskInfo currentTask={currentTask} />
          </div>
        )}
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
        <div className={styles.listWrapper}>
          <TasksList
            currentProjectID={currentProjectID}
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
    </div>
  );
};

export default DetailsTable;
