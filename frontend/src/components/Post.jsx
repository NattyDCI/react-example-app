import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

// my id is coming from the backend and there an id is added:
// look in posts.json in the backend folder: {"posts":[{"body":"how cool is that!","author":"nathalia","id":"0.742277784491953"},{"body":"react is awesome!","author":"Nathalia","id":"0.8611073606964699"},{"body":"This course is hopefully very helpful to you!","author":"Maximilian","id":"post-1"}]}

function Post({id, author, body}) {
  return (
    <div className={classes.post}>
      {/* to id because it is simple appended to the current path that we are on, so it is a relative path when I just write id */}
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>

    </div>
  )
}

export default Post