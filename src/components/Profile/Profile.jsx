import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <MyPostsContainer className={s.myposts} />
      <ProfileInfo
        className={s.profile}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
       
      />
    </div>
  );
};

export default Profile;
