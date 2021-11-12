import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm";

const MyPosts = (props) => {
//immutability pure function
  let postsElements = [...props.posts].reverse().map((p) => (
    <Post message={p.message} countLike={p.countLike} />
  ));

  let sendPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <div className={s.posts}>{postsElements}</div>
      <h3>My posts</h3>
      <AddPostForm sendPost={sendPost} />
    </div>
  );
};



export default MyPosts;
