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

const NotFound = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ]);

  const [pageName, setPageName] = useState("Not Found");

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarWrapper}>
        <Navbar icons={icons} />
      </div>
      <div className={styles.innerWrapper}>
        <div className={styles.tableWrapper}>
          <div className={styles.imageWrapper}></div>
          <p>It seems that you got lost.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
