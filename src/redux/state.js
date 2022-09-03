// import { rerenderEntireTree } from "../index";

let store = {
  _state: {
    profilePage: {
        postsData : [
            {id: 1, likeCount: 15, message: 'Hi how are you'},
            {id: 2, likeCount: 10, message: "It's my first post"},
            {id: 3, likeCount: 12, message: 'How are your it-kamasutra?'},
            {id: 4, likeCount: 14, message: 'Yo'},
          ],
        newPostText: 'this is default text',
    },
    messagesPage: {
        messagesData : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'How are your it-kamasutra?'},
            {id: 4, message: 'Yo'},
          ],
          dialogsData : [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
          ],
    },
  },
  getState() {
    // debugger;
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    // debugger;
    const newPost = {
      id: 5,
      likeCount: 0,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    // debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}


export default store;

window.store = store;