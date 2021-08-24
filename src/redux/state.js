let rerenderEntireTree = () => {
  
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", countLike: "22" },
      { id: 2, message: "It's my first post!", countLike: "22" },
      { id: 3, message: "It's my first post!", countLike: "23" },
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    countLike: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 9,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export const upNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
