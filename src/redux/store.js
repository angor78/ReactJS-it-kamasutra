import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", countLike: "22" },
        { id: 4, message: "It's my first post!", countLike: "24" },
      ],
      newPostText: "it-kamasutra",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Maxim" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Natasha" },
        { id: 4, name: "Aksana" },
        { id: 5, name: "Polina" },
        { id: 6, name: "Babushka" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Fine" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],
      newMessageText: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Igor" },
        { id: 1, name: "Dmitry" },
        { id: 1, name: "Oleg" },
      ],
    },
  },
  _callSubscriber() {},

  //Методы не меняющие state
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  //Методы которые меняют state
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this.getState());
  },
};

window.state = store.getState();

export default store;
