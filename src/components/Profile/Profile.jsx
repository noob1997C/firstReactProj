import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
      <div className='content pt-6'>
        <div className="text-2xl mb-4">ava + desc</div>
        <MyPosts />
      </div>
    );
}

export default Profile;