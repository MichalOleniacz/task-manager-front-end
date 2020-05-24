import React from "react";
import styles from "./StyleButton.module.css";

const StyleButton = ({ active, label, onToggle, style }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  return (
    <span
      className={active ? styles.activeButton : styles.styleButton}
      onMouseDown={handleToggle}>
      {label}
    </span>
  );
};

export default StyleButton;
