import React, { useContext } from 'react';
import TodosContext from '../context/todos-context';
import todo from '../css/todo.scss';


const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  const removeTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      id: todo.id
    })
  }
  return (
    <div className="todo_list">
      <h3 className="todo_text">{todo.title}</h3>
      <button onClick={removeTodo}>Remove</button>
    </div>
  )
}


export default Todo;