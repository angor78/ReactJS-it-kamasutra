const SEND_MESSAGE = "SEND_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 9, message: action.newMessageText }],
      };

      
    default:
      return state;
  }
};
export const sendMessage = (newMessageText) => ({
  type: SEND_MESSAGE,newMessageText
});


export default dialogsReducer;
