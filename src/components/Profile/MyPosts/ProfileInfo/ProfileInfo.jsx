import React from "react";
import Preloader from "../../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import user from "../../../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.wrapper}>
      <div className={s.avaImg}>
        <img
          alt="ava"
          src={props.profile.photos.large ? props.profile.photos.large : user}
        />
        <p>{props.profile.fullName}</p>
      </div>

      <div className={s.contactsBlock}>
        <h4>Сontacts</h4>
        <ul>
          <li>{props.profile.contacts.facebook}</li>
          <li>{props.profile.contacts.twitter}</li>
          <li>{props.profile.contacts.vk}</li>
          <li>{props.profile.contacts.instagram}</li>
          <li>{props.profile.contacts.github}</li>
        </ul>
      </div>

      <div className={s.descriptionBlock}>
        <h4>Description</h4>
        <ul>
          <li>{props.profile.aboutMe}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
