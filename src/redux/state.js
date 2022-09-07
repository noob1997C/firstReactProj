// import { rerenderEntireTree } from "../index";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, likeCount: 15, message: 'Hi how are you' },
        { id: 2, likeCount: 10, message: "It's my first post" },
        { id: 3, likeCount: 12, message: 'How are your it-kamasutra?' },
        { id: 4, likeCount: 14, message: 'Yo' },
      ],
      newPostText: 'this is default text',
    },
    messagesPage: {
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How are your it-kamasutra?' },
        { id: 4, message: 'Yo' },
      ],
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    // debugger;
    return this._state;
  },
  // addPost() {

  // },
  // updateNewPostText(newText) {

  // },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      // debugger;
      const newPost = {
        id: 5,
        likeCount: 0,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      // debugger;
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  }
}

export const updateNewPostActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}

export default store;

window.store = store;