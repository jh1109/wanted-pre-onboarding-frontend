import React, { Fragment, useState } from 'react';

import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import Card from '../components/UI/Card';

import classes from './TodoListPage.module.css';
import AddTodo from '../components/todoList/AddTodo';
import axios from 'axios';

const TodoListPage = () => {
  const data = [
    {
      id: 'todo1',
      isCompleted: false,
      todo: '해야 할 일 1',
      userId: 1,
    },
    {
      id: 'todo2',
      isCompleted: true,
      todo: '해야 할 일 2',
      userId: 1,
    },
  ];
  const [todoList, setTodoList] = useState(data);

  const addTodoListHandler = (item) => {
    setTodoList((todoList) => {
      return todoList.concat(item);
    });
  };
  const checkboxToggleHandler = (id) => {
    const existingItemIndex = todoList.findIndex((item) => item.id === id);
    const existingItem = todoList[existingItemIndex];
    const updatedItem = {
      ...existingItem,
      isCompleted: !existingItem.isCompleted,
    };
    let updatedTodoList = [...todoList];
    updatedTodoList[existingItemIndex] = updatedItem;
    setTodoList(updatedTodoList);
  };
  const removeTodoListHandler = (id) => {
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  };
  const updateTodoHandler = (newTodo) => {
    const existingItemIndex = todoList.findIndex(
      (item) => item.id === newTodo.id,
    );
    const existingItem = todoList[existingItemIndex];
    const updatedItem = { ...existingItem, todo: newTodo.todo };
    let updatedTodoList = [...todoList];
    updatedTodoList[existingItemIndex] = updatedItem;
    setTodoList(updatedTodoList);
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.todoListCard}>
          <AddTodo onAdd={addTodoListHandler} />
          <TodoList
            todoList={todoList}
            onToggle={checkboxToggleHandler}
            onRemove={removeTodoListHandler}
            onUpdate={updateTodoHandler}
          />
        </Card>
      </main>
    </Fragment>
  );
};

export default TodoListPage;
