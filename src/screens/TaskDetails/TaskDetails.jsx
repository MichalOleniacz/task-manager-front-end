import React, { useState } from "react";
import { EditorState, convertFromRaw } from "draft-js";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import DetailsTable from "../../components/DetailsTable/DetailsTable";

// User Profile
import data from "../../fakaData/userData";
import getStatusIcon from "../../utilFunc/getStatusIcon";

import getParentProject from "../../utilFunc/getParentProject";
import getCurrentTaskObject from "../../utilFunc/getCurrentTaskObject";

import styles from "./TaskDetails.module.css";

const TaskDetails = (props) => {
  const [taskID, setTask] = useState(parseInt(props.match.params.id));
  const [currentTask, setCurrentTask] = useState(getCurrentTaskObject(taskID));

  const [userData, setUserData] = useState(data);

  const [currentProject, setCurrentProject] = useState(
    getParentProject(taskID)
  );
  const [pageName, setPageName] = useState(currentProject.title);
  const [displayedIfNull, setDisplayedIfNull] = useState(
    "Seems like this project has no tasks asigned to it, click on the button below to start a new task!"
  );
  const [tasks, setTasks] = useState(currentProject.tasks);
  const [currentStatus, setCurrentStatus] = useState(getStatusIcon("none"));
  const [prioritySort, setPrioritySort] = useState(true);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(currentProject.content))
  );

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
    <div className={styles.wrapper}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.headerWrapper}>
          <Header
            userImage={userData.image}
            userName={userData.name}
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
            currentProjectID={currentProject.id}
            currentTaskID={taskID}
            currentTask={currentTask}
            onSearch={(query) => handleSearch(query)}
            onSortByStatus={(status) => handleSortByStatus(status)}
            onSortByPrioritized={(val) => handlePrioritySort(val)}
            onPrioritySort={() => handlePrioritySort()}
            prioritySort={prioritySort}
            displayedIfNull={displayedIfNull}
            allProjects={userData.projects}
            editorState={editorState}
            handleEditorChange={handleEditorChange}
            screen="task"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
