import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
// debugger;
  let postsElement = props.posts.map((post) => 
    <Post likeCount={post.likeCount} message={post.message}/>
  );

  const newPostElement = React.createRef();

  const addPost = () => {
    // debugger;
    const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

    return (
      <div className="text-2xl mb-3 pl-2"> 
        <div className="mb-2">My posts</div>
        <div><textarea ref={newPostElement} className="border-2"></textarea></div>
        <button onClick={addPost} className="btn btn-blue mb-12 mr-2">Add Post</button>
        <div className="posts">{postsElement}</div>
      </div>
    );
}

export default MyPosts;