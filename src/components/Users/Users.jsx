import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import user from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount(state) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        debugger
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={style.wrapPagination}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p ? style.selectedPage:undefined}
                onClick={(event) => {
                  this.onPageClick(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        {this.props.users.map((u) => (
          <div key={u.id} className={style.wrapper}>
            <div>
              <img
                alt={"ava"}
                src={u.photos.small ? u.photos.small : user}
                className={style.userAva}
              />
              {u.name}
              {/* <span>{'u.location.place'}</span>
            <span>{'u.location.country'}</span> */}
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
  }
}

export default Users;
