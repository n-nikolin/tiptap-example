import { useState, useEffect } from "react";
import { generateHTML } from "@tiptap/html";
import axios from "axios";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";

export function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toHTML = (data) => {
    return generateHTML(data, [StarterKit, Image, Youtube]);
  };

  return (
    <div className="container">
      {posts.map((post, index) => {
        return (
          <div className="post" key={index}>
            <div className="post-header">
              <h3>{post.title}</h3>
            </div>
            <div className="published">Published: {post.created}</div>
            <div dangerouslySetInnerHTML = {{ __html: toHTML(post.content) }} />
          </div>
        );
      })}
    </div>
  );
}
