import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
  },
});


export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getMyProfile(id) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
};

