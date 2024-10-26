import { useState } from 'react'
import Post from "./components/Post.jsx";
import PostList from "./components/PostsList.jsx"
import MainHeader from './components/MainHeader.jsx';
import './App.css'

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false); 

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }


  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
      <div>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}/>
      </div>
    </>
  )
}

export default App
