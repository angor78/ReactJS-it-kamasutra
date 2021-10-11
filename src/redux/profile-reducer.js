import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_PROFILE_STATUS = "SET_USERS_PROFILE_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", countLike: "22" },
    { id: 4, message: "It's my first post!", countLike: "24" },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.newPost, countLike: 0 }],
      };

    case SET_USERS_PROFILE:
      return { ...state, profile: action.usersProfile };

    case SET_USERS_PROFILE_STATUS:
      return { ...state, status: action.status };

    default:
      return state;
  }
};

//ActionCreators
export const setUsersProfile = (usersProfile) => ({
  type: SET_USERS_PROFILE,
  usersProfile,
});
export const setStatus = (status) => ({
  type: SET_USERS_PROFILE_STATUS,
  status,
});
export const addPost = (newPost) => ({
  type: ADD_POST,newPost
});


//ThunkCreators
export const getUsersProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(data.status));
      }
    });
  };
};

export default profileReducer;
