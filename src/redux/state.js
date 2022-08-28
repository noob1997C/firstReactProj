import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsData : [
            {id: 1, likeCount: 15, message: 'Hi how are you'},
            {id: 2, likeCount: 10, message: "It's my first post"},
            {id: 3, likeCount: 12, message: 'How are your it-kamasutra?'},
            {id: 4, likeCount: 14, message: 'Yo'},
          ],
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
}

export const addPost = (postMessage) => {
  // debugger;
  const newPost = {
    id: 5,
    likeCount: 0,
    message: postMessage,
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
};

export default state;