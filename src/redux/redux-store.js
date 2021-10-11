import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import setMyProfileReducer from "./settingProfile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";
import appReduser from "./app-reduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
  settingPage: setMyProfileReducer,
  app: appReduser,
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
