import React from 'react';

import classes from './TodoItem.module.css';
import Button from '../UI/Button';

const TodoItem = ({ item, onToggle, onRemove }) => {
  return (
    <label className={classes.label}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => onToggle(item.id)}
      />
      <span>{item.todo}</span>
      <Button id="modify-button">수정</Button>
      <Button id="delete-button" button={{ onClick: () => onRemove(item.id) }}>
        삭제
      </Button>
    </label>
  );
};

export default TodoItem;
