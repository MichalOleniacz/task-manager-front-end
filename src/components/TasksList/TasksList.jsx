import React from "react";
import { Link } from "react-router-dom";
import TaskCell from "../TaskCell/TaskCell";
import AddProjectCell from "../AddProjectCell/AddProjectCell";

import styles from "./TasksList.module.css";

const TasksList = ({ tasks, onChangeData }) => {
  return (
    <div className={styles.wrapper}>
      {tasks.map((el) => {
        return (
          <div className={styles.cellWrapper} key={el.id}>
            <TaskCell task={el} onClick={() => onChangeData(el)} />
          </div>
        );
      })}
      <div className={styles.cellWrapper}>
        <AddProjectCell type="task" />
      </div>
    </div>
  );
};

export default TasksList;
