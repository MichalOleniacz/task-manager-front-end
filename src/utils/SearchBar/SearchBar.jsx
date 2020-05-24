import React from "react";

import searchIcon from "../../assets/icons/svg/search.svg";

import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search through your work..."
        />
      </div>
      <div className={styles.imgWrapper}>
        <img src={searchIcon} alt="searchIcon" className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchBar;
