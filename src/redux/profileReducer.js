const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      // debugger;
      const newPost = {
        id: 5,
        likeCount: 0,
        message: state.newPostText,
      };
      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      // debugger;
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export default profileReducer;