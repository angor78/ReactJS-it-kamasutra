import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        ava:
          "https://w7.pngwing.com/pngs/295/920/png-transparent-computer-icons-hairstyle-silhouette-hair-shapes-animals-photography-monochrome-thumbnail.png",
        fullName: "Alex",
        status: "I am OK!",
        location: { place: "Penza", country: "Russia" },
      },
      {
        id: 2,
        followed: true,
        ava:
          "https://w7.pngwing.com/pngs/295/920/png-transparent-computer-icons-hairstyle-silhouette-hair-shapes-animals-photography-monochrome-thumbnail.png",

        fullName: "Den",

        status: "I am OK!",
        location: { place: "SPB", country: "Russia" },
      },
      {
        id: 3,
        followed: false,
        ava:
          "https://w7.pngwing.com/pngs/295/920/png-transparent-computer-icons-hairstyle-silhouette-hair-shapes-animals-photography-monochrome-thumbnail.png",

        fullName: "Stas",
        status: "I am OK!",
        location: { place: "Moscow", country: "Russia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={style.wrapper}>
          <div>
            <img alt={"ava"} src={u.ava} className={style.userAva} />
            {u.fullName}
            <span>{u.location.place}</span>
            <span>{u.location.country}</span>
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unFollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id);
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
