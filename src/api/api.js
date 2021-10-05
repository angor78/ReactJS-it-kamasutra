import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
  },
});
const instanceSetting = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8bf7ade0-2e16-4acd-95db-d9b2955d3ec2",
    "Content-Type": "multipart/form-data",
  },
});
//usersAPI
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
//profileAPI
export const profileAPI = {
 
  getMyProfile(id) {
    return instance.get(`profile/` + id).then((response) => response.data);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
};
//AuthAPI
export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },

  login(email, password, rememberMe, captcha) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
//settingAPI
export const settingAPI = {
  uploadImage(data) {
    return instanceSetting.put(`profile/photo`, data);
  },
};
