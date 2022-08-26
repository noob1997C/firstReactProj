import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElement = props.posts.map((post) => 
    <Post likeCount={post.likeCount} message={post.message}/>
  );

    return (
      <div className="text-2xl mb-3 pl-2"> 
        <div className="mb-2">My posts</div>
        <div><textarea className="border-2"></textarea></div>
        <button className="btn btn-blue mb-12 mr-2">Add Post</button>
        <div className="posts">{postsElement}</div>
      </div>
    );
}

export default MyPosts;