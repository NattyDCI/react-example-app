import classes from './NewPost.module.css';
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {


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
 
  function submitHandler() {
    event.preventDefault();
    const postData = {
      body: bodyContent,
      author: authorContent
    };
    onAddPost(postData);
    onCancel();

  }


  return (

    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Author</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel} >Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;