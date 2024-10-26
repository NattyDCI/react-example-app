import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link, Form, redirect } from "react-router-dom"

function NewPost() {

  return (
    <Modal>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Author</label>
          <input
            type="text"
            id="name"
            required
            name="author"
          />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

// this form Tag coming from react-router-dom creates a request object wich contains a method, wich we could use on the action to find out wich form was submitted in case we have different forms with the same action.

export default NewPost;


export async function action({request}) {
  const formData = await request.formData(); 
  const postData = Object.fromEntries(formData); // {body: "...", author:"..."}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json"
    },
  });
  return redirect("/");
}

