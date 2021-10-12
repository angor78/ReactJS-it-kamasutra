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
import {getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersFunc} from '../../redux/users-selectors'
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
    users: getUsersFunc(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
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
