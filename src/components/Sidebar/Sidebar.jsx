import React from "react";
import Friends from "./Friends/Friends";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  let friendsItems = props.state.friends.map((f) => (
    <Friends name={f.name} id={f.id} />
  ));
  return (
    <div>
      <h3>Friends</h3>
      <div className={s.item}>{friendsItems}</div>
    </div>
  );
};

export default Sidebar;
