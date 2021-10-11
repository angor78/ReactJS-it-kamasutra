import { getAuthMe } from "./auth-reduser";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
//ActionCreators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
//ThunkCreators
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthMe());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReduser;
