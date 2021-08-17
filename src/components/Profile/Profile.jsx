import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.cover}
          alt="content"
          src="https://pbs.twimg.com/profile_banners/2882905954/1416337076/1500x500"
        />
      </div>
      <div>
        ava + description
        <img
          width="300"
          alt="avatar"
          src="https://yt3.ggpht.com/a/AGF-l7-hPMNZV0jJsCFwwC4W6QUiN8bwykm_jTFX5w=s900-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
     <MyPosts/>
    </div>
  );
};

export default Profile;
