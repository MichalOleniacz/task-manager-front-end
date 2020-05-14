import React from "react";

import DeleteBtn from "../../utils/DeleteBtn/DeleteBtn";
import ShareBtn from "../../utils/ShareBtn/ShareBtn";
import LikeBtn from "../../utils/LikeBtn/LikeBtn";

import getStatusIcon from "../../utilFunc/getStatusIcon";

import styles from "./ProjectCell.module.css";

const ProjectCell = ({ project }) => {
  // const getUserPictures = (project) => {
  //   console.log(project.shared);
  //   project.shared.map((el) => {
  //     return;
  //   });
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleInnerWrapper}>
          <div className={styles.iconWrapper}>
            <img src={getStatusIcon(project.status)} alt="icon" />
          </div>
          <h3>{project.title}</h3>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.description}>
          <p>{project.description}</p>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.usersWrapper}>{}</div>
        <div className={styles.btnWrapper}>
          <DeleteBtn />
          <ShareBtn />
          <LikeBtn />
        </div>
      </div>
    </div>
  );
};

export default ProjectCell;
