import React, { useState } from "react";

import styles from "./ActiveProjects.module.css";

// Icons

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
import UserImage from "../../assets/images/avatar.png";

const ActiveProjects = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);

  const [pageName, setPageName] = useState("Active Projects");
  const [userData, setUserData] = useState({
    name: "Michal",
    reminders: [
      { id: 1, title: "Upload Vidly to GitHub" },
      { id: 2, title: "Meeting w/ Martin @14:30" },
      { id: 3, title: "Change setState func in Vidly" },
    ],
    activity: [
      { date: new Date(2020, 1, 5), changes: 5 },
      { date: new Date(2020, 2, 5), changes: 6 },
      { date: new Date(2020, 3, 5), changes: 3 },
      { date: new Date(2020, 4, 5), changes: 0 },
      { date: new Date(2020, 5, 5), changes: 1 },
      { date: new Date(2020, 6, 5), changes: 0 },
      { date: new Date(2020, 7, 5), changes: 3 },
      { date: new Date(2020, 8, 5), changes: 4 },
      { date: new Date(2020, 9, 5), changes: 2 },
      { date: new Date(2020, 10, 5), changes: 0 },
      { date: new Date(2020, 11, 5), changes: 4 },
      { date: new Date(2020, 12, 5), changes: 5 },
      { date: new Date(2020, 13, 5), changes: 2 },
      { date: new Date(2020, 14, 5), changes: 1 },
    ],
    projects: [
      {
        title: "test1",
        description: "lorem",
        id: 1,
        daysSinceUpdate: 3,
        status: "Finished",
        IsLiked: false,
        shared: [123, 123, 123],
        tasks: [
          {
            id: 1,
            idParent: 1,
            title: "Vidly",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
          {
            id: 2,
            idParent: 1,
            title: "Vidly2",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
        ],
      },
      {
        title: "test2",
        description: "lorem",
        id: 2,
        status: "Finished",
        daysSinceUpdate: 3,
        IsLiked: false,
        shared: [123, 123, 123],
        tasks: [
          {
            id: 3,
            idParent: 2,
            title: "Vidly",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
          {
            id: 4,
            idParent: 2,
            title: "Vidly2",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
        ],
      },
      {
        title: "test3",
        description: "lorem",
        daysSinceUpdate: 3,
        id: 3,
        status: "inProgress",
        IsLiked: false,
        shared: [123, 123, 123, 123],
        tasks: [
          {
            id: 5,
            idParent: 3,
            title: "Vidly",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
        ],
      },
      {
        title: "test4",
        description: "lorem",
        daysSinceUpdate: 2,
        shared: [123, 123],
        id: 4,
        status: "Finished",
        IsLiked: false,
        tasks: [
          {
            id: 6,
            idParent: 4,
            title: "Vidly",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
          {
            id: 7,
            idParent: 4,
            title: "Vidly2",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
            ],
          },
        ],
      },
      {
        title: "test5",
        description: "lorem",
        daysSinceUpdate: 6,
        shared: [123],
        id: 5,
        status: "behindSchedule",
        IsLiked: false,
        tasks: [],
      },
      {
        title: "test6",
        description: "lorem",
        id: 6,
        status: "behindSchedule",
        shared: [],
        IsLiked: false,
        tasks: [],
      },
      {
        title: "test7",
        description: "lorem",
        daysSinceUpdate: 1,
        id: 7,
        status: "Finished",
        shared: [],
        IsLiked: false,
        tasks: [],
      },
      {
        title: "test8",
        description: "lorem",
        id: 8,
        status: "Finished",
        shared: [],
        IsLiked: false,
        daysSinceUpdate: 2,
        tasks: [
          {
            id: 8,
            idParent: 8,
            title: "Vidly",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
          {
            id: 9,
            idParent: 8,
            title: "Vidly2",
            status: "inProgress",
            steps: [
              {
                id: 1,
                name: "Upload to GitHub",
                status: "Finished",
              },
              {
                id: 2,
                name: "Add deleted projects screen",
                status: "inProgress",
              },
              {
                id: 3,
                name: "Set up Heroku",
                status: "Finished",
              },
            ],
          },
        ],
      },
      {
        title: "test9",
        description: "lorem",
        daysSinceUpdate: 3,
        id: 9,
        status: "Finished",
        shared: [],
        IsLiked: false,
        tasks: [],
      },
    ],
    image: UserImage,
  });
  return (
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
          <Table projects={userData.projects} />
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
