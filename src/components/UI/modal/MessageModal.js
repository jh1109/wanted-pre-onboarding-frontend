import React from 'react';

import Modal from './Modal';

import classes from './MessageModal.module.css';

const MessageModal = ({ message }) => {
  return (
    <Modal className={classes.messageModal}>
      <p>{message}</p>
    </Modal>
  );
};

export default MessageModal;
