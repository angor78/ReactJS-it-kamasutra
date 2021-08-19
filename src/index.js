import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let posts = [
  { message: "Hi, how are you?", countLike: "22" },
  { message: "It's my first post!", countLike: "22" },
  { message: "It's my first post!", countLike: "23" },
  { message: "It's my first post!", countLike: "24" },
];

let dialogs = [
  { id: 1, name: "Maxim" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Natasha" },
  { id: 4, name: "Aksana" },
  { id: 5, name: "Polina" },
  { id: 6, name: "Babushka" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Fine" },
  { id: 4, message: "Yo" },
  { id: 5, message: "Yo" },
  { id: 6, message: "Yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
