import React from "react";
import CurrentPage from "../../utils/CurrentPage/CurrentPage";
import styles from "./Header.module.css";
import UserGreetings from "../../utils/UserGreetings/UserGreetings";

const Header = ({ userName, userImage, pageName }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nameWrapper}>
        <CurrentPage pageName={pageName} />
      </div>
      <div className={styles.greetWrapper}>
        <UserGreetings userName={userName} userImage={userImage} />
      </div>
    </div>
  );
};

export default Header;
