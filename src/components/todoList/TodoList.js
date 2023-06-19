import React from 'react';

import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todoList }) => {
  return (
    <ul className={classes.ul}>
      {todoList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
