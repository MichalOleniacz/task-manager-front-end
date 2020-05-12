import React, { useState } from "react";

import styles from "./ActiveProjects.module.css";

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
    id: 2134654,
    projects: [
      {
        title: "test1",
        description: "lorem",
        id: 1,
        status: 1,
        IsLiked: false,
        shared: [123, 123, 123],
      },
      {
        title: "test2",
        description: "lorem",
        id: 2,
        status: 1,
        IsLiked: false,
        shared: [123, 123, 123],
      },
      {
        title: "test3",
        description: "lorem",
        id: 3,
        status: 0,
        IsLiked: false,
        shared: [123, 123, 123, 123],
      },
      {
        title: "test4",
        description: "lorem",
        shared: [123, 123],
        id: 4,
        status: 0,
        IsLiked: false,
      },
      {
        title: "test5",
        description: "lorem",
        shared: [123],
        id: 5,
        status: 2,
        IsLiked: false,
      },
      {
        title: "test6",
        description: "lorem",
        id: 6,
        status: 2,
        shared: [],
        IsLiked: false,
      },
      {
        title: "test7",
        description: "lorem",
        id: 7,
        status: 0,
        shared: [],
        IsLiked: false,
      },
      {
        title: "test8",
        description: "lorem",
        id: 8,
        status: 0,
        shared: [],
        IsLiked: false,
      },
      {
        title: "test8",
        description: "lorem",
        id: 7,
        status: 0,
        shared: [],
        IsLiked: false,
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
