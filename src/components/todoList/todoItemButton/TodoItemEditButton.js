import React, { Fragment } from 'react';
import Button from '../../UI/Button';

const TodoItemEditButton = ({ onSubmit, onCancel }) => {
  return (
    <Fragment>
      <Button id="submit-button" button={{ onClick: () => onSubmit() }}>
        제출
      </Button>
      <Button id="cancel-button" button={{ onClick: () => onCancel() }}>
        취소
      </Button>
    </Fragment>
  );
};

export default TodoItemEditButton;
