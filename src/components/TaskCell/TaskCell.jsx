import React from "react";

import DeleteBtn from "../../utils/DeleteBtn/DeleteBtn";
import ShareBtn from "../../utils/ShareBtn/ShareBtn";
import PrioritizeBtn from "../../utils/PrioritizeBtn/PrioritizeBtn";

import getStatusIcon from "../../utilFunc/getStatusIcon";

import styles from "./TaskCell.module.css";

const TaskCell = ({ task }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleInnerWrapper}>
          <div className={styles.iconWrapper}>
            <img
              src={getStatusIcon(task.status)}
              alt="icon"
              className={styles.icon}
            />
          </div>
          <h3>{task.title}</h3>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.completion}>
          <p>{`${task.completion}% Completed`}</p>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.usersWrapper}>{}</div>
        <div className={styles.btnWrapper}>
          <DeleteBtn />
          <ShareBtn />
          <PrioritizeBtn priority={task.isPrioritized} />
        </div>
      </div>
    </div>
  );
};

export default TaskCell;
