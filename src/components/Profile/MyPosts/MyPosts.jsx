import React from "react";
import Post from "./Post/Post";



const MyPosts = (props) => {
// debugger;
  let postsElement = props.posts.map((post) => 
    <Post likeCount={post.likeCount} message={post.message}/>
  );

  const newPostElement = React.createRef();

  const onAddPost = () => {
    // debugger;
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.onPostChange(text);
  };

    return (
      <div className="text-2xl mb-3 pl-2"> 
        <div className="mb-2">My posts</div>
        <div><textarea ref={newPostElement} 
                       className="border-2" 
                       onChange={onPostChange}
                       value={props.newPostText}/></div>
        <button onClick={onAddPost} className="btn btn-blue mb-12 mr-2">Add Post</button>
        <div className="posts">{postsElement}</div>
      </div>
    );
}

export default MyPosts;