import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  // debugger;
    return (
      <div className='content pt-6'>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.postsData}
                 newPostText = {props.profilePage.newPostText}
                 dispatch = {props.dispatch}
                 addPost={props.addPost}/>
      </div>
    );
}

export default Profile;