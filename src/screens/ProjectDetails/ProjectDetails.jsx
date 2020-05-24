import React, { useState } from "react";
import { EditorState, convertFromRaw } from "draft-js";

import garbageIcon from "../../assets/icons/svg/garbage.svg";

import houseIcon from "../../assets/icons/svg/house.svg";
import pieChartIcon from "../../assets/icons/svg/pie-chart.svg";

import settingsIcon from "../../assets/icons/svg/settings.svg";
import logoutIcon from "../../assets/icons/svg/logout.svg";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

// User Profile
import data from "../../fakaData/userData";
import getStatusIcon from "../../utilFunc/getStatusIcon";

import styles from "./ProjectDetails.module.css";
import DetailsTable from "../../components/DetailsTable/DetailsTable";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState(match.params.id);

  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);
  const [userData, setUserData] = useState(data);

  const [currentProject, setCurrentProject] = useState(() =>
    userData.projects.find((c) => c.id === parseInt(project))
  );

  const [pageName, setPageName] = useState(currentProject.title);
  const [displayedIfNull, setDisplayedIfNull] = useState("Hey!");
  const [tasks, setTasks] = useState(currentProject.tasks);
  const [currentStatus, setCurrentStatus] = useState(getStatusIcon("none"));
  const [prioritySort, setPrioritySort] = useState(true);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(currentProject.content))
  );

  console.log(editorState);

  const handleSearch = (query) => {
    let newList = [];
    // userData.projects.forEach((project) => {
    //   if (project.title.match(query)) newList.push(project);
    // });
    currentProject.tasks.forEach((task) => {
      if (task.title.match(query)) newList.push(task);
    });
    if (newList.length === 0) {
      currentProject.tasks.length === 0
        ? setDisplayedIfNull(`Seems like you don't have any tasks...`)
        : setDisplayedIfNull(`"${query}" doesn't match any of the tasks!`);
    }

    setTasks(newList);
    setCurrentStatus(getStatusIcon("none"));
  };

  const handleSortByStatus = (status) => {
    let statusIcon = getStatusIcon(status);
    if (status !== "none") {
      let copy = [...currentProject.tasks];
      let sorted = copy.filter((c) => c.status === status);
      setTasks(sorted);
      setCurrentStatus(statusIcon);
      if (sorted.length === 0) {
        currentProject.tasks.length === 0
          ? setDisplayedIfNull(`Seems like you don't have any projects...`)
          : setDisplayedIfNull(`You have no project with the selected status`);
      }
    } else if (status === "none") {
      setTasks(currentProject.tasks);
      setCurrentStatus(statusIcon);
    }
  };

  const handlePrioritySort = () => {
    if (prioritySort === true) setPrioritySort(false);
    if (prioritySort === false) setPrioritySort(true);
    let projectsCopy = [...tasks];
    let result = projectsCopy.sort((a, b) => a.id - b.id);
    setTasks(result);
    setCurrentStatus(getStatusIcon("none"));
  };

  const handleEditorChange = (change) => {
    setEditorState(change);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.navbarWrapper}>
          <Navbar icons={icons} />
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
            <DetailsTable
              tasks={
                prioritySort
                  ? tasks.sort((b, a) => a.isPrioritized - b.isPrioritized)
                  : tasks
              }
              currentStatus={currentStatus}
              currentProject={currentProject}
              onSearch={(query) => handleSearch(query)}
              onSortByStatus={(status) => handleSortByStatus(status)}
              onSortByPrioritized={(val) => handlePrioritySort(val)}
              onPrioritySort={() => handlePrioritySort()}
              prioritySort={prioritySort}
              displayedIfNull={displayedIfNull}
              allProjects={userData.projects}
              editorState={editorState}
              handleEditorChange={handleEditorChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
