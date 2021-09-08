import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import user from "../../assets/images/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios("https://social-network.samuraijs.com/api/1.0/users").then(
      (response) => {
        this.props.setUsers(response.data.items);
      }
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id} className={style.wrapper}>
            <div>
              <img alt={"ava"} src={user} className={style.userAva} />
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
