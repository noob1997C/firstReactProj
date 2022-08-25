import Post from "./Post/Post";

const MyPosts = () => {
    return (
      <div className="text-2xl mb-3 pl-2"> 
        <div className="mb-2">My posts</div>
        <div><textarea className="border-2"></textarea></div>
        <button className="btn btn-blue mb-12 mr-2">Add Post</button>
        <Post likeCount="15" message="Hi how are you"/>
        <Post likeCount="20" message="It's my first post"/>
      </div>
    );
}

export default MyPosts;