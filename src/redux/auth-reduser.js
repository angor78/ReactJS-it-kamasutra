const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profile: null,
};

const authReduser = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        profile:action.profile
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login,profile) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
  profile,
});

export default authReduser;
