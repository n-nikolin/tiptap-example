import "./index.scss";
import MenuBar from "./MenuBar";
import { useState } from "react";
import axios from "axios";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

export default function TipTap() {
  const [editorContent, setEditorContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube.configure({
        controls: false,
      }),
    ],
    content: ``,
    onUpdate({ editor }) {
      setEditorContent(editor.getJSON());
    },
  });

  const makePost = () => {
    axios
      .post(`http://127.0.0.1:8000/posts/`, {
        title: "a title",
        content: editorContent,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <MenuBar editor={editor} />
      <div className="editor-container">
        <EditorContent editor={editor} />
        <button className="btn-submit" type="submit" onClick={makePost}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
