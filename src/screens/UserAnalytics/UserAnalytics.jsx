import React, { useState } from "react";

import styles from "./UserAnalytics.module.css";

// Icons
import addIcon from "../../assets/icons/svg/add.svg";
import garbageIcon from "../../assets/icons/svg/garbage.svg";
import heartIcon from "../../assets/icons/svg/heart.svg";
import houseIcon from "../../assets/icons/svg/house.svg";
import pieChartIcon from "../../assets/icons/svg/pie-chart.svg";
import searchIcon from "../../assets/icons/svg/search.svg";
import settingsIcon from "../../assets/icons/svg/settings.svg";
import shareIcon from "../../assets/icons/svg/share.svg";
import logoutIcon from "../../assets/icons/svg/logout.svg";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

// User Profile
import UserImage from "../../assets/images/avatar.png";
import StatsTable from "../../components/StatsTable/StatsTable";

const UserAnalytics = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);

  const [pageName, setPageName] = useState("User Analytics");
  const [userData, setUserData] = useState({
    name: "Michal",
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
        projName: "test1",
        projDecs: "lorem",
        projID: 1,
        status: "Finished",
        IsLiked: false,
        tasks: [
          {
            id: 1,
            name: "Vidly",
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
            id: 2,
            name: "Vidly2",
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
        projName: "test2",
        projDecs: "lorem",
        projID: 2,
        status: "In progress",
        IsLiked: true,
        tasks: [
          {
            id: 1,
            name: "Vidly",
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
            id: 2,
            name: "Vidly2",
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
        projName: "test3",
        projDecs: "lorem",
        projID: 3,
        status: "Behind Schedule",
        IsLiked: false,
        tasks: [
          {
            id: 1,
            name: "Vidly",
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
            id: 2,
            name: "Vidly2",
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
        projName: "test4",
        projDecs: "lorem",
        projID: 4,
        status: "Finished",
        IsLiked: false,
        tasks: [
          {
            id: 1,
            name: "Vidly",
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
            id: 2,
            name: "Vidly2",
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
        projName: "test5",
        projDecs: "lorem",
        projID: 5,
        status: "Finished",
        IsLiked: true,
        tasks: [
          {
            id: 1,
            name: "Vidly",
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
            id: 2,
            name: "Vidly2",
            status: "inProgress",
            steps: [],
          },
        ],
      },
      {
        projName: "test6",
        projDecs: "lorem",
        projID: 6,
        status: "Finished",
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
          <StatsTable userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;

const asdasd = {
  value: "<h1>onfoaias</h1>",
};
