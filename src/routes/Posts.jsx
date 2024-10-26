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



