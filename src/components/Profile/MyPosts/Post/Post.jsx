import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  //debugger;
  return (
    <div className={s.item}>
      <img
        alt="ava"
        src="https://p7.hiclipart.com/preview/127/587/715/atom-logo-industry-nuclear-power-others.jpg"
      />
      {props.message}
      <div>
        <span>Likes </span>
        {props.countLike}
      </div>
    </div>
  );
};

export default Post;
