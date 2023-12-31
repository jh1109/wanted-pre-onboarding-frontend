import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import Card from '../Card';

const ModalBackdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = ({ className, children }) => {
  return (
    <div className={classes.modalWrapper}>
      <Card className={`${classes.modal} ${className}`}>{children}</Card>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

const Modal = ({ className, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay className={className}>{children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;
