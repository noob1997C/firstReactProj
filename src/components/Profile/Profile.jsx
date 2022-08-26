import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
      <div className='content pt-6'>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
    );
}

export default Profile;