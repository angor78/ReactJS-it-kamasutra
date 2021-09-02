import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const addStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};
// const addDispatchToProps = (dispatch) => {
//   return {
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     },
//     addPost: () => {
//       dispatch(addPostActionCreator());
//     },
//   };
// };
const SidebarContainer = connect(addStateToProps)(Sidebar);

export default SidebarContainer;
