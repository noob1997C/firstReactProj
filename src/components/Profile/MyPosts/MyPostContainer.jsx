import MyPosts from "./MyPosts";
import { addPostActionCreater, updateNewPostActionCreater } from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    onPostChange: (text) => {
      const action = updateNewPostActionCreater(text);
      dispatch(action);
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;