import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          className={s.cover}
          alt="content"
          src="https://pbs.twimg.com/profile_banners/2882905954/1416337076/1500x500"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
      {/* <img
        width="300"
        alt="avatar"
        src="https://yt3.ggpht.com/a/AGF-l7-hPMNZV0jJsCFwwC4W6QUiN8bwykm_jTFX5w=s900-c-k-c0xffffffff-no-rj-mo"
      /> */}
    </div>
  );
};
export default ProfileInfo;
