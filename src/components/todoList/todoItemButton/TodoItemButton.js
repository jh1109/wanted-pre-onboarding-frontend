import React, { Fragment } from 'react';
import Button from '../../UI/Button';

const TodoItemButton = ({ item, onRemove, onEditMode }) => {
  return (
    <Fragment>
      <Button id="modify-button" button={{ onClick: () => onEditMode() }}>
        수정
      </Button>
      <Button id="delete-button" button={{ onClick: () => onRemove(item.id) }}>
        삭제
      </Button>
    </Fragment>
  );
};

export default TodoItemButton;
