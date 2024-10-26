import React from 'react';
import classes from "./Modal.module.css";
import { useNavigate } from 'react-router-dom';

function Modal({ children }) {

  const navigate= useNavigate();
  //this is a programatic navigation
  function closeHandler() {
    navigate("..")
  }

  return (
    <>
    <div className={classes.backdrop} onClick={closeHandler}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
    </>
  )
}

export default Modal