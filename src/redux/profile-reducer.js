import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", countLike: "22" },
    { id: 4, message: "It's my first post!", countLike: "24" },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  status: "Hello world!",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 5, message: text, countLike: 0 }],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USERS_PROFILE:
      return { ...state, profile: action.usersProfile };

    default:
      return state;
  }
};

//ActionCreators
export const setUsersProfile = (usersProfile) => ({
  type: SET_USERS_PROFILE,
  usersProfile,
});
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

//ThunkCreators
export const getUsersProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};

export default profileReducer;
