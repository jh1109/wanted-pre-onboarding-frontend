import React, { Fragment, useLayoutEffect, useState, useCallback } from 'react';

import Header from '../components/header/Header';
import TodoList from '../components/todoList/TodoList';
import Card from '../components/UI/Card';

import classes from './TodoListPage.module.css';
import AddTodo from '../components/todoList/AddTodo';
import axios from 'axios';

const TodoListPage = () => {
  const [todo, setTodo] = useState([]);

  const Axios = axios.create({
    baseURL: 'https://www.pre-onboarding-selection-task.shop/todos',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    },
  });
  const getTodo = useCallback(() => {
    Axios.get()
      .then((res) => {
        if (res.status === 200) {
          setTodo(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [Axios]);
  useLayoutEffect(() => {
    if (localStorage.getItem('access_token')) {
      getTodo();
    }
  }, []);
  const addTodoListHandler = (todo) => {
    Axios.post('', {
      todo: todo,
    })
      .then((res) => {
        setTodo((todo) => todo.concat(res.data));
      })
      .catch((err) => console.log(err));
  };
  const removeTodoListHandler = (id) => {
    Axios.delete('/' + id)
      .then((res) => {
        if (res.status === 204) {
          getTodo();
        }
      })
      .catch((err) => console.log(err));
  };

  const updateTodoHandler = (id, todo, isCompleted) => {
    Axios.put('/' + id, {
      todo,
      isCompleted,
    })
      .then((res) => {
        if (res.status === 200) {
          getTodo();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <Header />
      <main>
        <Card className={classes.todoListCard}>
          <AddTodo onAdd={addTodoListHandler} />
          <TodoList
            todoList={todo}
            onRemove={removeTodoListHandler}
            onUpdate={updateTodoHandler}
          />
        </Card>
      </main>
    </Fragment>
  );
};

export default TodoListPage;
