import React, { useState } from "react";

import BasicList from "../../utils/BasicList/BasicList";

import styles from "./ListByStatus.module.css";

const ListByStatus = ({ status, projects }) => {
  const [type, setType] = useState("sortedTasks");

  const getTitle = (status) => {
    if (status === "inProgress") return "In progress";
    if (status === "Finished") return "Finished";
    if (status === "behindSchedule") return "Behind schedule";
    if (status === "toDo") return "To do";
  };

  const getData = (projects, status, type) => {
    if (type === "projects") {
      let filtered = projects.filter((c) => c.status === status);
      console.log(filtered);
      return filtered;
    } else if (type === "sortedTasks") {
      let filtered = [];
      projects.forEach((project) => {
        project.tasks.forEach((task) => {
          if (task.status === status) filtered.push(task);
        });
      });
      return filtered;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>{getTitle(status)}</h3>
      <div className={styles.listWrapper}>
        <BasicList
          allProjects={projects}
          data={getData(projects, status, type)}
          type={type}
        />
      </div>
      <div className={styles.selection}>
        <h4
          className={type === "projects" ? styles.active : null}
          onClick={() => setType("projects")}>
          Projects
        </h4>
        <h4
          className={type === "sortedTasks" ? styles.active : null}
          onClick={() => setType("sortedTasks")}>
          Tasks
        </h4>
      </div>
    </div>
  );
};

export default ListByStatus;
