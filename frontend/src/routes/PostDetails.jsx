import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;


//about the loader function
// I want to send a request to this route in the backend, this is found in app.js in the backend folder.

// app.get('/posts/:id', async (req, res) => {
//   const storedPosts = await getStoredPosts();
//   const post = storedPosts.find((post) => post.id === req.params.id);
//   res.json({ post });
// });


export async function loader({params}) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post; 
  // resData.post because the backend sends back an object with a post key that contains the post that was fetched or undefined if no post was found, but we handled that case in our component.
  
}