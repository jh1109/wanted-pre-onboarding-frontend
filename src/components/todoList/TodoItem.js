import React, { useState } from 'react';

import classes from './TodoItem.module.css';
import TodoItemButton from './todoItemButton/TodoItemButton';
import TodoItemEditButton from './todoItemButton/TodoItemEditButton';

const TodoItem = ({ item, onToggle, onRemove }) => {
  const [editMode, setEditMode] = useState(false);

  const editModeHandler = () => {
    setEditMode(true);
  };
  return (
    <div className={classes.todoItemWrapper}>
      <label className={classes.label}>
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={() => onToggle(item.id)}
          className={classes.checkboxInput}
        />
        {editMode ? (
          <input type="text" className={classes.textInput} />
        ) : (
          <span>{item.todo}</span>
        )}
      </label>
      {editMode ? (
        <TodoItemEditButton />
      ) : (
        <TodoItemButton
          item={item}
          onRemove={onRemove}
          onEditMode={editModeHandler}
        />
      )}
    </div>
  );
};

export default TodoItem;
