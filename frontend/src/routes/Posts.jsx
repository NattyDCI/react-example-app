import PostsList from '../components/PostsList';
import '../../src/App.css';
import { Outlet } from 'react-router-dom';

function Posts() {


  return (
    <>
      <PostsList/>
      <main>
        <Outlet />
      </main>  
    </>
    );
  }
  
export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

