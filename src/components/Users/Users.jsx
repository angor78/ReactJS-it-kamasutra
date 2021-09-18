import React from "react";
import style from "./Users.module.css";
import user from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unFollow(u.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
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
