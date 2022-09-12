// import { rerenderEntireTree } from "../index";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';

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
      newMessageText: "this is new message",
    },
    sidebar: {},
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   // debugger;
    //   const newPost = {
    //     id: 5,
    //     likeCount: 0,
    //     message: this._state.profilePage.newPostText,
    //   };
    //   this._state.profilePage.postsData.push(newPost);
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   // debugger;
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   // debugger;
    //   this._state.messagesPage.newMessageText = action.messageText;
    //   this._callSubscriber(this._state);
    // }
    // else if (action.type === SEND_MESSAGE) {
    //   // debugger;
    //   const messageText = this._state.messagesPage.newMessageText;
    //   this._state.messagesPage.newMessageText = '';
    //   this._state.messagesPage.messagesData.push({ id: 6, message: messageText });
    //   this._callSubscriber(this._state);
    // }
  },
}

// export const addPostActionCreater = () => {
//   return {
//     type: ADD_POST,
//   }
// }

// export const updateNewPostActionCreater = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text,
//   }
// }

// export const updateNewMessageTextCreater = (text) => {
//   return {
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     messageText: text,
//   }
// }

// export const sendMessageCreater = () => {
//   return {
//     type: SEND_MESSAGE,
//   }
// }

export default store;

window.store = store;