import { authAPI } from "../api/api";
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
        profile: action.profile,
      };

    default:
      return state
  }
};
//ActionCreators
export const setAuthUserData = (userId, email, login,isAuth, profile) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
  profile,
});
//ThunkCreators
export const getAuthMe = () => {
  return (dispatch) => {
    authAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login,true));
      }
    });
  };
};
export const login = (values) => {
  let email = values.email;
  let password = values.password;
  let rememberMe = values.rememberMe;
  let captcha = values.captcha;
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthMe());
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null,null,null,false));
      }
    });
  };
};
export default authReduser;
