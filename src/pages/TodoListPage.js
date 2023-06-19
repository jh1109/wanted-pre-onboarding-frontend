import React, { Fragment, useState } from 'react';

import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import Card from '../components/UI/Card';

import classes from './TodoListPage.module.css';
import AddTodo from '../components/todoList/AddTodo';

const TodoListPage = () => {
  const data = [
    {
      id: 'todo1',
      isChecked: false,
      todo: '해야 할 일 1',
    },
    {
      id: 'todo2',
      isChecked: true,
      todo: '해야 할 일 2',
    },
  ];
  const [todoList, setTodoList] = useState(data);
  const addTodoListHandler = (item) => {
    setTodoList((todoList) => {
      return todoList.concat(item);
    });
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.todoListCard}>
          <AddTodo onAdd={addTodoListHandler} />
          <TodoList todoList={todoList} />
        </Card>
      </main>
    </Fragment>
  );
};

export default TodoListPage;
