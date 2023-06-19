import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem = ({ item }) => {
  return (
    <label className={classes.label}>
      <input type="checkbox" />
      <span>{item.todo}</span>
    </label>
  );
};

export default TodoItem;
