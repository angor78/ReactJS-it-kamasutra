import { connect } from "react-redux";
import {
  followUserAC,
  setUsers,
  unFollowUserAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from "../../redux/users-reduser";
import Users from "./Users";

let addStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
  };
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setUsersTotalCount:(totalCount)=>{
      dispatch(setUsersTotalCountAC(totalCount))
    },
  };
};

export default connect(addStateToProps, addDispatchToProps)(Users);
