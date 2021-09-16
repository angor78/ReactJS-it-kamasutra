import { combineReducers, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  auth:authReduser,
});
let store = createStore(redusers);


export default store;
