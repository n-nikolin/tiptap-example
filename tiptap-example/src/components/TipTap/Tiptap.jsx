import "./index.scss";
import MenuBar from "./MenuBar";
import { useState, useEffect } from "react";
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

  return (
    <div className="container">
      <MenuBar editor={editor} />
      <div className="editor-container">
        <EditorContent editor={editor} />
        <div className="btn-submit">
          <button
            type="submit"
            className="btn-submit"
            onClick={() => {
              axios
                .post(`http://127.0.0.1:8000/posts/`, {
                  title: "a title",
                  content: editorContent.content,
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
