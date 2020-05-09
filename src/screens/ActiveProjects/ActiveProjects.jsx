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

const ActiveProjects = () => {
  const [icons, setIcons] = useState([
    { id: 1, src: houseIcon },
    { id: 2, src: pieChartIcon },
    { id: 3, src: garbageIcon },
    { id: 4, src: settingsIcon },
    { id: 5, src: logoutIcon },
  ]);

  return (
    <div>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.tableWrapper}>
        <Table />
      </div>
    </div>
  );
};

export default ActiveProjects;
