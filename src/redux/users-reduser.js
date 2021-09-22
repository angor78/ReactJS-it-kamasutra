const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  totalUsersCount: 21,
  pageSize: 25,
  currentPage: 4,
  isFetching: false,
  followingProgress: [],
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
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };

    case TOGGLE_PRELOADER:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => !id === action.userId),
      };

    default:
      return state;
  }
};
export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unFollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const togglePreloader = (isFetching) => ({
  type: TOGGLE_PRELOADER,
  isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  userId,
  isFetching,
});

export default usersReduser;
