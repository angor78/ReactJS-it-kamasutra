import { profileAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  profile: null,
  password: null,
  rememberMe: false,
  captcha: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        profile: action.profile,
      };

    default:
      return state;
  }
};
//ActionCreators
export const setAuthUserData = (userId, email, login, profile) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
  profile,
});
//ThunkCreators
export const getAuthMe = () => {
  return (dispatch) => {
    profileAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
export const postAuthLogin = (values) => {
  let email = values.email;
  let password = values.password;
  let rememberMe = values.rememberMe;
  let captcha = values.captcha;
  return (dispatch) => {
    profileAPI
      .postAuthLogin(email,password,rememberMe,captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login));
        }
      });
  };
};
export default authReduser;
