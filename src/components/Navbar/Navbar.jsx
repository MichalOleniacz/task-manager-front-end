import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ icons }) => {
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
                <img src={el.src} className={styles.icon}></img>{" "}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.bottomWrapper}>
        {second.map((el) => {
          return (
            <div key={el.id} className={styles.iconWrapper}>
              <Link to={el.path}>
                <img src={el.src} className={styles.icon}></img>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
