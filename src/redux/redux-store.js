import { combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import setMyProfileReducer from "./settingProfile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
  settingPage: setMyProfileReducer,
});
let store = createStore(redusers);

export default store;
