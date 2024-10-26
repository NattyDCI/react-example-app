import React, {useState} from 'react';
import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from './NewPost.jsx';
import Modal from "./Modal.jsx"



function PostsList({ isPosting, onStopPosting }) {
  const [ posts, setPosts ] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  
  return (
    <>

    {/* you haveß to have access to the state that defines if the modal is visible, or not. */}
    { isPosting &&
      < Modal 
      onClose={onStopPosting} 
      onClick={onStopPosting} >
        <NewPost 
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
      />
  </Modal> 
    }
    {posts.length > 0 &&   <ul className={classes.posts}>
      {posts.map((post) => <Post author={post.author} key={post.body} body={post.body}/>)}
    </ul>}

    {posts.length === 0 && <Post author="" body="No Posts yet!"/>}
    
  
    </>
  )
}

export default PostsList