import "./index.scss";
import MenuBar from "./MenuBar";
import { useState } from "react";

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
            console.log(editorContent.content);
          }}
        >
          SUBMIT
        </button>
      </div>
      </div>
    </div>
  );
}
