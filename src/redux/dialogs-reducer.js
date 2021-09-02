const SEND_MESSAGE = "SEND_MESSAGE";
const UP_NEW_MESSAGE_TEXT = "UP_NEW_MESSAGE_TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      let newMessage = {
        id: 9,
        message: stateCopy.newMessageText,
      };
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UP_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};
export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateMessageTextActionCreator = (text) => ({
  type: UP_NEW_MESSAGE_TEXT,
  newText: text,
});

export default dialogsReducer;
