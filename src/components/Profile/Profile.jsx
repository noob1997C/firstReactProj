import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
      <div className='content pt-6'>
        <ProfileInfo/>
        <MyPosts />
      </div>
    );
}

export default Profile;