import React, { useRef } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';

import classes from './AddTodo.module.css';
const AddTodo = ({ onAdd }) => {
  const todoInputRef = useRef();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      isChecked: false,
      todo: todoInputRef.current.value,
    };
    onAdd(newItem);
    todoInputRef.current.value = '';
  };
  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <Input ref={todoInputRef} id="new-todo-input" label="할 일" type="text" />
      <Button type="submit" id="new-todo-add-button">
        +
      </Button>
    </form>
  );
};

export default AddTodo;
