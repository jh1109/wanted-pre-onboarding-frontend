import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import Card from '../Card';

const ModalBackdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <Card className={classes.content}>{children}</Card>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;
