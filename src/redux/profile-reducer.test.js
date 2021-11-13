import profileReducer, {addPost, deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", countLike: "22" },
    { id: 4, message: "It's my first post!", countLike: "24" },
  ],
};

test("length of posts should be incremented", () => {
  //1.test data
  let action = addPost("IT1");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation ('ожидание')
  expect(newState.posts.length).toBe(3);
});

test("message of new post should be correct ", () => {
  //1.test data
  let action = addPost("IT1");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation ('ожидание')
  expect(newState.posts[2].message).toBe("IT1");
});

test("after delete post length of posts should be decremented ", () => {
  //1.test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation ('ожидание')
  expect(newState.posts.length).toBe(1);
});

