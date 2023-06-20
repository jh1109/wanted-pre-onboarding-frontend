import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem = ({ item, onToggle }) => {
  return (
    <label className={classes.label}>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => onToggle(item.id)}
      />
      <span>{item.todo}</span>
    </label>
  );
};

export default TodoItem;
