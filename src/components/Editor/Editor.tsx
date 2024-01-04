// import dynamic from "next/dynamic";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import styles from './Editor.module.css'
// import { useState } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import draftToHtml from 'draftjs-to-html';



// const Editor = dynamic(() => import("react-draft-wysiwyg").then(module => module.Editor), {
//   ssr: false
// })



// function TextEditor() {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty())

//   const onEditorStateChange = (editorState) => {
//     setEditorState(editorState)

//   }

//   return (
//     <div className={styles.wrapper}>
//       <Editor
//         editorState={editorState}
//         onEditorStateChange={onEditorStateChange}
//         toolbarClassName={styles.toolbar}
//         editorClassName={styles.editor}
//       />
//       <textarea
//         disabled
//         value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//       />
//     </div>
//   )
// }

// export default TextEditor