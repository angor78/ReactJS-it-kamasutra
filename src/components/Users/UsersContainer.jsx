import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setUsersTotalCount,
  togglePreloader,
} from "../../redux/users-reduser";
import Users from "../Users/Users";
import Preloader from "../../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreloader(true);
    usersAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
        this.props.togglePreloader(false);
      });
  }
  
  onPageClick = (pageNumber) => {
    this.props.togglePreloader(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.setUsers(data.items);
      this.props.togglePreloader(false);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageClick={this.onPageClick}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
          />
        )}
      </>
    );
  }
}

let addStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
// let addDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followUserAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowUserAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },

//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     togglePreloader: (isFetching) => {
//       dispatch(togglePreloaderAC(isFetching));
//     },
//   };
// };

export default connect(addStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  togglePreloader,
})(UsersContainer);
