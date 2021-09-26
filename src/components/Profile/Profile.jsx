import React from "react";
import { Redirect } from "react-router";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  if(!props.isAuth)return <Redirect to={'/login'}/>;

  return (
    <div className={s.wrapper}>
      <MyPostsContainer className={s.myposts} />
      <ProfileInfo className={s.profile} profile={props.profile}/>
    </div>
  );
};

export default Profile;
