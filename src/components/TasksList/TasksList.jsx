import React from "react";
import { Link } from "react-router-dom";
import TaskCell from "../TaskCell/TaskCell";
import AddProjectCell from "../AddProjectCell/AddProjectCell";

import styles from "./TasksList.module.css";

const TasksList = ({ tasks, onChangeData, currentProjectID }) => {
  console.log(currentProjectID);
  return (
    <div className={styles.wrapper}>
      {tasks.map((el) => {
        return (
          <Link
            to={{
              pathname: `/projects/${currentProjectID}/${el.id}`,
              state: {
                currentProjectID: currentProjectID,
              },
            }}
            key={el.id}>
            <div className={styles.cellWrapper} key={el.id}>
              <TaskCell task={el} />
            </div>
          </Link>
        );
      })}
      <div className={styles.cellWrapper}>
        <AddProjectCell type="task" />
      </div>
    </div>
  );
};

export default TasksList;
