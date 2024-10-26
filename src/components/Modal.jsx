import React from 'react';
import classes from "./Modal.module.css"

function Modal({ onStopPosting, children }) {
  return (
    <>
    <div className={classes.backdrop} />
        <dialog open onClose={onStopPosting} className={classes.modal}>
            {children}
        </dialog>
    </>
  )
}

export default Modal