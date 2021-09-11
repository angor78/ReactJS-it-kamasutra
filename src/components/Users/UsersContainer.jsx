import React from "react";
import { connect } from "react-redux";
import {
  followUserAC,
  setUsersAC,
  unFollowUserAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from "../../redux/users-reduser";
import Users from "../Users/Users";
import * as axios from "axios";


class UsersContainer extends React.Component {
  componentDidMount(state) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        debugger;
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
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageClick={this.onPageClick}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
      />
    );
  }
}

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
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setUsersTotalCount:(totalCount)=>{
      dispatch(setUsersTotalCountAC(totalCount))
    },
  };
};

export default connect(addStateToProps, addDispatchToProps)(UsersContainer);
