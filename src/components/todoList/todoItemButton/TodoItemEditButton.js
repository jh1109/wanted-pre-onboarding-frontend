import React, { Fragment } from 'react';
import Button from '../../UI/Button';

const TodoItemEditButton = ({ onSubmit }) => {
  return (
    <Fragment>
      <Button it="submit-button" button={{ onClick: () => onSubmit() }}>
        제출
      </Button>
      <Button id="cancle-button">취소</Button>
    </Fragment>
  );
};

export default TodoItemEditButton;
