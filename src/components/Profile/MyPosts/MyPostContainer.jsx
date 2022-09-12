import MyPosts from "./MyPosts";
import { addPostActionCreater, updateNewPostActionCreater} from "../../../redux/profileReducer";


const MyPostContainer = (props) => {
    // debugger;
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreater());
      };

    const onPostChange = (text) => {
        const action = updateNewPostActionCreater(text);
        props.store.dispatch(action);
    }
  
    return <MyPosts updateNewPostText={onPostChange} 
                    addPost={addPost} 
                    posts={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}/>
}

export default MyPostContainer;