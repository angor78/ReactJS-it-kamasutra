import { connect } from "react-redux";
import {
  addPost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const addStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const MyPostsContainer = connect(addStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
