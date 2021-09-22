import React from "react";
import s from "./Settings.module.css";

const Settings = (props) => {
  return (
    <div className={s.content}>
      <h4>Settings</h4>
      <div>
        Upload image:
        <form action="PUT">
          <input type="file" onChange={props.uploadFile} />
        </form>
      </div>
      <div>
        Change description:
       
      </div>
    </div>
  );
};
export default Settings;
