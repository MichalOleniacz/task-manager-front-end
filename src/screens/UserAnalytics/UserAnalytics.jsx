import React, { useState } from "react";

import styles from "./UserAnalytics.module.css";

// Icons
import garbageIcon from "../../assets/icons/svg/garbage.svg";
import houseIcon from "../../assets/icons/svg/house.svg";
import pieChartIcon from "../../assets/icons/svg/pie-chart.svg";
import settingsIcon from "../../assets/icons/svg/settings.svg";
import logoutIcon from "../../assets/icons/svg/logout.svg";

// Components
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import StatsTable from "../../components/StatsTable/StatsTable";

// User Profile
import UserImage from "../../assets/images/avatar.png";
import data from "../../fakaData/userData";

const UserAnalytics = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);

  const [pageName, setPageName] = useState("User Analytics");
  const [userData, setUserData] = useState(data);

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
