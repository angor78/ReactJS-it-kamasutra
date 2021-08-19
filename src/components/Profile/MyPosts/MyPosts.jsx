import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

export let posts = [
  // { message: "Hi, how are you?", countLike: "22" },
  { message: "It's my first post!", countLike: "22" },
  { message: "It's my first post!", countLike: "23" },
  { message: "It's my first post!", countLike: "24" },
];
let postsElements = posts.map((p) => (
  <Post message={p.message} countLike={p.countLike} />
));

const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
