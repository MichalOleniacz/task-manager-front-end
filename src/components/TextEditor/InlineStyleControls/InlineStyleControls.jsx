import React from "react";

import StyleButton from "../StyleButton/StyleButton";

import styles from "./InlineStyleControls.module.css";

const InlineStyleControls = ({ editorState, onToggle }) => {
  let currentStyle = editorState.getCurrentInlineStyle();

  const INLINE_STYLES = [
    {
      label: "Bold",
      style: "BOLD",
    },
    {
      label: "Italic",
      style: "ITALIC",
    },
    {
      label: "Underline",
      style: "UNDERLINE",
    },
    {
      label: "Monospace",
      style: "CODE",
    },
  ];

  return (
    <div className={styles.controls}>
      {INLINE_STYLES.map((type) => {
        return (
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={onToggle}
            style={type.style}
          />
        );
      })}
    </div>
  );
};

export default InlineStyleControls;
