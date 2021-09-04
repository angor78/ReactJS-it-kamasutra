import { connect } from "react-redux";
import { followUserAC, setUsers, unFollowUserAC } from "../../redux/users-reduser";
import Users from "./Users";

let addStateToProps = (state) => {
  return { users: state.usersPage.users };
};
let addDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followUserAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowUserAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    },
  };
};

export default connect(addStateToProps, addDispatchToProps)(Users);
