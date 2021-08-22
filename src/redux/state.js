let state = {
  profilePage: {
    posts: [
      { message: "Hi, how are you?", countLike: "22" },
      { message: "It's my first post!", countLike: "22" },
      { message: "It's my first post!", countLike: "23" },
      { message: "It's my first post!", countLike: "24" },
    ],
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
  },
  sidebar:{
    friends:[
      {id:1, name:'Igor'},
      {id:1, name:'Dmitry'},
      {id:1, name:'Oleg'},
    ]
  },
};

export default state;
