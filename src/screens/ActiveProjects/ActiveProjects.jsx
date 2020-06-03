import React, { useState } from "react";

import styles from "./ActiveProjects.module.css";

// Icons

// Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

// User Profile
import UserImage from "../../assets/images/avatar.png";
import data from "../../fakaData/userData";
import getStatusIcon from "../../utilFunc/getStatusIcon";

const ActiveProjects = () => {
  const [pageName, setPageName] = useState("Active Projects");
  const [userData, setUserData] = useState(data);
  const [displayedIfNull, setDisplayedIfNull] = useState("Hey!");
  const [projects, setProjects] = useState(data.projects);
  const [currentStatus, setCurrentStatus] = useState(getStatusIcon("none"));
  const [prioritySort, setPrioritySort] = useState(true);

  const handleSearch = (query) => {
    let newList = [];
    userData.projects.forEach((project) => {
      if (project.title.match(query)) newList.push(project);
    });
    if (newList.length === 0) {
      userData.projects.length === 0
        ? setDisplayedIfNull(`Seems like you don't have any projects...`)
        : setDisplayedIfNull(`"${query}" doesn't match any of the projects!`);
    }

    setProjects(newList);
    setCurrentStatus(getStatusIcon("none"));
  };

  const handleSortByStatus = (status) => {
    let statusIcon = getStatusIcon(status);
    if (status !== "none") {
      let copy = [...userData.projects];
      let sorted = copy.filter((c) => c.status === status);
      setProjects(sorted);
      setCurrentStatus(statusIcon);
      if (sorted.length === 0) {
        userData.projects.length === 0
          ? setDisplayedIfNull(`Seems like you don't have any projects...`)
          : setDisplayedIfNull(
              `You have no projects with the selected status!`
            );
      }
    } else if (status === "none") {
      setProjects(userData.projects);
      setCurrentStatus(statusIcon);
    }
  };

  const handlePrioritySort = () => {
    if (prioritySort === true) setPrioritySort(false);
    if (prioritySort === false) setPrioritySort(true);
    let projectsCopy = [...projects];
    let result = projectsCopy.sort((a, b) => a.id - b.id);
    setProjects(result);
    setCurrentStatus(getStatusIcon("none"));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.headerWrapper}>
          <Header
            userName={userData.name}
            userImage={userData.image}
            pageName={pageName}
          />
        </div>
        <div className={styles.tableWrapper}>
          <Table
            projects={
              prioritySort
                ? projects.sort((b, a) => a.isPrioritized - b.isPrioritized)
                : projects
            }
            currentStatus={currentStatus}
            onSearch={(query) => handleSearch(query)}
            onSortByStatus={(status) => handleSortByStatus(status)}
            onSortByPrioritized={(val) => handlePrioritySort(val)}
            onPrioritySort={() => handlePrioritySort()}
            prioritySort={prioritySort}
            displayedIfNull={displayedIfNull}
            allProjects={userData.projects}
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
