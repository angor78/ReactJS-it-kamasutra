import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
  //debugger

  return (
    <div>
      <div className={s.avatar}>
      <img
        alt="ava"
        src="https://im0-tub-ru.yandex.net/i?id=2d001fc315acc21401601db5f9e46d4d&n=13&exp=1"
      />
      </div>
      {props.name}
    </div>
  );
};

export default Friends;
