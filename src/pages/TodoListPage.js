import React, { Fragment, useState } from 'react';

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
  const getTodo = () => {
    Axios.get()
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setTodo(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const addTodoListHandler = (todo) => {
    Axios.post('', {
      todo: todo,
    })
      .then((res) => {
        setTodo((todo) => todo.concat(res.data));
      })
      .catch((err) => console.log(err));
  };
  // const checkboxToggleHandler = (id) => {
  //   const existingItemIndex = todoList.findIndex((item) => item.id === id);
  //   const existingItem = todoList[existingItemIndex];
  //   const updatedItem = {
  //     ...existingItem,
  //     isCompleted: !existingItem.isCompleted,
  //   };
  //   let updatedTodoList = [...todoList];
  //   updatedTodoList[existingItemIndex] = updatedItem;
  //   setTodoList(updatedTodoList);
  // };
  // const removeTodoListHandler = (id) => {
  //   setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  // };

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
            // onToggle={checkboxToggleHandler}
            // onRemove={removeTodoListHandler}
            onUpdate={updateTodoHandler}
          />
        </Card>
      </main>
    </Fragment>
  );
};

export default TodoListPage;
