import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  //debugger;
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" countLike ='11'/>
        <Post message="It's my first post!" countLike='2'/>
      </div>
    </div>
  );
};

export default MyPosts;
