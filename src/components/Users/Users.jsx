import React from "react";
import style from "./Users.module.css";
import user from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 25 /*pagesCount*/; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={style.wrapPagination}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? style.selectedPage : undefined
              }
              onClick={(event) => {
                props.onPageClick(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id} className={style.wrapper}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img
                alt={"ava"}
                src={u.photos.small ? u.photos.small : user}
                className={style.userAva}
              />
              {u.name}
            </NavLink>
            {/* <span>{'u.location.place'}</span>
        <span>{'u.location.country'}</span> */}
          </div>
          <div>
            {u.followed ? (
              <button
                disabled={props.followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true,u.id);
                  usersAPI.unfollowUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.unFollow(u.id);
                    }
                    props.toggleFollowingProgress(false,u.id);
                  });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.toggleFollowingProgress(true,u.id);
                  usersAPI.followUser(u.id).then((data) => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.toggleFollowingProgress(false,u.id);
                  });
                }}
              >
                Follow
              </button>
            )}
            {u.status}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
