const SEND_MESSAGE = "SEND_MESSAGE";
const UP_NEW_MESSAGE_TEXT = "UP_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 9,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UP_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
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
