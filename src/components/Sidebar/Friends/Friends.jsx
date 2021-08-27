import React from "react";
import s from "./Friends.module.css";

const Friends = (props) => {
  //debugger

  return (
    
      <span className={s.avatar}>
      <img
        alt="ava"
        src="https://w7.pngwing.com/pngs/295/920/png-transparent-computer-icons-hairstyle-silhouette-hair-shapes-animals-photography-monochrome-thumbnail.png"
      />
      {props.name}
      </span>
      
    
  );
};

export default Friends;
