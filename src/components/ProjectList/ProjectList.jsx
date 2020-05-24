import React from "react";

import ProjectCell from "../ProjectCell/ProjectCell";

import styles from "./ProjectList.module.css";
import AddProjectCell from "../AddProjectCell/AddProjectCell";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className={styles.wrapper}>
      {projects.map((el) => {
        return (
          <div className={styles.cellWrapper} key={el.id}>
            <Link to={`/projects/${el.id}`}>
              <ProjectCell project={el} />
            </Link>
          </div>
        );
      })}
      <div className={styles.cellWrapper}>
        <AddProjectCell type="project" />
      </div>
    </div>
  );
};

export default ProjectList;
