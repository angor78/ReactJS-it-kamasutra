import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.descriptionBlock}>
        <img
        alt="ava"
        src="https://p7.hiclipart.com/preview/127/587/715/atom-logo-industry-nuclear-power-others.jpg"
      />
      <p>Description</p>
      </div>
      
    </div>
  );
};
export default ProfileInfo;
