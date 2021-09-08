const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};
export const followUserAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unFollowUserAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReduser;
