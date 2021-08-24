import React from "react";
import state, { subscribe } from "./redux/state";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addMessage,
  addPost,
  updateNewPostText,
  upNewMessageText,
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          upNewMessageText={upNewMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
