import "./index.scss";
import MenuBar from "./MenuBar";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from '@tiptap/extension-youtube'

export default function TipTap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube.configure({
        controls: false,
      }),
    ],
    content: ``,
  });

  return (
    <div className="container">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
      <button type="submit" className="btn-submit">SUBMIT</button>
    </div>
  );
}
