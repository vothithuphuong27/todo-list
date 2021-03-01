/* eslint-disable */
import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Võ Thị Thu Phương' },
    { id: 2, title: 'Học reactjs' },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }


  return (
    <div className="app">
      <h1>List - Todo</h1>
      { <TodoForm onSubmit={handleTodoFormSubmit} />}
      { <TodoList todos={todoList} onTodoClick={handleTodoClick} />}
    </div>
  );
}
export default App;
