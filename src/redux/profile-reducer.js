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
    case ADD_POST: {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      let newPost = {
        id: 5,
        message: stateCopy.newPostText,
        countLike: 0,
      };
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
      let stateCopy = {...state}
      stateCopy.newPostText = action.newText;
      return stateCopy;}
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
