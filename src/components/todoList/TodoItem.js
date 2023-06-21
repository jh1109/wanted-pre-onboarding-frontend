import React, { useState } from 'react';

import classes from './TodoItem.module.css';
import TodoItemButton from './todoItemButton/TodoItemButton';
import TodoItemEditButton from './todoItemButton/TodoItemEditButton';

const TodoItem = ({ item, onToggle, onRemove, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(item.todo);

  const editModeHandler = () => {
    setEditMode(true);
  };
  const updateTodoHandler = (e) => {
    setEditedTodo(e.target.value);
  };
  const updateTodoSubmitHandler = () => {
    const newItem = { ...item, todo: editedTodo };
    onUpdate(newItem.id, newItem.todo, newItem.isCompleted);
    setEditMode(false);
  };
  const editCancelHandler = () => {
    setEditMode(false);
  };
  return (
    <div className={classes.todoItemWrapper}>
      <label className={classes.label}>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => onToggle(item.id)}
          className={classes.checkboxInput}
        />
        {editMode ? (
          <input
            type="text"
            className={classes.textInput}
            value={editedTodo}
            onChange={updateTodoHandler}
          />
        ) : (
          <span>{item.todo}</span>
        )}
      </label>
      {editMode ? (
        <TodoItemEditButton
          onSubmit={updateTodoSubmitHandler}
          onCancel={editCancelHandler}
        />
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
