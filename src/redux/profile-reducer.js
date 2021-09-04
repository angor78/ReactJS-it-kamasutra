const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", countLike: "22" },
    { id: 4, message: "It's my first post!", countLike: "24" },
  ],
  newPostText: "it-kamasutra",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, {id: 5, message: text, countLike: 0 }],
       
      };

    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newText };

    default:
      return state;
  }
};
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
