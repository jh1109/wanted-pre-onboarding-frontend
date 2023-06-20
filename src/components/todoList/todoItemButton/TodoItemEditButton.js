import React, { Fragment } from 'react';
import Button from '../../UI/Button';

const TodoItemEditButton = () => {
  return (
    <Fragment>
      <Button type="submit" it="submit-button">
        제출
      </Button>
      <Button id="cancle-button">취소</Button>
    </Fragment>
  );
};

export default TodoItemEditButton;
