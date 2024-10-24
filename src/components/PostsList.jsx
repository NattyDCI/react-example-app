import React, {useState} from 'react';
import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from './NewPost.jsx';



function PostsList(props) {

  //the posts needs to have access to the state in order to update what has been entered
  //but the event is in a different component, so we need to lift the state

  const [bodyContent, setBodyContent] = useState('');
  const [authorContent, setAuthorContent] = useState('');


  // document.querySelector("textarea").addEventListener("change". function() {})
  // this is the imperative approach. where you add event listeners, who will be triggered where the textarea changes
  // in react we use the declarative approach

  function bodyChangeHandler(event) {
    setBodyContent(event.target.value)

  }

  function authorChangeHandler(event) {
    setAuthorContent(event.target.value)
  }

  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className={classes.posts}>
        <Post author={authorContent} body={bodyContent}/>
        <Post author="Manuel" body="Check out the full course!"/>
    </ul>
    </>
  )
}

export default PostsList