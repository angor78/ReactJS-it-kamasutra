import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        alt="ava"
        src="https://im0-tub-ru.yandex.net/i?id=2d001fc315acc21401601db5f9e46d4d&n=13&exp=1"
      />
      1 post
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
