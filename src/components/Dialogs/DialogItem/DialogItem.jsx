import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs"+ props.id ;
  // 
  return (
    <div className={s.dialog} >
      <NavLink to={path} activeClassName={s.active}>
        <span className={s.avatar}>
          <img hspace='5px'
            alt="ava"
            src="https://www.vhv.rs/dpng/d/131-1312178_transparent-businesswoman-clipart-man-woman-icon-png-png.png"
          />
        </span>
        {props.name}
      </NavLink>
      
    </div>
  );
};

export default DialogItem;
