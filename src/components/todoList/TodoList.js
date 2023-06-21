import React from 'react';

import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, onRemove, onUpdate }) => {
  return (
    <ul className={classes.ul}>
      {todoList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} onRemove={onRemove} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
