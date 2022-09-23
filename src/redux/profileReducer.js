const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  postsData: [
    { id: 1, likeCount: 15, message: 'Hi how are you' },
    { id: 2, likeCount: 10, message: "It's my first post" },
    { id: 3, likeCount: 12, message: 'How are your it-kamasutra?' },
    { id: 4, likeCount: 14, message: 'Yo' },
  ],
  newPostText: 'this is default text',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
            // debugger;
            const newPost = {
              id: 5,
              likeCount: 0,
              message: state.newPostText,
            };
            return {
              ...state,
              postsData: [...state.postsData, newPost],
              newPostText: ''
            };
    }
    case UPDATE_NEW_POST_TEXT: {
            // debugger;  
            return {
              ...state,
              newPostText: action.newText
            };
    }
    default:
      return state;
  }
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

export default profileReducer;