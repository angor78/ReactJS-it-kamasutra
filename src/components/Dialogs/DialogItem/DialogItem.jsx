import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>
        <span className={s.avatar}>
          <img hspace='5px'
            alt="ava"
            src="https://im0-tub-ru.yandex.net/i?id=2d001fc315acc21401601db5f9e46d4d&n=13&exp=1"
          />
        </span>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
