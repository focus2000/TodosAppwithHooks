
import React, { useState, useEffect, useReducer } from 'react';
import todosReducer from '../reducers/todos';
import TodosContext from '../context/todos-context';

import TodoList from './TodosList';
import AddTodoForm from './AddTodoForm';


const TodosApp = () => {

  const [todos, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    const todosData = JSON.parse(localStorage.getItem('todos'))

    if (todosData) {
      dispatch({
        type: 'GET_TODOS', todos: todosData
      })
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>

      <h1 className="head">TODOS APP </h1>

      <TodoList />
      <AddTodoForm />

    </TodosContext.Provider>
  )
}


export default TodosApp;

