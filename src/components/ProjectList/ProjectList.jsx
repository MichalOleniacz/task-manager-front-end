import React from "react";

import ProjectCell from "../ProjectCell/ProjectCell";

import styles from "./ProjectList.module.css";
import AddProjectCell from "../AddProjectCell/AddProjectCell";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className={styles.wrapper}>
      {projects.map((el) => {
        return (
          <div className={styles.cellWrapper} key={el.id}>
            <ProjectCell project={el} />
          </div>
        );
      })}
      <div className={styles.cellWrapper}>
        <AddProjectCell />
      </div>
    </div>
  );
};

export default ProjectList;
