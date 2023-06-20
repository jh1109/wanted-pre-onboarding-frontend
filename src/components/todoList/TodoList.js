import React from 'react';

import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, onToggle, onRemove }) => {
  return (
    <ul className={classes.ul}>
      {todoList.map((item) => (
        <li key={item.id}>
          <TodoItem item={item} onToggle={onToggle} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
