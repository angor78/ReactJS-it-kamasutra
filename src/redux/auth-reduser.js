const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  fullName: null,
};

const authReduser = (state = initialState, action) => {
  
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        fullName:action.fullName
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login,fullName) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
  fullName,
});

export default authReduser;
