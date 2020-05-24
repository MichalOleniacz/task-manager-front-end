import React from "react";
import StyleButton from "../StyleButton/StyleButton";
import styles from "./BlockStyleControls.module.css";

const BlockStyleControls = ({ editorState, onToggle }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const BLOCK_TYPES = [
    {
      label: "H1",
      style: "header-one",
    },
    {
      label: "H2",
      style: "header-two",
    },
    {
      label: "H3",
      style: "header-three",
    },
    {
      label: "H4",
      style: "header-four",
    },
    {
      label: "H5",
      style: "header-five",
    },
    {
      label: "H6",
      style: "header-six",
    },
    {
      label: "Blockquote",
      style: "blockquote",
    },
    {
      label: "UL",
      style: "unordered-list-item",
    },
    {
      label: "OL",
      style: "ordered-list-item",
    },
    {
      label: "Code Block",
      style: "code-block",
    },
  ];

  return (
    <div className={styles.controls}>
      {BLOCK_TYPES.map((type) => {
        return (
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={onToggle}
            style={type.style}
          />
        );
      })}
    </div>
  );
};

export default BlockStyleControls;
