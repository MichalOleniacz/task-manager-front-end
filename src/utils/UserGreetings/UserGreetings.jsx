import React from "react";

import styles from "./UserGreetings.module.css";

const UserGreetings = ({ userName, userImage }) => {
  return (
    <div className={styles.greetWrapper}>
      <h3>Hello, {userName}</h3>
      <div className={styles.imageWrapper}>
        <img src={userImage} alt="" />
      </div>
    </div>
  );
};

export default UserGreetings;
