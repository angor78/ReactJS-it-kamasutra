import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  setUsersTotalCount,
  togglePreloader,
  getUsers,
  follow,
  unfollow,
} from "../../redux/users-reduser";
import Users from "../Users/Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageClick = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
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
            followingProgress={this.props.followingProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(addStateToProps, {
  setCurrentPage,
  setUsersTotalCount,
  togglePreloader,
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
