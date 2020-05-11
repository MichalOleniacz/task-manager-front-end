import React, { useState } from "react";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

// Components
import Navbar from "../../components/Navbar/Navbar";

import Lost from "../../assets/background/lost.svg";

const NotFound = () => {
  const [pageName, setPageName] = useState("Not Found");

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={Lost} alt="lost" />
      </div>
      <div className={styles.textWrapper}>
        <h2>Seems like you've got lost.</h2>

        <Link to="/">
          <h2>Let's go home</h2>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
