import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import garbageIcon from "../../assets/icons/svg/garbage.svg";

import houseIcon from "../../assets/icons/svg/house.svg";
import pieChartIcon from "../../assets/icons/svg/pie-chart.svg";

import settingsIcon from "../../assets/icons/svg/settings.svg";
import logoutIcon from "../../assets/icons/svg/logout.svg";

const Navbar = () => {
  const icons = [
    { id: 1, src: houseIcon, path: "/projects" },
    { id: 2, src: pieChartIcon, path: "/stats" },
    { id: 3, src: garbageIcon, path: "/deleted" },
    { id: 4, src: settingsIcon, path: "/settings" },
    { id: 5, src: logoutIcon },
  ];
  console.log(icons);
  const splitArray = (icons) => {
    let first = icons.filter((c) => c.id <= 2);
    let second = icons.filter((c) => c.id > 2);
    return { first, second };
  };

  const { first, second } = splitArray(icons);

  return (
    <div className={styles.wrapper}>
      <div className={styles.upperWrapper}>
        <div className={styles.logoWrapper}>
          <p>.</p>
        </div>
        {first.map((el) => {
          return (
            <div key={el.id} className={styles.iconWrapper}>
              <Link to={el.path}>
                <img src={el.src} className={styles.icon} alt={el.path}></img>{" "}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.bottomWrapper}>
        {second.map((el) => {
          return (
            <div key={el.id} className={styles.iconWrapper}>
              <Link to={`${el.path}`}>
                <img src={el.src} className={styles.icon} alt={el.path}></img>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
