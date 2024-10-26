import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from './routes/NewPost';
import PostDetails, { loader as PostDetailsLoader } from './routes/PostDetails';
import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader } from './routes/Posts';

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    children: [
      { path: "/", 
        element: <Posts />, 
        loader: postsLoader,
        children: [
          { path: "/create-post", element:<NewPost />, action: newPostAction },
          { path: "/:id", element: <PostDetails />, loader: PostDetailsLoader }
        ],
        // its important to call an action to the route that contains the form
      },   
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
