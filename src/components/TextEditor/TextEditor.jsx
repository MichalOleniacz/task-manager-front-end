import React, { useState, useRef, useEffect } from "react";

import { Editor, EditorState, RichUtils } from "draft-js";

import InlineStyleControls from "./InlineStyleControls/InlineStyleControls";
import BlockStyleControls from "./BlockStyleControls/BlockStyleControls";

import styles from "./TextEditor.module.css";

const TextEditor = ({ mainState, onSave }) => {
  const [privateEditorState, setPrivateEditorState] = useState(mainState);
  const [editorState, setEditorState] = useState(privateEditorState);
  const [readOnly, setReadOnly] = useState(true);
  // console.log(editorState);

  let editorRef = useRef();
  const focus = () => editorRef.current.focus();
  const onChange = (newState) => setEditorState(newState);
  const handleKeyCommand = (command) => _handleKeyCommand(command);
  const onTab = (e) => handleOnTab(e);
  const onToggleBlockType = (type) => handleToggleBlockType(type);
  const onToggleInlineStyle = (style) => handleToggleInlineStyle(style);

  const _handleKeyCommand = (command) => {
    let newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const handleOnTab = (e) => {
    const maxDepth = 4;
    onChange(RichUtils.onTab(e, editorState, maxDepth));
  };

  const handleToggleBlockType = (blockType) =>
    onChange(RichUtils.toggleBlockType(editorState, blockType));

  const handleToggleInlineStyle = (inlineStyle) =>
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

  const handleSave = (current, editorState) => {
    handleReadOnly(current);
    if (privateEditorState !== editorState) {
      setPrivateEditorState(editorState);
    }
    onSave(editorState);
  };

  const handleReadOnly = (current) => {
    readOnly ? setReadOnly(false) : setReadOnly(true);
  };

  const handleCancel = (current) => {
    handleReadOnly(current);
    setEditorState(privateEditorState);
  };

  let className = "RichEditor-editor";

  let contentState = editorState.getCurrentContent();
  if (!contentState.hasText())
    if (contentState.getBlockMap().first().getType() !== "unstyled")
      className += " RichEditor-hidePlaceholder";

  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.editorWrapper}>
        {readOnly ? null : (
          <div className={styles.styleControlsWrapper}>
            <div className={styles.blockControlsWrapper}>
              <BlockStyleControls
                editorState={editorState}
                onToggle={onToggleBlockType}
              />
            </div>

            <div className={styles.inlineStyleWrapper}>
              <InlineStyleControls
                editorState={editorState}
                onToggle={onToggleInlineStyle}
              />
            </div>
          </div>
        )}
        <div onClick={focus} style={{ height: "90%", width: "90%" }}>
          <Editor
            className={className}
            ref={editorRef}
            handleKeyCommand={handleKeyCommand}
            editorState={editorState}
            onChange={onChange}
            onTab={onTab}
            spellCheck={true}
            readOnly={readOnly}
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
          />
        </div>
        <div className={styles.actionButtonsWrapper}>
          {readOnly ? (
            <button
              onClick={() => handleReadOnly(readOnly)}
              className={styles.actionButton}>
              Open in Editor mode
            </button>
          ) : null}
          {readOnly ? null : (
            <div className={styles.buttonWrapper}>
              <button
                onClick={() => handleSave(readOnly, editorState)}
                className={styles.saveButton}>
                Save changes
              </button>
              <button
                onClick={() => handleCancel(readOnly)}
                className={styles.cancelButton}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;

// import React, { useState, useRef, useEffect } from "react";

// import { Editor, EditorState, RichUtils } from "draft-js";

// import InlineStyleControls from "./InlineStyleControls/InlineStyleControls";

// import styles from "./TextEditor.module.css";
// import BlockStyleControls from "./BlockStyleControls";

// const TextEditorFunc = ({ mainState, onSave }) => {
//   const [privateEditorState, setPrivateEditorState] = useState(mainState);
//   const [editorState, setEditorState] = useState(privateEditorState);
//   const [readOnly, setReadOnly] = useState(true);
//   // console.log(editorState);

//   let editorRef = useRef();
//   const focus = () => editorRef.current.focus();
//   const onChange = (newState) => setEditorState(newState);
//   const handleKeyCommand = (command) => _handleKeyCommand(command);
//   const onTab = (e) => _onTab(e);
//   const onToggleBlockType = (type) => handleToggleBlockType(type);
//   const onToggleInlineStyle = (style) => handleToggleInlineStyle(style);

//   const _handleKeyCommand = (command) => {
//     let newState = RichUtils.handleKeyCommand(editorState, command);
//     if (newState) {
//       onChange(newState);
//       return true;
//     }
//     return false;
//   };

//   const _onTab = (e) => {
//     const maxDepth = 4;
//     onChange(RichUtils.onTab(e, editorState, maxDepth));
//   };

//   const handleToggleBlockType = (blockType) =>
//     onChange(RichUtils.toggleBlockType(editorState, blockType));

//   const handleToggleInlineStyle = (inlineStyle) =>
//     onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));

//   const handleSave = (current, editorState) => {
//     handleReadOnly(current);
//     if (privateEditorState !== editorState) {
//       setPrivateEditorState(editorState);
//     }
//     onSave(editorState);
//   };

//   const handleReadOnly = (current) => {
//     readOnly ? setReadOnly(false) : setReadOnly(true);
//   };

//   const handleCancel = (current) => {
//     handleReadOnly(current);
//     setEditorState(privateEditorState);
//   };

//   let className = "RichEditor-editor";

//   let contentState = editorState.getCurrentContent();
//   if (!contentState.hasText())
//     if (contentState.getBlockMap().first().getType() !== "unstyled")
//       className += " RichEditor-hidePlaceholder";

//   const styleMap = {
//     CODE: {
//       backgroundColor: "rgba(0, 0, 0, 0.05)",
//       fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
//       fontSize: 16,
//       padding: 2,
//     },
//   };

//   const getBlockStyle = (block) => {
//     switch (block.getType()) {
//       case "blockquote":
//         return "RichEditor-blockquote";
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.editorWrapper}>
//         {readOnly ? null : (
//           <div className={styles.blockControlsWrapper}>
//             <BlockStyleControls
//               editorState={editorState}
//               onToggle={onToggleBlockType}
//             />
//           </div>
//         )}
//         {readOnly ? null : (
//           <div className={styles.inlineStyleWrapper}>
//             <InlineStyleControls
//               editorState={editorState}
//               onToggle={onToggleInlineStyle}
//             />
//           </div>
//         )}
//         <div
//           className={className}
//           onClick={focus}
//           style={{ height: "100%", width: "100%" }}>
//           <Editor
//             ref={editorRef}
//             handleKeyCommand={handleKeyCommand}
//             editorState={editorState}
//             onChange={onChange}
//             onTab={onTab}
//             spellCheck={true}
//             readOnly={readOnly}
//             blockStyleFn={getBlockStyle}
//             customStyleMap={styleMap}
//           />
//         </div>
//         {readOnly ? (
//           <button
//             onClick={() => handleReadOnly(readOnly)}
//             className={styles.actionButton}>
//             Open in Editor mode
//           </button>
//         ) : null}
//         {readOnly ? null : (
//           <div className={styles.buttonWrapper}>
//             <button
//               onClick={() => handleSave(readOnly, editorState)}
//               className={styles.saveButton}>
//               Save changes
//             </button>
//             <button
//               onClick={() => handleCancel(readOnly)}
//               className={styles.cancelButton}>
//               Cancel
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TextEditorFunc;
