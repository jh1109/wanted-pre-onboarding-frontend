import React from 'react';

import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, onToggle }) => {
  return (
    <ul className={classes.ul}>
      {todoList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} onToggle={onToggle} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
