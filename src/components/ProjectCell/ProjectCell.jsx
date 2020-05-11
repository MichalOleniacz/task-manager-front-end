import React from "react";

import DeleteBtn from "../../utils/DeleteBtn/DeleteBtn";
import ShareBtn from "../../utils/ShareBtn/ShareBtn";
import LikeBtn from "../../utils/LikeBtn/LikeBtn";

// Status Icons
import FinishedIcon from "../../assets/icons/svg/Finished.svg";
import InProgressIcon from "../../assets/icons/svg/InProgress.svg";
import BehindScheduleIcon from "../../assets/icons/svg/BehindSchedule.svg";

// User Image
import UserImage from "../../assets/images/avatar.png";

import styles from "./ProjectCell.module.css";

const ProjectCell = ({ project }) => {
  const getStatusIcon = (status) => {
    if (status === 0) {
      // In progress
      return InProgressIcon;
    }
    if (status === 1) {
      // Finished
      return FinishedIcon;
    }
    if (status === 2) {
      // Behind Schedule
      return BehindScheduleIcon;
    }
  };

  const getUserPictures = (project) => {
    console.log(project.shared);
    project.shared.map((el) => {
      return;
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.titleInnerWrapper}>
          <div className={styles.iconWrapper}>
            <img src={getStatusIcon(project.status)} />
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
