import React, { useRef } from 'react';

import Input from '../UI/Input';
import Button from '../UI/Button';

import classes from './AddTodo.module.css';
const AddTodo = () => {
  const TodoInputRef = useRef();
  return (
    <form className={classes.form}>
      <Input ref={TodoInputRef} id="new-todo-input" label="할 일" type="text" />
      <Button type="submit" id="new-todo-add-button">
        +
      </Button>
    </form>
  );
};

export default AddTodo;
