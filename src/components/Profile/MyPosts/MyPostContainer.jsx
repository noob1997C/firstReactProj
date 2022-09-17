import MyPosts from "./MyPosts";
import { addPostActionCreater, updateNewPostActionCreater } from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";


const MyPostContainer = (props) => {
  // debugger;

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();

          const addPost = () => {
            store.dispatch(addPostActionCreater());
          };

          const onPostChange = (text) => {
            const action = updateNewPostActionCreater(text);
            store.dispatch(action);
          }

          return <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostContainer;