import React, {useState} from 'react';
import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
  const [ posts, setPosts ] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  
  return (
    <>

    {posts.length > 0 &&   <ul className={classes.posts}>
      {posts.map((post) => <Post author={post.author} key={post.body} body={post.body}/>)}
    </ul>}

    {posts.length === 0 && 
    <div style={{ textAlign:"center", color:"white" }}>
      <h2>There are no posts yet.</h2>
      <p>start adding some!</p>
    </div> }
    
  
    </>
  )
}

export default PostsList