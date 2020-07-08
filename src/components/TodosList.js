import React, { useContext } from 'react';
import Todo from './Todo';
import TodosContext from '../context/todos-context';



const TodosList = () => {
  const { todos } = useContext(TodosContext)

  return todos.map((todo) => (
    <Todo key={todo.id} todo={todo} />
  ))


}


export default TodosList;