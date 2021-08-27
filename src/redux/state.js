const ADD_MESSAGE = "ADD_MESSAGE";
const UP_NEW_MESSAGE_TEXT = "UP_NEW_MESSAGE_TEXT";
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

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
      newMessageText: "new Message",
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        countLike: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this.getState());
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 9,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this.getState());
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this.getState());
    } else if (action.type === UP_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this.getState());
    }
  },
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});
export const updateMessageTextActionCreator = (text) => ({
  type: UP_NEW_MESSAGE_TEXT,
  newText:text
});
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
window.state = store.getState();

export default store;
