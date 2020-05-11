import React, { useState } from "react";

import styles from "./NotFound.module.css";

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

const NotFound = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);

  const [pageName, setPageName] = useState("Not Found");
  const [userData, setUserData] = useState({
    name: "Michal",
    projects: [
      {
        projName: "test1",
        projDecs: "lorem",
        projID: 1,
        status: "Finished",
        IsLiked: false,
      },
      {
        projName: "test2",
        projDecs: "lorem",
        projID: 2,
        status: "In progress",
        IsLiked: true,
      },
      {
        projName: "test3",
        projDecs: "lorem",
        projID: 3,
        status: "Behind Schedule",
        IsLiked: false,
      },
      {
        projName: "test4",
        projDecs: "lorem",
        projID: 4,
        status: "Finished",
        IsLiked: false,
      },
      {
        projName: "test5",
        projDecs: "lorem",
        projID: 5,
        status: "Finished",
        IsLiked: true,
      },
      {
        projName: "test6",
        projDecs: "lorem",
        projID: 6,
        status: "Finished",
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
          <p>It seems that you got lost.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
