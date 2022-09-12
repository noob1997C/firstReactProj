import MyPostContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  // debugger;
    return (
      <div className='content pt-6'>
        <ProfileInfo/>
        <MyPostContainer store={props.store}/>
      </div>
    );
}

export default Profile;