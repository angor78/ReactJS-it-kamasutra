const SET_MY_PROFILE = "SET_MY_PROFILE";

let initialState = {
  profile: null,
};

const setMyProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return { ...state, profile: action.myProfile };

    default:
      return state;
  }
};
export const setMyProfile = (myProfile) => ({
  type: SET_MY_PROFILE,
  myProfile,
});

export default setMyProfileReducer;
