let initialState = {
  friends: [
    { id: 1, name: "Igor" },
    { id: 1, name: "Dmitry" },
    { id: 1, name: "Oleg" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }

};
export default sidebarReducer;
