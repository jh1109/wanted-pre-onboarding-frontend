import React, { Fragment } from 'react';

import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import Card from '../components/UI/Card';

import classes from './TodoListPage.module.css';

const TodoListPage = () => {
  const todoList = [
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
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.todoListCard}>
          <TodoList todoList={todoList} />
        </Card>
      </main>
    </Fragment>
  );
};

export default TodoListPage;
